import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

export function ImageWithLoader({
  className,
  alt,
  ...args
}: ComponentPropsWithoutRef<'img'>) {
  return (
    <img
      {...args}
      alt={alt}
      loading="lazy"
      className={cn('bg-shimmer', className)}
      onLoad={(e) => {
        e.currentTarget.classList.remove('bg-shimmer')
      }}
    />
  )
}
