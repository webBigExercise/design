export default function Sidebar() {
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
        <svg
          className="w-5 h-5 mx-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="text-sm text-gray-400">People, groups & messages</span>
        <svg
          className="w-5 h-5 ml-auto border-l"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
          />
        </svg>
      </div>
      <div className="grid grid-cols-4 items-center pl-1">
        <div className="cursor-pointer px-4 pt-5 pb-2">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <div className="text-xs text-gray-400">Chats</div>
        </div>
        <div className="cursor-pointer px-4 pt-3 pb-2">
          <svg
            className="w-6 h-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <div className="text-xs text-gray-400">Calls</div>
        </div>
        <div className="cursor-pointer px-4 pt-3 pb-2">
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <div className="text-xs text-gray-400">Contacts</div>
        </div>
        <div className="cursor-pointer px-4 pt-3 pb-2">
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <div className="text-xs text-gray-400">Notifications</div>
        </div>
      </div>
    </div>
  )
}
