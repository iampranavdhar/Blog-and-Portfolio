import { React } from 'react';
import './Home.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';

function Home() {
    return (
        <div className="home" id='home'>
            <p className='gif' align="center"><a href="https://github.com/iampranavdhar"><img src="https://user-images.githubusercontent.com/41234408/101987297-4473fb00-3cb9-11eb-9675-289ada4eef7e.gif" alt="Animated footer bars" width="100%" max-width='1024px'/></a></p>
            <div className="home__data">
                <h1 className="home__title">
                    Hey!,<img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" alt='' width="50px"></img>
                    <br />
                    I'am <span>Pranavdhar</span>
                    <br />
                    Web Developer
                </h1>
                <div className="home__img">
                    <img src="assets/home.png" alt=""></img>
                </div>
            </div>

            <div className="home__social">
                <a href="https://www.linkedin.com/in/sai-pranavdhar-reddy-nalamalapu-038104206/" className="home__social-icon">
                    <LinkedInIcon className='icon' />
                </a>
                <a href="https://twitter.com/Pranavdhar8" className="home__social-icon">
                    <TwitterIcon className='icon' />
                </a>
                <a href="https://github.com/iampranavdhar" className="home__social-icon">
                    <GitHubIcon className='icon' />
                </a>
                <a href="#home" className="home__social-icon">
                    <TelegramIcon className='icon' />
                </a>
            </div>
        </div>
    )
}

export default Home