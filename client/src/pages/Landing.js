import main from '../assets/images/main.svg'
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                {/* info */}
                <div className='info'>
                    <h1>job <span>tracking</span> app</h1>
                    <p>I'm baby venmo taxidermy kickstarter kombucha disrupt messenger bag, authentic cred food truck normcore kale chips tumblr semiotics. Asymmetrical hot chicken keffiyeh kickstarter. Leggings put a bird on it scenester, dreamcatcher occupy kitsch chartreuse church-key chicharrones. Whatever slow-carb celiac humblebrag locavore.</p>
                    <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </Wrapper>
    )
}

export default Landing