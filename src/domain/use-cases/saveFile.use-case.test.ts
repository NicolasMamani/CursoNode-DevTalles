import { exec } from 'child_process';
import { SaveFile } from './saveFile.use-case';
import fs from 'fs';

describe('save file use case', () => {
  //INFO método que se ejecuta antes de cada prueba y me permite borrar el directorio de output

  test('should save file with default value', () => {
    // const saveFile = new SaveFile();
    // const options = {
    //   fileContent: 'testfileContent',
    // };
    // const filePath = 'output/table.txt';
    // const result = saveFile.execute(options);
    // //NOTE verificamos que el archivo haya sido creado
    // //NOTE nos fileExist nos puede dar un falso positivo si existe el archivo de antes
    // const fileExist = fs.existsSync(filePath);
    // const fileContent = fs.readFileSync(filePath, 'utf-8');
    // expect(result).toBe(true);
    // expect(fileExist).toBe(true); //NOTE verificamos que el archivo exista
    // expect(fileContent).toBe(options.fileContent);
    // fs.rmSync('output', { recursive: true });
  });
  test('should save file with custom values', () => {
    // const saveFile = new SaveFile();
    // const options = {
    //   fileContent: 'custom content',
    //   destination: 'custom-outputs',
    //   fileName: 'custom-table-name',
    // };
    // const result = saveFile.execute(options);
    // //NOTE verificamos que el archivo haya sido creado
    // //NOTE nos fileExist nos puede dar un falso positivo si existe el archivo de antes
    // const filePathComplet = options.destination + '/' + options.fileName;
    // const fileExist = fs.existsSync(filePathComplet);
    // const fileContent = fs.readFileSync(filePathComplet, 'utf-8');
    // expect(result).toBe(true);
    // expect(fileExist).toBe(true);
    // expect(fileContent).toBe(options.fileContent);
    // fs.rmSync(options.destination, { recursive: true });
  });
  test('should return false if directory not be created', () => {
    // const saveFile = new SaveFile();
    // // NOTE simulamos un ERROR al querer usar el método mkdirSync
    // const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
    //   throw new Error('This is custom Error message from mkdirSync');
    // });
    // //NOTE como simulamos que mkdirSync arroja un error, el test retorna false
    // const result = saveFile.execute({ fileContent: 'test file content' });
    // expect(result).toBe(false);
    // mkdirSpy.mockRestore();
  });
  test('should return false if writeFileSync fail', () => {
    // const saveFile = new SaveFile();
    // //NOTE como simulamos que mkdirSync arroja un error, el test retorna false
    // const writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
    //   throw new Error('This is a custom error message from writeFileSync');
    // });
    // const result = saveFile.execute({ fileContent: 'Hola' });
    // expect(result).toBe(false);
    // writeFileSyncSpy.mockRestore();
  });
});
