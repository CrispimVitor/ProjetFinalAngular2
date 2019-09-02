import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private httpClient: HttpClient) { }
  public getAllUtilisateur (): Observable <any> {
    return this.httpClient.get('http://localhost:9090/ProjetFinalMVC/utilisateurs').map(response => response);
  }

  public getUtilisateur(id:number) : Observable<any>{
    return this.httpClient.get('http://localhost:9090/ProjetFinalMVC/utilisateurs/'+id);
  }
  public saveUtilisateur (utilisateur:any) : Observable<any> {
  return this.httpClient.post('http://localhost:9090/ProjetFinalMVC/utilisateurs/',utilisateur);
  }
  public deleteUtilisateur(id:number) : Observable <any> {
    return this.httpClient.delete('http://localhost:9090/ProjetFinalMVC/utilisateurs/'+id);
  }
}