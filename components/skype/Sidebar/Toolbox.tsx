import {
  BellIcon,
  ChatAltIcon,
  PhoneIcon,
  SearchIcon,
  SelectorIcon,
  UserGroupIcon,
} from '../Icon'
import Tab from './Tab'

export default function SidebarToolbox() {
  return (
    <div className="pt-1 px-2 bg-blue-50 border-b">
      <div className="flex mb mb-2">
        <div className="m-1 mr-3 w-10 h-10 relative flex justify-center items-center rounded-full bg-gray-200">
          <div className="text-sm uppercase text-blue-500 font-bold">bm</div>
          <div className="absolute right-0 bottom-0 w-2.5 h-2.5 rounded-full bg-green-400"></div>
        </div>
        <div className="flex items-center">
          <div className="text-sm text-thin mr-2">Bùi Minh Quang</div>
          <div className="text-xs text-gray-500">$0.00</div>
        </div>
        <button className="ml-auto text-bold text-xl focus:outline-none">
          <div className="flex">
            <div className="w-1 h-1 rounded-full bg-gray-600 mr-1"></div>
            <div className="w-1 h-1 rounded-full bg-gray-600 mr-1"></div>
            <div className="w-1 h-1 rounded-full bg-gray-600 mr-1"></div>
          </div>
        </button>
      </div>
      <div className="flex py-1.5 bg-white border rounded cursor-pointer">
        <SearchIcon className="w-5 h-5 mx-2" />
        <span className="text-sm text-gray-400">People, groups & messages</span>
        <SelectorIcon className="w-5 h-5 ml-auto border-l" />
      </div>
      <div className="grid grid-cols-4 items-center pl-1">
        <Tab title="Chats" icon={ChatAltIcon} />
        <Tab title="Calls" icon={PhoneIcon} />
        <Tab title="Contacts" icon={UserGroupIcon} />
        <Tab title="Notifications" icon={BellIcon} notifNumber={1} />
      </div>
    </div>
  )
}
