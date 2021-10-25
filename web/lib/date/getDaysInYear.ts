import dayjs from 'dayjs'

export const getDaysInYear = () => {
  const start = dayjs().startOf('year').toDate()
  const daysPerWeek: Date[][] = []
  for (let i = 0; i < 52; i++) {
    daysPerWeek.push([])
    let idx = daysPerWeek.length - 1
    for (let j = 0; j < 7; j++) {
      const currentDay = dayjs(start).add(i * 7 + j, 'day').toDate()
      daysPerWeek[idx].push(currentDay)
    }
  }

  return daysPerWeek
}

export const isSameDay = (dateOne: Date, dateTwo: Date) => {
  return dayjs(dateOne).isSame(dayjs(dateTwo), 'day')
}