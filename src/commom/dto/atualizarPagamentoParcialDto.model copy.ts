export class AtualizarPagamentoParcialDto {
  Status?: string;
  Id?: number = 0;

  constructor(init?: Partial<AtualizarPagamentoParcialDto>) {
    Object.assign(this, init);
  }
}
