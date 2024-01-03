import { log } from 'console';
import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/saveFile.use-case';
import { serverApp } from './server-app';

describe('server app', () => {
  const options = {
    base: 5,
    limit: 12,
    show: true,
    name: 'table.txt',
    destination: './output',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should create ServerApp instance', () => {
    const server = new serverApp();
    expect(server).toBeInstanceOf(serverApp);
    expect(typeof serverApp.run).toBe('function');
  });

  test('should run ServerApp with options', () => {
    // //NOTE si no pongo el mock implementation, estoy simplemente creando una función que escucha ese log
    const logSpy = jest.spyOn(console, 'log');
    // //NOTE el protoype es necesario para que se ejecute
    const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
    const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');
    serverApp.run(options);
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy).toHaveBeenCalledWith('Server running...');
    expect(logSpy).toHaveBeenCalledWith('Arhivo guardado con nombre: table.txt');
    expect(createTableSpy).toHaveBeenCalledTimes(1);
    expect(createTableSpy).toHaveBeenCalledWith({
      base: options.base,
      limit: options.limit,
    });
    expect(saveFileSpy).toHaveBeenCalledTimes(1);
    expect(saveFileSpy).toHaveBeenCalledWith({
      fileContent: expect.any(String),
      fileName: options.name,
      destination: options.destination,
    });
  });
  test('should run ServerApp with values mocks', () => {
    //NOTE las fn() son similares a las spyOn porque nos permite saber cosas de la constante o variable que definimos
    const createMock = jest.fn().mockReturnValue('1 X 2 = 2');
    const saveFileMock = jest.fn().mockReturnValue(true);
    const logMock = jest.fn();
    const errorMock = jest.fn();

    CreateTable.prototype.execute = createMock;
    SaveFile.prototype.execute = saveFileMock;
    console.log = logMock; //NOTE global es como windows cuando estabamos con JavaScript en la WEB
    console.error = errorMock;

    serverApp.run(options);

    expect(logMock).toHaveBeenCalledWith('Server running...');
    expect(createMock).toHaveBeenCalledWith({ base: options.base, limit: options.limit });
    expect(saveFileMock).toHaveBeenCalledWith({
      fileContent: '1 X 2 = 2',
      fileName: options.name,
      destination: options.destination,
    });
    expect(logMock).toHaveBeenCalledWith('Arhivo guardado con nombre: table.txt');
    expect(errorMock).not.toHaveBeenCalled();
  });
});
