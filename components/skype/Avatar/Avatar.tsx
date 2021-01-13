import classnames from 'classnames'

export type AvatarProps = {
  url?: string
  base64?: string
  text?: string
  status: 'online' | 'busy' | 'offline'
}
export default function Avatar({ url, base64, text, status }: AvatarProps) {
  const isImgAvatar = !!url || !!base64
  const isTextAvatar = !isImgAvatar

  return (
    <div className="m-1 mr-3 w-10 h-10 relative flex justify-center items-center rounded-full bg-gray-200">
      {isTextAvatar && (
        <div className="text-sm uppercase text-blue-500 font-bold">
          {text.slice(0, 2)}
        </div>
      )}
      {isImgAvatar && <img src={url || base64} />}
      <div
        className={classnames({
          'absolute right-0 bottom-0 w-2.5 h-2.5 rounded-full': true,
          'bg-green-400': status === 'online',
          'bg-red-400': status === 'busy',
        })}
      />
    </div>
  )
}
