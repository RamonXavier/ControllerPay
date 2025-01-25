import { Component, OnInit } from '@angular/core';
import { BuscarPagamentoDto } from '../commom/dto/buscarPagamentoDto.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AtualizarPagamentoParcialDto } from '../commom/dto/atualizarPagamentoParcialDto.model copy';
import { PagamentoService } from '../commom/service/pagamento.service';

@Component({
  selector: 'app-spotify2025',
  templateUrl: './spotify2025.component.html',
  styleUrls: ['./spotify2025.component.css'],
  standalone: false
})
export class Spotify2025Component implements OnInit {

  public pagamentos: BuscarPagamentoDto[] = [];
  public acessoLiberado: boolean = false;
  public buscandoPagamentos: boolean = true;
  public senhaParaAtualizar: string = '';
  public senhaDefault = "91377"

  constructor(private _pagamentoService: PagamentoService, private _toastService: ToastrService, private _router: Router) { }

    ngOnInit() {
      this.buscandoPagamentos = true;
      this._pagamentoService.buscarTodos().then(retorno =>{
        this.pagamentos = retorno.filter(x=>x.Servico == 'Spotify').sort((a, b) => Number(a.Ordem) - Number(b.Ordem));
      });
    }

    public definirComoPago(buscarPagamentoDto: BuscarPagamentoDto):void {
      let atualizarPagamentoParcial: AtualizarPagamentoParcialDto = {
        Id: buscarPagamentoDto['id'],
        Status: 'Pago'
      }

      buscarPagamentoDto.Atualizando = true;
      this._pagamentoService.atualizarParcial(atualizarPagamentoParcial).then(() => {
        this._pagamentoService.buscarTodos().then(retorno =>{
          this.pagamentos = retorno.filter(x=>x.Servico == 'Spotify').sort((a, b) => Number(a.Ordem) - Number(b.Ordem));
          this._toastService.success('Registro atualziado com sucesso', 'Chicken Dinner!!');
          buscarPagamentoDto.Atualizando = false;
        });
      });
    }

    public verificarSenha(senha: string):void {
      this.acessoLiberado = senha == this.senhaDefault;
      if(this.acessoLiberado)
        this._toastService.success('Tudo certo', 'Chicken Dinner!!');
      else
        this._toastService.error('Você não pode fazer isso', 'Noob');
    }
}
