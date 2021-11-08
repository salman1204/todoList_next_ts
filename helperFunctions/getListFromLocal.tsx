export const getListFromLocal = (uuid?, operation?) => {
  const ISSERVER = typeof window === 'undefined'

  if (!ISSERVER) {
    let notes = JSON.parse(localStorage.getItem('list'))
    localStorage.setItem('list', JSON.stringify(notes))
    var todoList = JSON.parse(localStorage.getItem('list'))
  }
  return todoList
}
