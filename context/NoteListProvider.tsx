import React, { createContext, useEffect, useState } from 'react'
import { getListFromLocal } from '../helperFunctions/getListFromLocal'

interface NoteListContext {
  noteLists: {}[]
  handleCreateNewNote?: () => void
  handleUpdateNote?: ( values?: object) => void
  handleUpdateId?: (id: number) => void
  handelDeleteNote?: (id: number) => void
}

const defaultState = {
  noteLists: [],
}

export const noteListContext = createContext<NoteListContext>(defaultState)

const NoteListProvider = (props) => {
  const [noteLists, setNoteLists] = useState()
  const [updateId, setUpdateId] = useState()

  useEffect(() => {
    setNoteLists(getListFromLocal())
  }, [])

  const handleCreateNewNote = () => {
    setNoteLists(getListFromLocal())
  }
  
  const handleUpdateId = (id) => {
    setUpdateId(id)
  }
  
  const handleUpdateNote = (values) => { 
    let noteLists = JSON.parse(localStorage.getItem('list')) || []
    noteLists.forEach((note) => {
      if (note.id === updateId) {
        for (let key in note){
          if(values[key] != null) {
            note[key] = values[key]
         }
        }
      }
    })
    localStorage.setItem('list', JSON.stringify(noteLists))
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
        handleUpdateId,
        handelDeleteNote,
      }}
    >
      {props.children}
    </noteListContext.Provider>
  )
}

export default NoteListProvider
