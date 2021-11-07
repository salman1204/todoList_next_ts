export const getListFromLocal = (deleteUuid) => {

    const ISSERVER = typeof window === 'undefined'

    if (!ISSERVER) {
        let notes = JSON.parse(localStorage.getItem('list'))
        let updatedList = notes.filter((note) => note.id !== deleteUuid)
        localStorage.setItem('list', JSON.stringify(updatedList))
        var todoList = JSON.parse(localStorage.getItem('list'))
      }
      return todoList;
}