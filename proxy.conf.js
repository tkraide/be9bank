const HttpsProxyAgent = require('https-proxy-agent');

/*
 * API proxy configuration.
 * This allows you to proxy HTTP request like `http.get('/api/stuff')` to another server/port.
 * This is especially useful during app development to avoid CORS issues while running a local server.
 * For more details and options, see https://angular.io/guide/build#using-corporate-proxy
 */
const proxyConfig = [
  {
    context: '/api0',
    pathRewrite: { '^/api': '' },
    target: 'https://api.chucknorris.io',
    changeOrigin: true,
    secure: false
  },
  {
    context: '/api1',
    target: 'http://localhost:10060',
    pathRewrite: {'^/api1' : ''}
  },
  {
    context: '/api2',
    target: 'http://localhost:10070',
    pathRewrite: {'^/api2' : ''}
  },
  {
    context: '/api3',
    target: 'http://34.121.92.254:10060',
    pathRewrite: {'^/api3' : ''}
  },
  {
    context: '/api4',
    target: 'http://34.125.56.61:3000',
    pathRewrite: {'^/api4' : ''}
  }
];

/*
 * Configures a corporate proxy agent for the API proxy if needed.
 */
function setupForCorporateProxy(proxyConfig) {
  if (!Array.isArray(proxyConfig)) {
    proxyConfig = [proxyConfig];
  }

  const proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  let agent = null;

  if (proxyServer) {
    console.log(`Using corporate proxy server: ${proxyServer}`);
    agent = new HttpsProxyAgent(proxyServer);
    proxyConfig.forEach(entry => { entry.agent = agent; });
  }

  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);
