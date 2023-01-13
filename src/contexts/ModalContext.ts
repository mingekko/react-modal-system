import { createContext } from 'react'
import { ModalContextValue } from '../types/ModalContextValue'

const ModalContext = createContext<ModalContextValue>({
  push: (modal: any) => {
    throw new Error(`Something went wrong with modalContext initialization. push(${modal})`)
  },
  remove: (id: string) => {
    throw new Error(`Something went wrong with modalContext initialization. delete(${id})`)
  },
  clear: () => {
    throw new Error(`Something went wrong with modalContext initialization. clear()`)
  },
  modals: {},
})

export default ModalContext
