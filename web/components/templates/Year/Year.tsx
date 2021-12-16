import dayjs from 'dayjs'
import {getDaysInYear, isSameDay} from '../../../lib/date/getDaysInYear'
import Cell, {TaskProp} from '../../templates/Cell/Cell'
interface Prop {
  tasks: TaskProp[];
}

const KEY_FORMAT = 'YYYY-MM-DD'
const Year = ({ tasks }: Prop) => {
  const days = getDaysInYear()
  console.log('Year component: tasks ', tasks)
  const tasksPerDay = {} as any
  for (const task of tasks) {
    const key = dayjs(task.date).format(KEY_FORMAT)
    if (!(key in tasksPerDay)) tasksPerDay[key] = []

    tasksPerDay[key].push(task)
  }

  const getTasksInDay = (date: Date) => {
    const key = dayjs(date).format(KEY_FORMAT)
    return tasksPerDay[key]
  }

  console.log('tasksPerDay', tasksPerDay)

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {days.map((week, idx) => (
        <div key={idx} style={{ margin: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', height: 84, justifyContent: 'space-between'}}>
            {week.map((day, idxx) => (
              <Cell key={idxx} tasks={getTasksInDay(day)} />
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Year;
