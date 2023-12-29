import { yarg } from './plugins/yarg.plugin'
import { serverApp } from './presentation/server-app'
;(async () => {
  await main()
})()

async function main() {
  //NOTE si no pongo "b", "l", "s", "n" y "d" me marca un error
  const { b: base, l: limit, s: show, n: name, d: destination } = yarg

  serverApp.run({ base, limit, show, name, destination })
}
