const paths = {
  root: '/',
  today: '/today',
  settings: 'settings',
}

export const getRoutes = (key: keyof typeof paths) => {
  return paths[key]
}