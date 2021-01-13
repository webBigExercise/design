import { useState } from 'react'
import { CallList } from '../CallList'
import { ContactList } from '../ContactList'
import { NotificationList } from '../NotificationList'
import { RecentChats } from '../RecentChats'
import Toolbox from './Toolbox'

export default function Sidebar() {
  const [selectedTab, setSelectedTab] = useState('Chats')
  return (
    <div className="h-screen px-2 bg-blue-50 z-10">
      <Toolbox selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === 'Chats' && <RecentChats />}
      {selectedTab === 'Calls' && <CallList />}
      {selectedTab === 'Contacts' && <ContactList />}
      {selectedTab === 'Notifications' && <NotificationList />}
    </div>
  )
}
