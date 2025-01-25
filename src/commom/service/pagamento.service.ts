import { AtualizarPagamentoParcialDto } from './../dto/atualizarPagamentoParcialDto.model copy';
import { ToastrService } from "ngx-toastr";
import { PagamentoApi } from "../api/pagamento.api";
import { BuscarPagamentoDto } from "../dto/buscarPagamentoDto.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class PagamentoService {
  constructor
  (
    private _pagamentoApi: PagamentoApi,
    private _toastService: ToastrService
  ) { }

  public buscarTodos(): Promise<BuscarPagamentoDto[]> {
    return new Promise((resolve, reject) => {
      this._pagamentoApi.buscarTodos().subscribe((retorno: BuscarPagamentoDto[]) => {
        resolve(retorno);
      }, erro => {
        this._toastService.error('', 'Houve uma falha ao buscar os pagamentos.', { toastClass: 'toast ngx-toastr', closeButton: true });
        reject(erro);
      });
    });
  }

  public atualizarParcial(atualizarPagamentoParcialDto: AtualizarPagamentoParcialDto): Promise<void> {
    return new Promise((resolve, reject) => {
      this._pagamentoApi.atualizarPagamentoParcial(atualizarPagamentoParcialDto).subscribe((retorno: void) => {
        resolve(retorno);
      }, erro => {
        this._toastService.error('', 'Houve uma falha ao atualizar o pagamento.', { toastClass: 'toast ngx-toastr', closeButton: true });
        reject(erro);
      });
    });
  }
}
