let apiUrl = 'http://localhost:3001'
if (process.env.NODE_ENV === 'production') {
  apiUrl = ''
}
export {
  apiUrl
}
