import { useContext } from 'react'
import ModalContext from '../contexts/ModalContext'
import { ModalContextValue } from '../types'

const useModal = <Content = unknown>() => useContext(ModalContext) as ModalContextValue<Content>

export default useModal
