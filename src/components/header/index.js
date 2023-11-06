import React from 'react'
import './header.css'

const Header = ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg' alt='logo tmdb' />
                </a>
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png' alt='logo de perfil do user' />
                </a>
            </div>
        </header>
    )
}

export { Header }