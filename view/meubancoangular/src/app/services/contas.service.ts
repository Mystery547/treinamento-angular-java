import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IContas } from '../interfaces/contas';
import { ISaqueDeposito } from '../interfaces/saque-deposito';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  api = `${environment.api}/contas/`;
  constructor(private http: HttpClient) { }

  listarTodasContas() {
    return this.http.get<IContas[]>(this.api)
  }

  saque(saque: ISaqueDeposito) {
    return this.http.post(`${this.api}/saque`, saque);
  }
}
