const task = {
  name: 'name',
  status: 'done',
  point: 1,
  date: new Date(),
}
const histories = Array(10).fill(0).map(_ => task)

export {histories}