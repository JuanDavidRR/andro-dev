import React, { useState } from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

  const [active, setactive] = useState(false)
  const handleNavbar = () =>{
    setactive(!active)
}
  return (
    <header>
        <section className='header-container'>
            <h1 className='bolder'>LOGO</h1>
            <nav className='header-navbar'>
                <ul>
                    <li className='list-item'><a href="#inicio">Inicio</a></li>
                    <li className='list-item'><a href="#servicios">Servicios</a></li>
                    <li className='list-item'><a href="/">Nosotros</a></li>
                    <li className='list-item'><a href="#portafolio">Portfolio</a></li>
                    <li className='list-item'><a href="/">| Blog</a></li>
                </ul>
                <a className='header-cta btn' href="/">Inicia Ya</a>
            </nav>
            <button onClick={handleNavbar} className='header-navbar-mobileBtn'>
                {active 
                ? <AiOutlineClose size={35}/>
                : <HiOutlineMenuAlt1 size={35}/>}
            </button>

        </section>

        <section className={active? 'navbar-mobile-menu active' : 'navbar-mobile-menu inactive'}>
        <h1 className='bolder'>LOGO</h1>
            <nav>
                <ul className='mt-5'>
                    <li className='list-item'><a href="#inicio">Inicio</a></li>
                    <li className='list-item'><a href="/#servicios">Servicios</a></li>
                    <li className='list-item'><a href="/">Nosotros</a></li>
                    <li className='list-item'><a href="#portafolio">Portfolio</a></li>
                    <li className='list-item'><a href="/">| Blog</a></li>
                    <li className='list-item'><a className='header-cta btn' href="/">Inicia Ya</a></li>
                </ul>
            </nav>
        </section>
    </header>
  )
}

export default Navbar