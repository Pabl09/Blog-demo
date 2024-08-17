import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

  return (
    <div className="flex justify-center mt-8">
    {pages.map((page) => (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`px-4 py-2 mx-1 rounded-lg text-lg transition-colors ${
          page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-200 hover:text-blue-700'
        }`}
      >
        {page}
      </button>
    ))}
  </div>
  )
}

export default Pagination