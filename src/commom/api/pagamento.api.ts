import { AtualizarPagamentoParcialDto } from './../dto/atualizarPagamentoParcialDto.model copy';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BuscarPagamentoDto } from "../dto/buscarPagamentoDto.model";
import { environment } from "../../environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PagamentoApi {
  constructor(private http: HttpClient) {
  }

  public buscarTodos(): Observable<BuscarPagamentoDto[]> {
    return this.http.get<BuscarPagamentoDto[]>(environment.base_url);
  }

  public atualizarPagamentoParcial(atualizarPagamentoParcialDto: AtualizarPagamentoParcialDto): Observable<void> {
    return this.http.patch<void>(environment.base_url+'/'+atualizarPagamentoParcialDto.Id, atualizarPagamentoParcialDto);
  }
}
