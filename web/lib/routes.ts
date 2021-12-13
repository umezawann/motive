const paths = {
  root: '/',
  today: '/today',
  settings: '/settings',
  logs: '/logs',
  upcoming: '/upcoming',
  labels: '/labels'
}

export const getRoutes = (key: keyof typeof paths) => {
  return paths[key]
}