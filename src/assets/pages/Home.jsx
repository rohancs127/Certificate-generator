import HomeCss from '../styles/Home.module.css'

const Home = ()=>{
    return (
        <section className={HomeCss.home}>
            <div className={HomeCss.header}>
                <h2 className={HomeCss.heading}>Certificate Generator</h2>
            </div>
            <div className={HomeCss.contentBody}>
                <h3 className={HomeCss.getStarted}>Get Started</h3>
                <h4 className={HomeCss.generateCertificate}>Generate your certificate here!</h4>
                <button className={HomeCss.generateButton}>Generate Certificate</button>
            </div>
            <div className={HomeCss.footer}>
                <a href='https://github.com/rohancs127/Certificate-generator'><div className={HomeCss.githubDiv}><img className={HomeCss.githubLogo} src='github-mark-white.svg'/><div className={HomeCss.githubHeading}>GitHub</div></div></a>
            </div>
        </section>
    )
}

export default Home;