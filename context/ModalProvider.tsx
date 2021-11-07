import React, { createContext, useState } from 'react'

interface ModalContext {
  modal: boolean
  handleModalOpener?: () => void
}

const defaultState = {
  modal: false,
}

export const modalContext = createContext<ModalContext>(defaultState)

const ModalProvider = (props) => {
  const [modal, setModal] = useState<boolean>(false)
  const handleModalOpener = () => {
    setModal(!modal)
  }

  return (
    <modalContext.Provider value={{ modal, handleModalOpener }}>
      {props.children}
    </modalContext.Provider>
  )
}

export default ModalProvider
