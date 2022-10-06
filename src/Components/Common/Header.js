import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from "../../assets/images"
import "../../assets/css/Header.css"
import { withRouter } from 'react-router-dom';

export function Header({ history }) {
    const [togglemenu, setTogglemenu] = useState(false);

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    // const contentbg = colorChange ? "app__navbar_bgdark app__navbar" : "app__navbar_bgtransparent app__navbar"
    const contentbg = colorChange ? "app__navbar_bgdark app__navbar" : "app__navbar_bgdark app__navbar"
    //const libg = colorChange ? 'p__opensans-light' : 'p__opensans-dark'
    const libg = colorChange ? 'p__opensans-dark' : 'p__opensans-dark'
    return (
        <nav className={contentbg}>
            <div className='app__navbar-logo cursor-pointer'>
                <a onClick={() => { history.push('/') }}>
                    <img style={{ height: '50px', objectFit: 'contain', margin: '-15px' }} src={images.Logo} alt="app logo" />
                </a>
            </div>
            <ul className='app__navbar-links'>
                <li className={libg}><a className='hover-underline-animation' onClick={() => { history.push('/Products') }}>Ürünlerimiz</a></li>
                <li className={libg}><a className='hover-underline-animation' onClick={() => { history.push('/Corporate') }} >Kurumsal</a></li>
                <li className={libg}><a className='hover-underline-animation' onClick={() => { history.push('/Catalog') }}>Katalog</a></li>
                <li className={libg}><a className='hover-underline-animation' href='#home'>Es Grup</a></li>
                <li className={libg}><a className='hover-underline-animation' href='#home'>İletişim</a></li>
            </ul>

            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color='fff' fontSize={27} onClick={() => { setTogglemenu(true) }} />
                {togglemenu && (
                    <div className='app__navbar-smallscreen_overlayer flex__center slide-bottom'>
                        <MdOutlineRestaurantMenu fontSize={28} className="overlayer__close" onClick={() => { setTogglemenu(false) }} />
                        <ul className='app__navbar-smallscreen_links'>
                            <li className='p__opensans-dark'><a className='hover-underline-animation' href='/Products'>Ürünlerimiz</a></li>
                            <li className='p__opensans-dark'><a className='hover-underline-animation' href='#home'>Kurumsal</a></li>
                            <li className='p__opensans-dark'><a className='hover-underline-animation' href='/Corporate'>Katalog</a></li>
                            <li className='p__opensans-dark'><a className='hover-underline-animation' href='#home'>Es Grup</a></li>
                            <li className='p__opensans-dark'><a className='hover-underline-animation' href='#home'>İletişim</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav >
    )
}

export default withRouter(Header)