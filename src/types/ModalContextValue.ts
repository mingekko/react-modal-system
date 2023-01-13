import { ModalRecord } from './ModalRecord'

export type ModalContextValue<Content = unknown> = {
  push: (modal: Content) => string
  remove: (id: string) => void
  clear: () => void
  modals: Record<string, ModalRecord<Content>>
}
