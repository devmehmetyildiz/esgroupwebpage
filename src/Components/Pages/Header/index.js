import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from "../../../assets/images"
import "../../../assets/css/Header.css"

export default function Header() {
    const [togglemenu, setTogglemenu] = useState(false);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img style={{height:'50px',objectFit:'contain', margin:'-15px'}}  src={images.Logo} alt="app logo" />
            </div>
            <ul className='app__navbar-links'>
                <li className='p__opensans'><a className='hover-underline-animation' href='#home'>Home</a></li>
                <li className='p__opensans'><a className='hover-underline-animation' href='#home'>About</a></li>
                <li className='p__opensans'><a className='hover-underline-animation' href='#home'>Menu</a></li>
                <li className='p__opensans'><a className='hover-underline-animation' href='#home'>Awards</a></li>
                <li className='p__opensans'><a className='hover-underline-animation' href='#home'>Contact</a></li>
            </ul>
            <div className='app__navbar-login'>
                <a href='#login' className='p__opensans'>Teklif Al</a>
            </div>
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color='fff' fontSize={27} onClick={() => { setTogglemenu(true) }} />
                {togglemenu && (
                    <div className='app__navbar-smallscreen_overlayer flex__center slide-bottom'>
                        <MdOutlineRestaurantMenu fontSize={28} className="overlayer__close" onClick={() => { setTogglemenu(false) }} />
                        <ul className='app__navbar-smallscreen_links'>
                            <li className='p__opensans'><a href='#home'>Home</a></li>
                            <li className='p__opensans'><a href='#home'>About</a></li>
                            <li className='p__opensans'><a href='#home'>Menu</a></li>
                            <li className='p__opensans'><a href='#home'>Awards</a></li>
                            <li className='p__opensans'><a href='#home'>Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}
