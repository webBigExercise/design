import { IconNotif } from '../IconNotif'
import { IconMultiProps } from './props'

export type IconComponent = (props: IconMultiProps) => JSX.Element
export type IconBaseProps = IconMultiProps & {
  IconNormal: IconComponent
  IconBold: IconComponent
}

export default function IconBase({
  IconBold,
  IconNormal,
  ...iconProps
}: IconBaseProps) {
  const IconBoldFader = (props: IconMultiProps) => (
    <IconBold {...props} className={props.className + ' text-gray-600'} />
  )
  const Icon: IconComponent = iconProps.bold ? IconBoldFader : IconNormal
  return (
    <div className="relative">
      <Icon {...iconProps} />
      {iconProps.notifNumber ? <IconNotif num={iconProps.notifNumber} /> : null}
    </div>
  )
}
