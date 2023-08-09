import { twMerge } from 'tailwind-merge'
import type { TwProps } from './TwProps'

export const MyGrid = (props: TwProps) => {
  const twClass = 'grid grid-cols-3 gap-4'
  return (
    <div className={twMerge(twClass, props.className)}>{props.children}</div>
  )
}
