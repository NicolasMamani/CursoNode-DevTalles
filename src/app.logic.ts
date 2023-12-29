const fs = require('fs')
import { yarg } from './plugins/yarg.plugin'

let data: string[] = []

//NOTE si no pongo "b", "l" y "s" me marca un error
const { b: base, l: limit, s: show } = yarg

//INFO cabecera
const header = `
================================================
                Tabla del ${base}
================================================
  `

let output: string = `\n`

for (let i: number = 1; i <= limit; i++) {
  output += `${base} x ${i} = ${i * base} \n`
}

//INFO agrapamos la cabecera con la salida
output = header + output

if (show) {
  console.log(output)
}

const outputPath = `output` // directorio
fs.mkdirSync(outputPath, { recursive: true }) //NOTE es para crear directorio por si no existe
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, output, 'utf8', (error: any) => {
  if (error) throw error
  console.log('The file was saved!')
})
