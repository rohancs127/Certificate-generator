import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import CertificateCss from '../styles/Certificate.module.css';
import certificateData from '../scripts/Certificate';


const Certificate = ()=>{
    
    const {name, dept, college, event, organizer} = certificateData;

    const certificateRef = useRef(null);

    return(
        <section className={CertificateCss.certificate} ref={certificateRef} id="certificate-section">

            <div className={CertificateCss.header}>
                <h2 className={CertificateCss.heading}>Certificate</h2>
                <h3 className={CertificateCss.subtitle}>Of Participation</h3>
            </div> 

            <div className={CertificateCss.certificateBody}>This Certificate is presented to {name} from the Department of {dept}, studying at {college}, for actively participating in {event}. We thank you for your participation and look forward to seeing you in future events.</div>

            <div className={CertificateCss.organizer}>{organizer}</div>
        </section>
    )
}

export default Certificate;
