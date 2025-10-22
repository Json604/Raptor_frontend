import './components.css'
import logo from '../assets/logo.svg'

function Navbar() {
    return(
        <div className='navbar'>
            <a href='#home' className='brand'>
                <img src={logo} width={35} height={35} alt='logo'/>
                <p style={{fontSize:'1.6rem'}}>Raptor</p>
            </a>
            <div className='sections'>
                <a href='#why'>Why</a>
                <a href='#tools'>Tools</a>
                <a href='contact'>Contact</a>
            </div>
            <div className='signin'>Sign-up</div>
        </div>
    )
}

export default Navbar