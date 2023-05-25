import React, { useCallback, useMemo, useState } from 'react'
import uuid from 'react-uuid'
import ModalContext from '../contexts/ModalContext'
import { ModalRecord } from '../types'
import { ModalContextValue } from '../types/ModalContextValue'
import { ModalProviderProps } from '../types/ModalProviderProps'

const ModalProvider = (props: ModalProviderProps) => {
  const [modals, setModals] = useState<Record<string, ModalRecord>>({})
  const remove = useCallback((id: string) => {
    setModals((m) => Object.fromEntries(Object.entries(m).filter(([modalId]) => modalId !== id)))
  }, [])
  const push = useCallback((modal: unknown, props: any) => {
    const id = uuid()
    setModals((m) => {
      return {
        ...m,
        [id]: { place: Object.keys(m).length + 1, content: modal, close: remove.bind(null, id), props: props },
      }
    })
    return id
  }, [])
  const clear = useCallback(() => setModals({}), [])
  const providerValue: ModalContextValue = useMemo(() => {
    return {
      push,
      remove,
      clear,
      modals,
    }
  }, [modals, push, remove, clear])
  return <ModalContext.Provider value={providerValue}>{props.children}</ModalContext.Provider>
}

export default ModalProvider
