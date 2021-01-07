import { Sidebar } from '@components/skype/Sidebar'
import { Chartboard } from '@components/skype/ChatBoard'

export default function SkypeHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Sidebar />
      <Chartboard />
    </div>
  )
}
