import { useState } from 'react'
import { IconMultiProps } from '../Icon'

export type TabProps = {
  icon: (props: IconMultiProps) => JSX.Element
  title: string
  notifNumber?: number
}
export default function Tab(props: TabProps) {
  const [isBold, setIsBold] = useState(false)
  return (
    <div
      className="cursor-pointer px-4 pt-5 pb-2 flex flex-col items-center"
      onMouseOver={() => setIsBold(true)}
      onMouseOut={() => setIsBold(false)}
    >
      <props.icon bold={isBold} className="w-6 h-6" notifNumber={props.notifNumber} />
      <div className="text-xs text-gray-400">{props.title}</div>
    </div>
  )
}
