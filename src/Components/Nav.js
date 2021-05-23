import {React, useState} from 'react'
import './Nav.css'
import {useHistory} from 'react-router-dom'

import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';


function Nav({themeSetter,theme}) {

    const [menutoggle, setMenutoggle] = useState(false)

    // For getting Close Menu Optn when clicked on Menu Options and
    // for Menu Bar when it is active for getting out when clicked on it
    const Toggle = () =>{
        setMenutoggle(!menutoggle)
        console.log(menutoggle)
    }

    // For closing the Sidebar when link clicked
    const closeMenu = () => {
        setMenutoggle(false)
    }

    //Own idea for make the navbar work even at the blogpage
    const history = useHistory();
    const navigate = (url) => {
        history.push(`/${url}`);
    }

    return (
        <div className="header">
            <div className="logo-nav">
                
                <a className='left-logo' href="#home" onClick={()=>{closeMenu();navigate("#home")}}>Pranavdhar</a>
                
                <div className='right-navigations'>

                    <div className={menutoggle? "nav-options active" : "nav-options"}>
                        <a onClick={()=>{closeMenu();navigate("#home")}} href="#home">Home</a>
                        <a onClick={()=>{closeMenu();navigate("#about")}} href="#about">About</a>
                        <a onClick={()=>{closeMenu();navigate("#stats")}} href="#stats">Stats</a>
                        <a onClick={()=>{closeMenu();navigate("#projects")}} href="#projects">Projects</a>
                        <a onClick={()=>{closeMenu();navigate("#blogs")}} href="#blogs">Blogs</a>
                        <a onClick={()=>{closeMenu();navigate("#contact")}} href="#contact">Contact</a>
                    </div>

                    <div className='theme-toggle'>
                    {
                        theme === "light" 
                        ? 
                        <NightsStayIcon onClick={themeSetter} className='theme-toggle' style={{ fontSize: 40}}/>
                        :
                        <WbSunnyIcon onClick={themeSetter} className='theme-toggle' style={{ fontSize: 40}}/>
                    }
                    </div>
                </div>

            </div>
            <div className="mobile-nav">
                <div className='mobile-menu'>
                    {
                        theme === "light" 
                        ? 
                        <NightsStayIcon onClick={themeSetter} className='theme-toggle' style={{ fontSize: 40}}/>
                        :
                        <WbSunnyIcon onClick={themeSetter} className='theme-toggle' style={{ fontSize: 40}}/>
                    }
                    
                    <div onClick={() =>{Toggle()}}>
                        {menutoggle ? (
                            <ClearIcon className="menu-icon" style={{ fontSize: 40}}/>
                            ) : (
                            <MenuIcon className="menu-icon" style={{ fontSize: 40}}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
