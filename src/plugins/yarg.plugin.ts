import { throws } from 'assert'
import yargs, { argv, options } from 'yargs'
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Limite de la tabla de multiplicar',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla de multiplicar',
  })
  .check((args, options) => {
    // options realmente no lo usamos acá, pero lo dejamos por si acaso
    if (args.b < 0) throw 'La base tiene que ser mayor o igual a 0'

    return true
  })
  .parseSync()
