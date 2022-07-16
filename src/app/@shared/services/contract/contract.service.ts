import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPartner, IUploadRequestDoc, IUser } from '@app/@shared/model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  private user: IUser = {} as IUser;

  constructor(private http: HttpClient, private db: DatabaseService) {
    (async () => {
      this.user = await this.db.user.toCollection().first();
    })();
  }

  create(data: any): Observable<any> {
    /*
 // dentro do playload
 doc:{
    docHash: string;
    signature?: string;
    pdfSigned?: any;
 }
 */
    console.log({ data });

    return this.http.post(`${this.user.url}/register/?${this.user.parametro}`, data);
  }

  getRegisterById(id: string): Observable<any> {
    return this.http.get<any>(`${this.user.url}/register/${id}`);
  }

  getRegisters(): Observable<any> {
    return this.http.get<any>(`${this.user.url}/my-batches`);
  }

  uploadFileAndSign(file: File): Observable<any> {
    const empresaLogada = window.localStorage.getItem('empresaLogada');
    const jsonData: IPartner[] = JSON.parse(window.localStorage.getItem('parnerList'));
    const dadosEmpresa = jsonData.find((empresa: IPartner) => empresa.parametro === empresaLogada);
    console.log(file);

    const data = {
      file: file.arrayBuffer,
      name: dadosEmpresa.nome,
      email: dadosEmpresa.email,
      user: dadosEmpresa.cnpj,
    };

    const form: FormData = new FormData();
    form.append('file', file);
    form.append('email', data.email);
    form.append('user', 'alan');
    form.append('name', '');

    console.log({ data, form, file: file.arrayBuffer });

    return this.http.post('http://localhost:4200/api4/signDocument', form, {
      reportProgress: true,
    });
  }

  uploadFileDirect(file: any): Observable<any> {
    const data: FormData = new FormData();
    const empresaLogada = window.localStorage.getItem('empresaLogada');
    const jsonData = JSON.parse(window.localStorage.getItem('parnerList'));
    console.log('uploadFileDirect', { file });
    data.append('file', file);
    console.log(data);

    let url = jsonData[0].url;

    if (empresaLogada === '2') {
      url = jsonData[1].url;
    } else if (empresaLogada === '3') {
      url = jsonData[2].url;
    }

    return this.http.post(url + '/upload', data, {
      responseType: 'text',
      reportProgress: true,
    });
  }

  donwloadFile(hash: String): Observable<any> {
    return this.http.get<any>(localStorage.getItem('apiBaseUrlA') + '/attachments/' + hash, {
      responseType: 'blob' as 'json',
    });
  }

  getSignedDoc(hash: String): Observable<any> {
    const empresaLogada = window.localStorage.getItem('empresaLogada');
    const jsonData = JSON.parse(window.localStorage.getItem('parnerList'));
    let url = jsonData[0].url;

    // return this.http.get<any>(url + '/attachments/' + hash, {
    //   responseType: 'arraybuffer' as 'json',
    // });
    return this.http.get(url + '/attachments/' + hash, { responseType:  'blob' as 'json' });
  }

  signDocument(file: File, password: string): Promise<void> {
    console.log('file', file);
    console.log('password', password);

    console.log(file instanceof Blob);

    return new Promise<void>((resolve, reject) => {
      const form: FormData = new FormData();
      form.append('file', file);
      let fileReader = new FileReader();
      let arr = [];
      console.log(form);
      this.getPdfFile().subscribe(async (filePDF) => {
        // await sign();
        console.log('file', filePDF);
        const fileArr = await file.arrayBuffer();
        console.log('fileArr', fileArr);
        // const fileBuff = this.convertArrayBufferToBuffer(fileArr);
        // console.log(fileBuff);

        resolve();
      });
    });
  }

  getPdfFile(): Observable<any> {
    return this.http.get('./assets/pdf-example.pdf', {
      responseType: 'arraybuffer',
    });
  }

  // private convertArrayBufferToBuffer(fileArrayBuffer: ArrayBuffer): Buffer {
  //   // const buffer = Buffer.alloc(fileArrayBuffer.byteLength);
  //   const buffer = new Buffer(fileArrayBuffer);
  //   const view = new Uint8Array(fileArrayBuffer);
  //   for (var i = 0; i < buffer.length; ++i) {
  //     buffer[i] = view[i];
  //   }
  //   return buffer;
  // }
}
