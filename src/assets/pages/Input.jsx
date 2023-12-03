import InputCss from '../styles/Input.module.css'

const Input = ()=>{
    return(
        <section>
            <form className={InputCss.formDiv}>
                <h2 className={InputCss.heading}>Enter your details</h2>
                <div className={InputCss.inputDiv}>
                <div className={InputCss.contentDiv}>
                    <h3 className={InputCss.tag}>Name</h3>
                    <input className={InputCss.tagInput} placeholder="Enter your name"></input>
                </div>
                <div className={InputCss.contentDiv}>
                    <h3 className={InputCss.tag}>Event</h3>
                    <input className={InputCss.tagInput} placeholder="Enter the event name"></input>
                </div>
                <div className={InputCss.contentDiv}>
                    <h3 className={InputCss.tag}>Branch</h3>
                    <input className={InputCss.tagInput} placeholder="Enter your branch"></input>
                </div>
                <div className={InputCss.contentDiv}>
                    <h3 className={InputCss.tag}>College</h3>
                    <input className={InputCss.tagInput} placeholder="Enter your college"></input>
                </div>
                </div>
                <button>Generate</button>
                <h4 className={InputCss.subtitle}>Click here to generate your certificate</h4>
            </form>
        </section>
    )
}

export default Input;