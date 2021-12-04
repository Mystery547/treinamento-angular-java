import { ICliente } from "./cliente";

export interface IContas {
  cliente: ICliente;
  numero: string;
  agencia: string;
  saldo: number;
}
