import React from 'react'

const Search = () => {
  return (
    <div className="w-full max-w-xs">
      <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 shadow-sm bg-white">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 bg-transparent outline-none px-2 py-1 text-sm font-mono"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.65 10.65a6 6 0 11-12 0 6 6 0 0112 0z" />
        </svg>
      </div>
    </div>
  )
}

export default Search
