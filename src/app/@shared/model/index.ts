export type TVehicle = 'B' | 'BS' | 'AX' | 'C' | 'D' | 'F' | 'FX' | 'G' | 'H' | 'HX' | 'HY';
export type TRegisterStatus = 'RE' | 'AR' | 'AE' | 'EF' | 'AP' | 'PE';

export interface IPartner {
  cnpj: string;
  comissao: string;
  contrato: string;
  email: string;
  nome: string;
  url: string;
  parametro: string;
}

export interface IKeyValue {
  key: string;
  value: string;
}

export interface IUser {
  id?: string;
  email: string;
  nome: string;
  type: 'hoster' | 'partner';
  url: string;
  password: string;
  parametro: string;
}

export interface SignatureContactInterface {
  name: string;
  email: string;
  signed?: boolean;
}

export interface AttachmentContractInterface {
  hash: string;
  description: string;
  signatureList: SignatureContactInterface[];
}

export interface SigntureContractInterface {
  id: number;
  partner: string;
  contacts?: SignatureContactInterface[];
}

export class IConfig {
  nome: string;
  cnpj: string;
  comissao: string;
  contrato: string;
  url: string;
  parametro: string;
}

export class IApiResponse {
  status: number;
  message: number;
  result: IRegister[];
}

export class SignatureContact implements SignatureContactInterface {
  signed?: boolean;
  constructor(public name: string, public email: string) {}
}

export class IDash {
  totalContracts: number;
  totalContractUpdates: number;
  totalContractValue: number;
  barChartTotalContractsByMonth: string;
  barChartTotalUpdateByMonth: string;
}

export class IRegister {
  id: string;
  payload: string;
}
/*
id: undefined
JSON.stringfy({})
*/
export class IUploadResponseDoc {
  docHash: string;
  signature?: string;
  pdfSigned?: any;
}

export class IUploadRequestDoc {
  file?: File;
  user?: string; // test
  email?: string;
  name?: string;
}
