import { CreateTable } from './create-table.use-case'
describe('CreateTable Usp e case', () => {
  test('should create table with default value', () => {
    const createTable = new CreateTable()
    const table = createTable.execute({ base: 5 })
    const rows = table.split('\n').length
    // console.log(table)
    expect(createTable).toBeInstanceOf(CreateTable)
    // INFO verificamos que la tabla tenga resultados lógicos
    expect(table).toContain('5 x 1 = 5')
    expect(table).toContain('5 x 10 = 50')
    //INFO verificamos que la tabla tenga 10 calculos
    expect(rows).toBe(10)
  })
  test('should create table with custom value', () => {
    const options = {
      base: 3,
      limit: 20,
    }

    const createTable = new CreateTable()

    const table = createTable.execute(options)

    console.log(table)

    const rows = table.split('\n').length

    expect(table).toContain('3 x 1 = 3')
    expect(table).toContain('3 x 20 = 60')
    expect(rows).toBe(20)
  })
})
