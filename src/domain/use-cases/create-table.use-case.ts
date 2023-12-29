// INFO Son las reglas de negocio que yo quiero obligatoriamente  tener en la clase CreateTable
export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string
}

export interface CreateTableOptions {
  base: number
  limit?: number
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}
  execute({ base, limit = 10 }: CreateTableOptions) {
    let output: string = `\n`
    for (let i: number = 1; i <= limit; i++) {
      output += `${base} x ${i} = ${i * base} \n`
    }
    return output
  }
}
