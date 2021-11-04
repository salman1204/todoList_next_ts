import React, { createContext, useState } from 'react'

export const modalContext = createContext<boolean>(false)

const ContextProvider = (props) => {
  const [modal, setModal] = useState<boolean>(false)
  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <modalContext.Provider value={{modal, handleModal}}>
      {props.children}
    </modalContext.Provider>
  )
}

export default ContextProvider
