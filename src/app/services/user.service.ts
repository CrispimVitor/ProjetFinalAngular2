import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  public getAllUtilisateur (): Observable <any> {
    return this.httpClient.get('http://localhost:9090/ProjetFinalMVC/users').map(response => response);
  }

  public getUtilisateur(id:number) : Observable<any>{
    return this.httpClient.get('http://localhost:9090/ProjetFinalMVC/users/'+id);
  }
  public saveUtilisateur (utilisateur:any) : Observable<any> {
  return this.httpClient.post('http://localhost:9090/ProjetFinalMVC/users/',utilisateur);
  }
  public deleteUtilisateur(id:number) : Observable <any> {
    return this.httpClient.delete('http://localhost:9090/ProjetFinalMVC/users/'+id);
  }
}
