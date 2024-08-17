import React from 'react'

const Categories = ({ categories, onSelectCategory }) => {
  return (
    <div className="mb-6">
      {/* <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Categories</h2> */}
      <ul className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <li key={category} 
          className="cursor-pointer bg-blue-100 text-blue-700 py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-200" 
          onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories