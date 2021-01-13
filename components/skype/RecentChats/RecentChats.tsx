import { ChevronDownIcon, VideoCameraIcon } from '../Icon'
import PencilAltIcon from '../Icon/PencilAlt'
import Tab from './Tab'

export default function RecentChats() {
  return (
    <>
      <div className="flex py-4">
        <button className="h-8 flex flex-grow-1 flex-shrink-1 w-full mx-2 bg-white border border-gray-250 rounded-xl justify-center  items-center">
          <VideoCameraIcon className="w-6 h-6 mr-1" bold={false} />
          <span className="mr-3 text-sm">Meet Now</span>
          <ChevronDownIcon className="w-4 h-4" bold={false} />
        </button>
        <button className="h-8 flex flex-grow-1 flex-shrink-1 w-full mx-2 bg-white border border-gray-250 rounded-xl justify-center  items-center">
          <PencilAltIcon className="w-6 h-6 mr-1" bold={false} />
          <span className="mr-3 text-sm">New Chat</span>
          <ChevronDownIcon className="w-4 h-4" bold={false} />
        </button>
      </div>
      <div className="flex items-center">
        <span className="font-medium text-sm text-gray-600 mr-1">
          RECENT CHATS
        </span>
        <button>
          <ChevronDownIcon className="w-4 h-4" bold={false} />
        </button>
      </div>
      <div className="py-4">
        <Tab
          avtUrl=""
          title="Đội 4 - Liên Minh Thủ Đô"
          lastMessage={{ content: 'Dạ vâng', createAt: Date.now() }}
          numberUnseenMsg={999}
        />
        <Tab
          avtUrl=""
          title="LIVESTREAM-TRANSCODE"
          lastMessage={{ content: 'Ae làm việc nhé', createAt: Date.now() }}
          numberUnseenMsg={0}
        />
        <Tab
          avtUrl=""
          title="TTSX"
          lastMessage={{ content: 'Em cảm ơn', createAt: Date.now() }}
          numberUnseenMsg={1}
        />
      </div>
    </>
  )
}
