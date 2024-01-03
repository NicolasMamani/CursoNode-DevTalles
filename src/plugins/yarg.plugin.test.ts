import { equal } from 'assert';

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { yarg } = await import('./yarg.plugin');
  return yarg;
};

const originalArgv = process.argv;

describe('test yarg.plugin.test.ts', () => {
  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });
  test('should return default values', async () => {
    const yarg = await runCommand(['-b', '5']);
    //console.log(yarg);
    expect(yarg).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: 'table',
        d: './output',
      }),
    );
  });

  test('should return configuration with custom values', async () => {
    const yarg = await runCommand([
      '-b',
      '3',
      '-l',
      '20',
      '--show',
      '--name',
      'table2',
      '--destination',
      './output2',
    ]);
    console.log(yarg);

    expect(yarg).toEqual(
      expect.objectContaining({
        b: 3,
        l: 20,
        s: true,
        n: 'table2',
        d: './output2',
      }),
    );
  });
});
