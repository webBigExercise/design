import { MouseEvent, useState } from 'react'
import { IconMultiProps } from '../Icon'

export type TabProps = {
  icon: (props: IconMultiProps) => JSX.Element
  title: string
  isActive?: boolean
  notifNumber?: number
  onClick?: (e: MouseEvent) => void
}
export default function Tab(props: TabProps) {
  const [isBold, setIsBold] = useState(false)
  const NormalIcon = (
    <props.icon
      bold={isBold}
      className="w-6 h-6"
      notifNumber={props.notifNumber}
    />
  )
  const ActiveIcon = (
    <props.icon
      bold={true}
      className="w-6 h-6 text-blue-600"
      notifNumber={props.notifNumber}
    />
  )
  const Icon = props.isActive ? ActiveIcon : NormalIcon
  const textClassName = props.isActive
    ? 'text-xs text-blue-400'
    : 'text-xs text-gray-400'
  return (
    <div
      className="cursor-pointer px-4 pt-5 pb-2 flex flex-col items-center"
      onMouseOver={() => setIsBold(true)}
      onMouseOut={() => setIsBold(false)}
      onClick={(e) => props.onClick && props.onClick(e)}
    >
      {Icon}
      <div className={textClassName}>{props.title}</div>
    </div>
  )
}
