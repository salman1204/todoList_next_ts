import React, { createContext, useState } from 'react'

interface ModalContext {
  modal: boolean
  updateModal: boolean
  handleModalOpener?: () => void
  handleUpdateModalOpener?: () => void
}

const defaultState = {
  modal: false,
  updateModal: false
}

export const modalContext = createContext<ModalContext>(defaultState)

const ModalProvider = (props) => {
  const [modal, setModal] = useState<boolean>(false)
  const [updateModal, setUpdateModal] = useState<boolean>(false)

  const handleModalOpener = () => {
    setModal(!modal)
  }

  const handleUpdateModalOpener = () => {
    setUpdateModal(!updateModal)
  }

  return (
    <modalContext.Provider value={{ modal, handleModalOpener, updateModal, handleUpdateModalOpener }}>
      {props.children}
    </modalContext.Provider>
  )
}

export default ModalProvider
