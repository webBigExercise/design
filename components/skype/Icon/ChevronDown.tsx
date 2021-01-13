import IconBase from './BaseIcon'
import { IconMultiProps } from './props'

export default function ChevronDownIcon(props: IconMultiProps) {
  return <IconBase IconBold={Normal} IconNormal={Normal} {...props} />
}

function Normal(props: IconMultiProps) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  )
}
