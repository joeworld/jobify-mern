import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
    return (
        <main>
            <nav>
                <img src={logo} alt='jobify' className='logo' />
            </nav>
            <div className='container page'>
                {/* info */}
                <div className='info'>
                    <h1>job <span>tracking</span> app</h1>
                    <p>I'm baby venmo taxidermy kickstarter kombucha disrupt messenger bag, authentic cred food truck normcore kale chips tumblr semiotics. Asymmetrical hot chicken keffiyeh kickstarter. Leggings put a bird on it scenester, dreamcatcher occupy kitsch chartreuse church-key chicharrones. Whatever slow-carb celiac humblebrag locavore.</p>
                    <button className='btn btn-hero'>Login/Register</button>
                </div>
                <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </main>
    )
}

export default Landing