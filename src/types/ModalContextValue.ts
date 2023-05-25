import { ModalRecord } from './ModalRecord'

export type ModalContextValue<Content = unknown> = {
  push: (modal: Content, props: any) => string
  remove: (id: string) => void
  clear: () => void
  modals: Record<string, ModalRecord<Content>>
}
