import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AffaireService {

  constructor(private httpClient: HttpClient) { }
  public getAllAffaire (): Observable <any> {
    return this.httpClient.get('http://localhost:9090/ProjetFinalMVC/affaires').map(response => response);
  }

  public getAffaire(id:number) : Observable<any>{
    return this.httpClient.get('http://localhost:9090/ProjetFinalMVC/affaires/'+id);
  }
  public saveAffaire (affaire:any) : Observable<any> {
  return this.httpClient.post('http://localhost:9090/ProjetFinalMVC/affaires/',affaire);
  }
  public deleteAffaire(id:number) : Observable <any> {
    return this.httpClient.delete('http://localhost:9090/ProjetFinalMVC/affaires/'+id);
  }
}
