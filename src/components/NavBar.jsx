import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { setThemeLight, setThemeDark } from '../reducers'

const NavBar = () => {
    const currentPage = useLocation()
    const navigate = useNavigate()


    const themeState = useSelector(state => state.theme)
    const dispatch = useDispatch()

    const ActiveLogoClass = "btn btn-primary text-xl "
    const inActiveLogoClass = "btn btn-ghost text-xl "
    const activePageClass = 'btn btn-primary'
    const inActivePageClass = 'btn btn-ghost'

    const activeColor = themeState.logoActive
    const inActiveColor = activeColor == 'white' ? "black" : "white";

    const logoStyle = currentPage.pathname == '/' ? activeColor : inActiveColor;

    return (    
    <div className="navbar bg-base-100">
    <div className='navbar-start'>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a onClick={() => navigate('/projects')}>Projects</a></li>
        <li><a onClick={() => navigate('/certifications')}>Certifications</a></li>
        <li><a onClick={() => navigate('/contact')}>Contact Me!</a> </li>
      </ul>
    </div>
      <button className={currentPage.pathname == '/' ? ActiveLogoClass : inActiveLogoClass} onClick={() => navigate('/')}>
        <div className="w- rounded" >
            <img src= {`src/assets/pd-logo-${logoStyle}.webp`} width="24" />
        </div> 
      Project Delta </button>
    </div>
    <div className='navbar-center hidden lg:flex'>
      <button className={currentPage.pathname == '/projects' ? activePageClass : inActivePageClass} onClick={() => navigate('/projects')} >Projects</button>
      <button className={currentPage.pathname == '/certifications' ? activePageClass : inActivePageClass} onClick={() => navigate('/certifications')}>Certifications</button>
      <button className={currentPage.pathname == '/contact' ? activePageClass : inActivePageClass } onClick={() => navigate('/contact' )}>Contact Me!</button>
    </div>
    <div className='navbar-end '>
      <button className='btn btn-circle p-2 btn-ghost' onClick={() => window.open("https://github.com/Sainosaur") }>
        <img src={`src/assets/icons/github-${themeState.logoInActive}.png`} alt='github' />
      </button>
      {themeState.theme == "light" ? <button className="btn btn-circle btn-ghost p-2" data-set-theme="dark" data-key="theme" onClick={() => dispatch(setThemeDark())} >
        <img src="src/assets/icons/dark-theme.png" />
         </button> : <button className="btn btn-circle btn-ghost p-2" data-set-theme="light" data-key="theme" onClick={() => dispatch(setThemeLight())} >
          <img src="src/assets/icons/light-theme.png" />
          </button>}
    </div>
  </div>
    )
}

export default NavBar;  

