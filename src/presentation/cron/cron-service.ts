import { CronJob } from 'cron';
type TiempoParaEjecutar = string | Date;
type FuncionAutomatica = () => void;
export class ClonService {
  static createJob(tiempoParaEjecutar: TiempoParaEjecutar, funcionAutomatica: FuncionAutomatica) {
    const job = new CronJob(tiempoParaEjecutar, funcionAutomatica);
    job.start(); //NOTE sin esto no anda
  }
}
