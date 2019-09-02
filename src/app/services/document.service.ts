import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private httpClient: HttpClient) { }
  public getAllDocument (): Observable <any> {
    return this.httpClient.get('http://localhost:9090/ProjetFinalMVC/documents').map(response => response);
  }

  public getDocument(id:number) : Observable<any>{
    return this.httpClient.get('http://localhost:9090/ProjetFinalMVC/documents/'+id);
  }
  public saveDocument (document:any) : Observable<any> {
  return this.httpClient.post('http://localhost:9090/ProjetFinalMVC/documents/',document);
  }
  public deleteDocument(id:number) : Observable <any> {
    return this.httpClient.delete('http://localhost:9090/ProjetFinalMVC/documents/'+id);
  }
}

