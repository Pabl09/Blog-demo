import React from 'react'
import Banner from '../conponents/Banner'
import Blogpage from '../conponents/BlogPage'

const Home = () => {
  return (
    <div>
      <Banner/>

      <div className='max-w-7xl mx-auto'>
        <Blogpage/>
      </div>
    </div>
  )
}

export default Home