import menu from '../images/icon-menu.svg';
import menuClose from '../images/icon-menu-close.svg';
import logo from '../images/logo.svg';
import { useState } from 'react';


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  document.body.classList.toggle('bg-black')
  const ListState= isOpen ? 'show':'' ;
   const menuState= isOpen ? 'hide':'' ;
  return (
    <div className='nav'>
      <img className='nav__logo' src={logo}/>
      <img onClick={handleClick} className={`${menuState} nav__menu`}  src={menu} />
      <img onClick={handleClick} className={`${ListState} nav__menuClose`} src={menuClose} />
      <ul  className= {`${ListState} nav__list`}>
        <li className='nav__list-link'>Home</li>
        <li className='nav__list-link'>new</li>
        <li className='nav__list-link'>popular</li>
        <li className='nav__list-link'>trending</li>
        <li className='nav__list-link'>categories</li>
      </ul>
    </div>
  )
}


export default Nav;