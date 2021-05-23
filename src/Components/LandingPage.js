import React from 'react'
import About from './About'
import Blogs from './Blogs'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Projects from './Projects'
import Stats from './Stats'

function LandingPage() {
    return (
        <div>
            <Home/>
            <About/>
            <Stats/>
            <Projects/>
            <Blogs/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default LandingPage
