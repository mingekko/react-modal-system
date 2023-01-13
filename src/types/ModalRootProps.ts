import { ModalRecord } from './ModalRecord'

export type ModalRootProps<Content = unknown> = {
  children: (modals: Array<[string, ModalRecord<Content>]>) => any
}
