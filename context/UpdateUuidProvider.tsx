import React, { createContext, useState } from 'react'

interface updateContext {
  updateUuid: number
  handleUpdateUuid?: (uuid: number) => void
}

const defaultState = {
    updateUuid: null,
}

export const updateContext = createContext<updateContext>(defaultState)

const UpdateUuidProvider = (props) => {
  const [updateUuid, setUpdateUuid] = useState<number>(null)
  const handleUpdateUuid = (uuid) => {
    setUpdateUuid(uuid)
  }

  return (
    <updateContext.Provider value={{ updateUuid, handleUpdateUuid }}>
      {props.children}
    </updateContext.Provider>
  )
}

export default UpdateUuidProvider
