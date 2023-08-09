import { twMerge } from 'tailwind-merge'
import type { TwProps } from './TwProps'

export const MyStack = (props: TwProps) => {
  const twClass = 'space-y-4'
  return (
    <div className={twMerge(twClass, props.className)}>{props.children}</div>
  )
}
