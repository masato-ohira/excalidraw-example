import { twMerge } from 'tailwind-merge'
import type { TwProps } from './TwProps'

export const MyCenter = (props: TwProps) => {
  const twClass = 'flex items-center justify-center'
  return (
    <div className={twMerge(twClass, props.className)}>{props.children}</div>
  )
}
