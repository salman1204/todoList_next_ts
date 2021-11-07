import React, { createContext, useState } from 'react'

interface DeleteContext {
  deleteUuid: number
  handleDeleteUuid?: (uuid: number) => void
}

const defaultState = {
  deleteUuid: null,
}

export const deleteContext = createContext<DeleteContext>(defaultState)

const DeleteUuidProvider = (props) => {
  const [deleteUuid, setDeleteUuid] = useState<number>(null)
  const handleDeleteUuid = (uuid) => {
    setDeleteUuid(uuid)
  }

  return (
    <deleteContext.Provider value={{ deleteUuid, handleDeleteUuid }}>
      {props.children}
    </deleteContext.Provider>
  )
}

export default DeleteUuidProvider
