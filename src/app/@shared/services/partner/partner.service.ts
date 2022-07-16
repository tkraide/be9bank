import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApiResponse, IConfig, IPartner, IRegister, IUploadRequestDoc } from '@app/@shared/model';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class ParnerService {
  private apiUrl: string = environment.apiUrl;
  empresaLogada: any;
  configList: IConfig[] = [];
  url1: string;
  url2: string;
  url3: string;

  constructor(private http: HttpClient) {
    const jsonData = JSON.parse(localStorage.getItem('partnerList'));
    if (jsonData) {
      this.url1 = jsonData[0]?.url;
      this.url2 = jsonData[1]?.url;
      this.url3 = jsonData[2]?.url;
    }

    this.partnerList().subscribe((data: any) => {
      this.configList = data;
      for (var i in this.configList) {
        if (this.configList[i].parametro == '1') {
          this.url1 = this.configList[i].url;
        }
        if (this.configList[i].parametro == '2') {
          this.url2 = this.configList[i].url;
        }
        if (this.configList[i].parametro == '3') {
          this.url3 = this.configList[i].url;
        }
      }
    });
  }

  baseUrlConfig: string = 'https://blockchain-contract-manager-default-rtdb.firebaseio.com/config.json';

  login(loginPayload: any): Observable<any> {
    return this.http.post('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  partnerList(): Observable<IPartner[]> {
    return this.http.get<IPartner[]>(this.baseUrlConfig);
  }

  setConfig(config: IConfig[]): Observable<any> {
    return this.http.put<any>(this.baseUrlConfig, config);
  }

  getRegisters(): Observable<any> {
    this.empresaLogada = window.localStorage.getItem('empresaLogada');
    const jsonData = JSON.parse(window.localStorage.getItem('parnerList'));

    console.log('getRegisters', this.empresaLogada);
    console.log('getRegisters', jsonData);

    if (this.empresaLogada === '1') {
      return this.http.get<any>(jsonData[0].url + '/my-batches');
    }
    if (this.empresaLogada === '2') {
      return this.http.get<any>(jsonData[1].url + '/my-batches');
    }
    if (this.empresaLogada === '3') {
      return this.http.get<any>(jsonData[2].url + '/my-batches');
    }
  }

  getAllRegisters() {
    return this.http.get(`${this.apiUrl}/my-batches`);
  }

  getRegisterById(id: string): Observable<any> {
    this.empresaLogada = window.localStorage.getItem('empresaLogada');
    const jsonData = JSON.parse(window.localStorage.getItem('parnerList'));
    if (this.empresaLogada === '1') {
      return this.http.get<any>(jsonData[0].url + '/register/' + id);
    }
    if (this.empresaLogada === '2') {
      return this.http.get<any>(jsonData[1].url + '/register/' + id);
    }
    if (this.empresaLogada === '3') {
      return this.http.get<any>(jsonData[2].url + '/register/' + id);
    }
  }

  getRegisterHistById(id: string): Observable<any> {
    this.empresaLogada = window.localStorage.getItem('empresaLogada');
    const jsonData = JSON.parse(window.localStorage.getItem('parnerList'));
    if (this.empresaLogada === '1') {
      return this.http.get<any>(jsonData[0].url + '/register/history/' + id);
    }
    if (this.empresaLogada === '2') {
      return this.http.get<any>(jsonData[1].url + '/register/history/' + id);
    }
    if (this.empresaLogada === '3') {
      return this.http.get<any>(jsonData[2].url + '/register/history/' + id);
    }
  }

  createRegister(parceiro: any, register: IRegister): Observable<any> {
    this.empresaLogada = window.localStorage.getItem('empresaLogada');
    const jsonData = JSON.parse(window.localStorage.getItem('parnerList'));
    console.log({ register });
    if (this.empresaLogada === '1') {
      if (parceiro === 'Decolar') {
        return this.http.post<any>(jsonData[0].url + '/register/CN=PartyB,O=PartyB,L=Boston,C=US', register);
      } else {
        return this.http.post<any>(jsonData[0].url + '/register/CN=PartyC,O=PartyC,L=Boston,C=US', register);
      }
    }
    if (this.empresaLogada === '2') {
      return this.http.post<any>(jsonData[1].url + '/register/CN=PartyA,O=PartyA,L=Boston,C=US', register);
    } else {
      return this.http.post<any>(jsonData[2].url + '/register/CN=PartyA,O=PartyA,L=Boston,C=US', register);
    }
  }

  updateRegister(parceiro: any, empresa: any, register: IRegister): Observable<any> {
    if (empresa === '1') {
      if (parceiro === 'Decolar') {
        //todo mudar pra B
        return this.http.post(window.localStorage.getItem('apiBaseUrlA') + '/O=PartyB,L=New York,C=US', register);
      } else {
        return this.http.post(window.localStorage.getItem('apiBaseUrlA') + '/O=PartyC,L=Boston,C=US', register);
      }
    }
    if (empresa === '2') {
      return this.http.post(window.localStorage.getItem('apiBaseUrlB') + '/O=PartyA,L=London,C=GB', register);
    }
    if (empresa === '3') {
      return this.http.post(window.localStorage.getItem('apiBaseUrlC') + '/O=PartyA,L=London,C=GB', register);
    }
  }

  uploadFile(file: File): Observable<any> {
    const data: FormData = new FormData();

    data.append('file', file, file.name);
    data.append('name', 'Paulo Henrique');
    data.append('user', 'test');
    data.append('email', 'email@email.com');

    return this.http.post('http://34.125.56.61:3000/signDocument', data, {
      reportProgress: true,
    });
  }

  getSummary(): Observable<any> {
    this.empresaLogada = window.localStorage.getItem('empresaLogada');
    const jsonData = JSON.parse(window.localStorage.getItem('parnerList'));
    console.log('getSummaryyyy');

    if (jsonData) {
      console.log('empresaLogada', this.empresaLogada);
      console.log('jsonData', jsonData);
      if (this.empresaLogada === '1') {
        return this.http.get<any>(jsonData[0].url + '/dashboard/');
      }
      if (this.empresaLogada === '2') {
        return this.http.get<any>(jsonData[1].url + '/dashboard/');
      }
      if (this.empresaLogada === '3') {
        return this.http.get<any>(jsonData[2].url + '/dashboard/');
      }
    }
  }
}
