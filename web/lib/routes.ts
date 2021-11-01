const paths = {
  root: '/',
  today: '/today',
  settings: 'settings',
  logs: 'logs'
}

export const getRoutes = (key: keyof typeof paths) => {
  return paths[key]
}