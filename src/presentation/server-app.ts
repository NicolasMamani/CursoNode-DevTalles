import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/saveFile.use-case';

interface RunOptions {
  base: number;
  limit: number;
  show: boolean;
  name: string;
  destination: string;
}

export class serverApp {
  static run({ base, limit, show, name, destination }: RunOptions) {
    console.log('Server running...');
    //INFO creamos tabla
    const table = new CreateTable().execute({ base, limit });
    //INFO Guardamos archivo
    const wasCreated: boolean = new SaveFile().execute({
      fileContent: table,
      destination: destination,
      fileName: name,
    });
    //INFO mostrar archivo
    if (show) console.log(table);
    if (wasCreated) {
      console.log('Arhivo guardado con nombre: table.txt');
    } else {
      console.error('Error al guardar el archivo');
    }
  }
}
