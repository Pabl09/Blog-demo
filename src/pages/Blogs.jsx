import React from 'react'
import BlogPage from '../conponents/BlogPage';


const Blogs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6 md:px-12"> 
      {/*<div className='py-20 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Blog Page</h2>
      </div>*/}

      <div className='max-w-7xl mx-auto'>
        <BlogPage/>
      </div> 
    </div>
  )
}

export default Blogs