import React, { useState } from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

  const [active, setactive] = useState(false)
  const handleNavbar = () =>{
    setactive(!active)
}

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "20px 10px";
        document.getElementById("navbar").style.background = '#139cb5';
        document.getElementById("btn-nav").style.background = '#313131';

    } else {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar").style.transition = "0.4s";
        document.getElementById("btn-nav").style.background = '#139cb5';

    }
}
  return (
    <header id='navbar'>
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
            </nav>
            <a id='btn-nav' className='header-cta btn' href="/">Inicia Ya</a>
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