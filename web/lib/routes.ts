const paths = {
  root: '/',
  today: '/today',
  settings: '/settings',
  logs: '/logs',
  upcoming: '/upcoming',
  board: '/board'
}

export const getRoutes = (key: keyof typeof paths) => {
  return paths[key]
}