import dayjs from 'dayjs'
import faker  from 'faker'

const generateTask = (count: number) => {
  const baseTask = {
    name: 'name',
    status: 'done',
    point: 1,
    date: dayjs().startOf('year').toDate(),
  }

  const tasks = Array(count).fill(0).map((_, i) => {
    const task = {...baseTask}
    const randomDay = Math.floor(Math.random() * 100)
    task.date = dayjs(task.date).add(randomDay, 'day').toDate()
    task.name = faker.lorem.sentence()

    return task
  })

  return tasks
}
const tasks = generateTask(100)

export {tasks}