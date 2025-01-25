export class BuscarPagamentoDto {
  Ordem?: string;
  Servico?: string;
  Assinante?: string;
  Valor?: string;
  Status?: string;
  Mes?: string;
  id?: number ;
  Atualizando?: boolean = false;

  constructor(init?: Partial<BuscarPagamentoDto>) {
    Object.assign(this, init);
  }
}
