# Simple modal system for react app

## Installation

```
npm install @339rama/react-modal-system
```

## Usage

```ts
import * as React from 'react'
import { ModalProvider, ModalRoot, useModal } from '@339rama/react-modal-system'

const AppModalOverlay = (props: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0, 0.3)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

const ConfirmAlert = (props: { onClose: () => void; onConfirm: () => void }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '350px',
        padding: '8px 16px',
        borderRadius: '8px',
        backgroundColor: 'red',
        color: 'white',
      }}
    >
      <h1>Confirm delete</h1>
      <div>
        <button onClick={props.onClose}>Cancel</button>
        <button onClick={props.onConfirm}>Confirm</button>
      </div>
    </div>
  )
}

const DeleteModal = (props: { onClose: () => void }) => {
  const { push } = useModal()
  const onDelete = React.useCallback(() => {
    push(({ onClose }) => (
      <ConfirmAlert
        onConfirm={() => {
          onClose()
          props.onClose()
        }}
        onClose={onClose}
      />
    ))
  }, [])
  return (
    <div
      style={{
        position: 'absolute',
        width: '350px',
        padding: '8px 16px',
        borderRadius: '8px',
        backgroundColor: 'purple',
        color: 'white',
      }}
    >
      <h1>Delete some item</h1>
      <div>
        <button onClick={props.onClose}>Close</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

const AppPage = () => {
  const { push } = useModal()
  const addModal = React.useCallback(() => {
    push(DeleteModal)
  }, [push])
  return (
    <div>
      <div>
        <button onClick={addModal}>Add</button>
      </div>
      <ModalRoot>
        {(modals) => {
          if (!modals.length) {
            return null
          }
          return (
            <AppModalOverlay>
              {modals.map(([modalId, { place, content: Content, close }]) => {
                if (typeof Content === 'function') {
                  return <Content onClose={close} key={modalId} />
                }
                return Content
              })}
            </AppModalOverlay>
          )
        }}
      </ModalRoot>
    </div>
  )
}

export default function App() {
  return (
    <ModalProvider>
      <AppPage />
    </ModalProvider>
  )
}
```
