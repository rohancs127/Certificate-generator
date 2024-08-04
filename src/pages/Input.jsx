import InputCss from '../styles/Input.module.css';
import certificateData from '../scripts/Certificate';
// import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Input = ()=>{
    // let {name, dept, college, event, organizer} = certificateData;
    // const [input, setInput] = useState(certificateData);
    const navigate = useNavigate();
    const storeData = ()=>{
        certificateData.name = document.getElementById('name').value;
        certificateData.dept = document.getElementById('dept').value;
        certificateData.college = document.getElementById('college').value;
        certificateData.event = document.getElementById('event').value;
        certificateData.organizer = document.getElementById('organizer').value;
        console.log(certificateData);

        navigate('/download');
    }
    return(
        <section>
            <form className={InputCss.formDiv}>
                <h2 className={InputCss.heading}>Enter your details</h2>
                <div className={InputCss.inputDiv}>
                <div className={InputCss.contentDiv}>
                    <h3 className={InputCss.tag}>Name</h3>
                    <input className={InputCss.tagInput} id='name' placeholder="Enter your name"></input>
                </div>
                <div className={InputCss.contentDiv}>
                    <h3 className={InputCss.tag}>Event</h3>
                    <input className={InputCss.tagInput} id='event' placeholder="Enter the event name"></input>
                </div>
                <div className={InputCss.contentDiv}>
                    <h3 className={InputCss.tag}>Branch</h3>
                    <input className={InputCss.tagInput} id='dept' placeholder="Enter your branch"></input>
                </div>
                <div className={InputCss.contentDiv}>
                    <h3 className={InputCss.tag}>College</h3>
                    <input className={InputCss.tagInput}  id='college' placeholder="Enter your college"></input>
                </div>
                <div className={InputCss.contentDiv}>
                    <h3 className={InputCss.tag}>Organizer</h3>
                    <input className={InputCss.tagInput} id='organizer' placeholder="Enter Organizer name"></input>
                </div>
                </div>
                <button className={InputCss.butn} onClick={storeData} id='generate-btn'>Generate</button>
                <h4 className={InputCss.subtitle}>Click here to generate your certificate</h4>
            </form>
        </section>
    )
}

export default Input;