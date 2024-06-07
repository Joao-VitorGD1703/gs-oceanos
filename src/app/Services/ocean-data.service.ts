import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OceanData } from '../types/oceanData';


@Injectable({
  providedIn: 'root'
})


export class OceanDataService {

  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?pagina=1&qtde=20';

  constructor(private http: HttpClient) { }

  list(): Observable<OceanData[]> {
    return this.http.get<OceanData[]>(this.apiUrl) as Observable<OceanData[]>;
  }
}
