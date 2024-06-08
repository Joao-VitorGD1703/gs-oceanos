import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OceanData } from '../types/oceanData';
import { ResquestType } from '../types/requestTypes';

@Injectable({
  providedIn: 'root'
})
export class OceanDataService {

  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?';

  constructor(private http: HttpClient) { }
  list(ocean: ResquestType): Observable<OceanData[]> {
    var url = this.apiUrl;
    if (ocean.regiao) {
      url = url + 'regiao=' + ocean.regiao + '&';
    }
    if (ocean.especie) {
      url = url + 'especie=' + ocean.especie + '&';
    }
    if (ocean.statusConservacao) {
      url = url + 'statusConservacao=' + ocean.statusConservacao + '&';
    }
    if (ocean.temperaturaMin) {
      url = url + 'temperaturaMin=' + ocean.temperaturaMin + '&';
    }
    if (ocean.temperaturaMax) {
      url = url + 'temperaturaMax=' + ocean.temperaturaMax + '&';
    }
    if (ocean.phMin) {
      url = url + 'phMin=' + ocean.phMin + '&';
    }
    if (ocean.phMax) {
      url = url + 'phMax=' + ocean.phMax + '&';
    }
    if (ocean.nivelPoluicao) {
      url = url + 'nivelPoluicao=' + ocean.nivelPoluicao + '&';
    }
    url = url + 'pagina=' + ocean.pagina + '&';
    url = url + 'qtde=10  ';

    return this.http.get(url) as Observable<OceanData[]>;
  }
}
