import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// react icons
import { FaFacebook, FaXTwitter, FaInstagram, FaBars, FaXmark } from "react-icons/fa6";
import Modal from '../conponents/Modal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  //NavItems
  const NavItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ]

  // Modal details
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0 z-50'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a href='/' className='text-xl font-bold text-white'>Desing<span className='text-orange-600'>HW</span></a>

        <ul className='md:flex gap-12 text-lg hidden'>
          {
            NavItems.map(({ path, link }) => <li className='text-white' key={path}>
              <NavLink className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              } to={path}>{link}</NavLink>
            </li>)
          }
        </ul>

        {/*menu icons*/}
        <div className='text-white lg:flex gap-4 items-center hidden'>
          <a href="/" className='hover:text-orange-600'><FaFacebook /></a>
          <a href="/" className='hover:text-orange-600'><FaXTwitter /></a>
          <a href="/" className='hover:text-orange-600'><FaInstagram /></a>
          <button onClick={openModal} className='bg-orange-600 px-6 py-2 font-medium rounded hover:bg-white
                hover:text-orange-600 transition-all duration-200 ease-in'>Login</button>
        </div>

        {/*Our modal component is here*/}
        <Modal isOpen={isModalOpen} onClose={closeModal} />

        {/*mobile menu btn, display mobile screen*/}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='cursor-pointer'>
            {
              isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
            }
          </button>
        </div>
      </nav>

      {/* menu items only for mobile*/}
      <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
          {
            NavItems.map(({ path, link }) => <li className='text-black' key={path}>
              <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
            </li>)
          }
        </ul>
      </div>
    </header>
  )
}

export default Navbar