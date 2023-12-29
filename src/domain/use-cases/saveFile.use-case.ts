import fs from 'fs'

export interface saveFileUseCase {
  execute: (option: Options) => boolean
}

export interface Options {
  fileContent: string
  destination?: string
  fileName?: string
}

export class SaveFile implements saveFileUseCase {
  execute({ fileContent, destination = 'output', fileName = 'table.txt' }: Options): boolean {
    try {
      fs.mkdirSync(destination, { recursive: true }) //NOTE es para crear directorio por si no existe
      fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent, 'utf-8')
      return true
    } catch (error) {
      return false
    }
  }
}
