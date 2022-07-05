import { MdDarkMode } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="fixed w-full bg-white z-50">
      <div className="container mx-auto py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-red-600">Cetinsangu</span>
        </div>
        <ul className="hidden md:flex space-x-10 font-medium">
          <li className="hover:text-gray-600">Home</li>
          <li className="hover:text-gray-600">About Me</li>
          <li className="hover:text-gray-600">Services</li>
          <li className="hover:text-gray-600">Works</li>
          <li className="hover:text-gray-600">Contact</li>
        </ul>
        <MdDarkMode className="hidden md:block w-5 h-10" />
        <GiHamburgerMenu
          size={25}
          onClick={() => {
            setIsNavOpen((prev) => !prev);
          }}
          className={`${isNavOpen && 'hidden'} md:hidden`}
        />
        <RiCloseLine
          size={30}
          onClick={() => {
            setIsNavOpen((prev) => !prev);
          }}
          className={`${
            !isNavOpen && 'hidden'
          } md:hidden z-10 absolute top-5 right-0 text-white`}
        />
        <ul
          className={`${
            !isNavOpen && 'hidden'
          } bg-indigo-600 absolute flex flex-col items-center justify-center left-0 top-0 w-full h-screen p-10 space-y-5 text-center text-white transition-all`}
        >
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
