import '../styles/Home.css'

const Home = ()=>{
    return (
        <section className="home">
            <div className="header">
                <h2 className='heading'>Certificate Generator</h2>
            </div>
            <div className="content-body">
                <h3>Get Started</h3>
                <h4>Genenrate your certificate here!</h4>
                <button className='generate-button'>Generate</button>
            </div>
            <div className="footer">
                <a href='https://github.com/rohancs127/Certificate-generator'><div className='github-div'><img className='github-logo' src='github-mark-white.svg'/><div className='github-heading'>GitHub</div></div></a>
            </div>
        </section>
    )
}

export default Home;