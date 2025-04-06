import React from 'react'

const Menu = () => {
    const menuItems = [
        {name: "Services", path: "/services"},
        {name: "Portfolio", path: "/portfolio"},
        {name: "Faqs", path: "/faqs"},
        {name: "Blog", path: "/blog"},
    ]
  return (
    <>
    <div className='flex items-center justify-between px-20 py-6 sticky'>
        {/* Logo */}
        <div className=''>
            <h1 className='text-6xl font-bold'>Wired <span className='text-blue-800'>Yatra</span></h1>
            </div>
        {/* Menu Items */}
        <div className=' flex'>
            <ul className='flex space-x-4 gap-8'>
                {menuItems.map((item, index) => (
                    <li key={index} className='text-lg font-medium hover:text-cyan-500'>
                        <a href={item.path}>{item.name}</a>
                    </li>
                ))}
            </ul>
            </div>
    </div>
    </>
  )
}

export default Menu