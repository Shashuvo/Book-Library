import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
const navigationLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];


const Navbar = () => {
  const Links = navigationLinks.map(route => <Link key={route.id} route={route}></Link>)

  const [open, setOpen] = useState(false);
  return (
    <nav className='flex justify-between mx-10 mt-4'>

      <span className='flex ' onClick={() => setOpen(!open)}>
        {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}

        <ul className={`md:hidden absolute duration-1000 ${open ? 'top-12' : '-top-40'} bg-blue-400 px-3 py-2`}>
          {Links}
        </ul>

        <h3 className='ml-4'>My Navbar</h3>
      </span>


      <ul className='md:flex hidden'>
        {
          Links
        }
      </ul>

      <button>Button</button>
    </nav>
  );
};

export default Navbar;