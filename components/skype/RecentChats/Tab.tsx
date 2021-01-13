import { Avatar } from '../Avatar'
import classnames from 'classnames'
import dayjs from 'dayjs'

export type TabProps = {
  avtUrl: string
  title: string
  lastMessage: {
    content: string
    createAt: number
  }
  numberUnseenMsg: number
}
export default function Tab(props: TabProps) {
  return (
    <div className="w-full flex cursor-pointer py-2">
      <Avatar url={props.avtUrl} status="offline" text={props.title} />
      <span className="flex w-full">
        <span className="w-full flex-grow-1 flex-shrink-1">
          <div className={classnames({ 'font-bold': props.numberUnseenMsg > 0 })}>
            {props.title}
          </div>
          <div className="text-gray-500">{props.lastMessage.content}</div>
        </span>
        <span className="flex flex-col flex-grow-0 flex-shrink-0 items-end">
          <span className="text-gray-500 text-xs whitespace-nowrap mb-1">
            {showDate(props.lastMessage.createAt)}
          </span>
          <div
            className={classnames({
              'text-xs rounded-lg text-center w-7 px-1': true,
              'text-white bg-blue-600': props.numberUnseenMsg > 0,
            })}
          >
            {showUnseen(props.numberUnseenMsg)}
          </div>
        </span>
      </span>
    </div>
  )
}

function showDate(timestamp: number): string {
  const time = dayjs(timestamp)
  const dayDiff = dayjs().diff(time, 'd')
  const weekDiff = dayjs().diff(time, 'w')

  if (dayDiff <= 0) return time.format('H:mm A')
  if (weekDiff <= 0) return time.format('ddd')
  return time.format('DD/MM/YYYY')
}

function showUnseen(count: number): string {
  if (count <= 0) return ''
  if (count <= 99) return count.toString()
  return '99+'
}
