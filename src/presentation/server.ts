import { CheckService } from '../domain/use-cases/cheks/check-service';
import { ClonService } from './cron/cron-service';

export class ServerApp {
  //NOTE en realidad no hace falta el public porque por defecto lo es
  public static start() {
    console.log('Servidor Iniciado...');

    const tiempoEjecutar: string = '*/3 * * * * *';
    const funcionAutomatica = () => {
      const url = 'https://google.com';
      const checkService = new CheckService(
        () => console.log('Conexión Establecida con la URL ' + url),
        (error) => console.log(error),
      );
      checkService.execute(url);
    };
    // note Ejecutamos el serivice de cron creado por nosotros
    ClonService.createJob(tiempoEjecutar, funcionAutomatica);
  }
}
