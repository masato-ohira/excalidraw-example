import { twMerge } from 'tailwind-merge'
import type { TwProps } from './TwProps'

export const MyHStack = (props: TwProps) => {
  const twClass = 'flex space-x-4 items-center'
  return (
    <div className={twMerge(twClass, props.className)}>{props.children}</div>
  )
}
