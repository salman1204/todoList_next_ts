import React, { createContext, useEffect, useState } from 'react'
import { getListFromLocal } from '../helperFunctions/getListFromLocal'

interface NoteListContext {
  noteLists: {}[]
  handleCreateNewNote?: () => void
  handleUpdateNote?: (id: number, values?: object) => void
  handelDeleteNote?: (id: number) => void
}

const defaultState = {
  noteLists: [],
}

export const noteListContext = createContext<NoteListContext>(defaultState)

const NoteListProvider = (props) => {
  const [noteLists, setNoteLists] = useState()

  useEffect(() => {
    setNoteLists(getListFromLocal())
  }, [])

  const handleCreateNewNote = () => {
    let notes = getListFromLocal()
    setNoteLists(notes)
  }

  const handleUpdateNote = (id, values) => {
    handelDeleteNote(id);
    let formData = []
    formData = JSON.parse(localStorage.getItem('list')) || []
    formData.push(values)
    localStorage.setItem('list', JSON.stringify(formData))

  }

  const handelDeleteNote = (id) => {
    let notes = JSON.parse(localStorage.getItem('list'))
    notes != null && (notes = notes.filter((note) => note.id !== id))
    localStorage.setItem('list', JSON.stringify(notes))
    setNoteLists(notes)
  }

  return (
    <noteListContext.Provider
      value={{
        noteLists,
        handleCreateNewNote,
        handleUpdateNote,
        handelDeleteNote,
      }}
    >
      {props.children}
    </noteListContext.Provider>
  )
}

export default NoteListProvider
