import { useModal } from '../hooks'
import { ModalRootProps } from '../types/ModalRootProps'

export const ModalRoot = (props: ModalRootProps) => {
  const { modals } = useModal()
  return props.children(Object.entries(modals))
}
