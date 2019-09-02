import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private httpClient: HttpClient) { }
  public getAllTache (): Observable <any> {
    return this.httpClient.get('http://localhost:9090/ProjetFinalMVC/taches').map(response => response);
  }

  public getTache(id:number) : Observable<any>{
    return this.httpClient.get('http://localhost:9090/ProjetFinalMVC/taches/'+id);
  }
  public saveTache (tache:any) : Observable<any> {
  return this.httpClient.post('http://localhost:9090/ProjetFinalMVC/taches/',tache);
  }
  public deleteTache(id:number) : Observable <any> {
    return this.httpClient.delete('http://localhost:9090/ProjetFinalMVC/taches/'+id);
  }
}
