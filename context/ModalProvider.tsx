import React, { createContext, useState } from 'react'

interface ModalContext {
  modal: boolean
  handleModal ?: () => void
}

const defaultState = {
  modal: false,
}

export const modalContext = createContext<ModalContext>(defaultState)

const ModalProvider = (props) => {
  const [modal, setModal] = useState<boolean>(false)
  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <modalContext.Provider value={{ modal, handleModal }}>
      {props.children}
    </modalContext.Provider>
  )
}

export default ModalProvider
