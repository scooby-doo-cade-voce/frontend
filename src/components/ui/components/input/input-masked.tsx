import { mergeRefs } from '@/utils/mergeRefs'
import type { FactoryOpts } from 'imask/esm/index'
import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'
import { useIMask } from 'react-imask'
import { Input } from './input'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: FactoryOpts
  onAccept?: (value: string) => void
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { onAccept, mask, ...args },
  ref,
) => {
  const { ref: maskedRef } = useIMask(
    {
      ...mask,
    },
    {
      onAccept(value) {
        onAccept?.(value)
      },
      onComplete(value) {
        onAccept?.(value)
      },
    },
  )

  return <Input {...args} ref={mergeRefs([maskedRef, ref])} />
}

export const MaskedInput = forwardRef(InputBase)
MaskedInput.displayName = 'MaskedInput'
