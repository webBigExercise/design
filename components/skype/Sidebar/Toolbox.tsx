import { Dispatch, SetStateAction } from 'react'
import { Avatar } from '../Avatar'
import {
  BellIcon,
  ChatAltIcon,
  PhoneIcon,
  SearchIcon,
  SelectorIcon,
  UserGroupIcon,
} from '../Icon'
import Tab from './Tab'

export type SidebarToolboxProps = {
  selectedTab: string
  setSelectedTab: Dispatch<SetStateAction<string>>
}
export default function SidebarToolbox(props: SidebarToolboxProps) {
  return (
    <div className="py-1 border-b">
      <div className="flex mb mb-2">
        <Avatar text="bmq928" status="online" />
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
      <div className="grid grid-cols-4 items-center pl-0.25">
        <Tab
          isActive={props.selectedTab === 'Chats'}
          onClick={() => props.setSelectedTab('Chats')}
          title="Chats"
          icon={ChatAltIcon}
        />
        <Tab
          isActive={props.selectedTab === 'Calls'}
          onClick={() => props.setSelectedTab('Calls')}
          title="Calls"
          icon={PhoneIcon}
        />
        <Tab
          isActive={props.selectedTab === 'Contacts'}
          onClick={() => props.setSelectedTab('Contacts')}
          title="Contacts"
          icon={UserGroupIcon}
        />
        <Tab
          isActive={props.selectedTab === 'Notifications'}
          onClick={() => props.setSelectedTab('Notifications')}
          title="Notifications"
          icon={BellIcon}
          notifNumber={1}
        />
      </div>
    </div>
  )
}
