import { twMerge } from 'tailwind-merge'
import type { TwProps } from './TwProps'

export const MyContainer = (props: TwProps) => {
  const twClass = 'mx-auto px-4 max-w-7xl'
  return (
    <div className={twMerge(twClass, props.className)}>{props.children}</div>
  )
}
