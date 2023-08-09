import { twMerge } from 'tailwind-merge'
import type { TwProps } from './TwProps'

export const MyBox = (props: TwProps) => {
  const twClass = 'bg-white shadow-md rounded-md p-4'
  return (
    <div className={twMerge(twClass, props.className)}>{props.children}</div>
  )
}
