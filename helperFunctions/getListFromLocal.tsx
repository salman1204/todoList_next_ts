export const getListFromLocal = (uuid?, operation?) => {

    const ISSERVER = typeof window === 'undefined'

    if (!ISSERVER) {
        let updatedList = []
        let notes = JSON.parse(localStorage.getItem('list'))
        {
          operation == "delete" ? updatedList = notes.filter((note) => note.id !== uuid) :  updatedList = notes
        
        }
        localStorage.setItem('list', JSON.stringify(updatedList))
        var todoList = JSON.parse(localStorage.getItem('list'))
      }
      return todoList;
}