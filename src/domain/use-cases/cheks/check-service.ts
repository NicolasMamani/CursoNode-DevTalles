interface CheckServiceI {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceI {
  //NOTE La inyección de dependencias se hace en un contructor en TypeScript
  constructor(
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback,
  ) {
    //NOTE recordemos que estas es la forma corta de definir atributos
  }
  async execute(url: string): Promise<boolean> {
    try {
      const conexión = await fetch(url);
      if (conexión.ok) {
        this.successCallback();
        return true;
      }
      throw new Error('Error al intentar realizar la petición a la URL' + url);
    } catch (error) {
      this.errorCallback(`Error ${error}`);
      return false;
    }
  }
}
