import './components.css'
import logo from '../assets/logo.svg'
import { useState } from 'react'
// import { Link } from 'react-router-dom'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <div className='navbar'>
            <a href='/#home' className='brand'>
                <img src={logo} width={35} height={35} alt='logo'/>
                <p style={{fontSize:'1.6rem'}}>Raptor</p>
            </a>
            
            {/* Desktop Menu */}
            <div className='sections desktop-menu'>
                <a href='/#why'>Why</a>
                <a href='/#tools'>Tools</a>
                <a href='/#contact'>Contact</a>
            </div>
            
            {/* Desktop Sign-in */}
            {/* <Link to='/signup'><div className='signin desktop-signin'>Sign-up</div></Link>             */}
            
            {/* Mobile Hamburger Menu */}
            <div className='hamburger' onClick={toggleMenu}>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='mobile-menu'>
                    <a href='/#why' onClick={() => setIsMenuOpen(false)}>Why</a>
                    <a href='/#tools' onClick={() => setIsMenuOpen(false)}>Tools</a>
                    <a href='/#contact' onClick={() => setIsMenuOpen(false)}>Contact</a>
                    {/* <Link to='/signup'> */}
                    {/* <div className='mobile-signin'>Sign-up</div> */}
                    {/* </Link> */}
                </div>
            )}
        </div>
    )
}

export default Navbar