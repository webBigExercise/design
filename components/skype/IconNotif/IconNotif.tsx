export type IconNotifProps = {
  num: number
}

export default function IconNotif({ num }: IconNotifProps) {
  return (
    <>
      {/* cố định left và margin theo left */}
      <div className="absolute ml-4 left-0 top-0 w-4 h-4 rounded-full bg-red-400">
        <div className="flex flex-col items-center text-xs font-bold text-white">
          {num}
        </div>
      </div>
    </>
  )
}
