import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TribunalService {

  constructor(private httpClient: HttpClient) { }
  public getAllTribunal (): Observable <any> {
    return this.httpClient.get('http://localhost:9090/ProjetFinalMVC/tribunals').map(response => response);
  }

  public getTribunal(id:number) : Observable<any>{
    return this.httpClient.get('http://localhost:9090/ProjetFinalMVC/tribunals/'+id);
  }
  public saveTribunal (tribunal:any) : Observable<any> {
  return this.httpClient.post('http://localhost:9090/ProjetFinalMVC/tribunals/',tribunal);
  }
  public deleteTribunal(id:number) : Observable <any> {
    return this.httpClient.delete('http://localhost:9090/ProjetFinalMVC/tribunals/'+id);
  }
}
