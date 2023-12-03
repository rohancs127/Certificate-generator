import { useEffect } from 'react'
import CertificateCss from '../styles/Certificate.module.css'

const Certificate = ()=>{
    // useEffect(()=>{
    // document.body.classList.add('bodyStyling')
    // },[])
    return(
        <section>

            <div className={CertificateCss.header}>
                <h2 className={CertificateCss.heading}>Certificate</h2>
                <h3 className={CertificateCss.subtitle}>Of Participation</h3>
            </div> 

            <div className={CertificateCss.certificateBody}>This Certificate is presented to [Name] from the Department of [Department], studying at [College], for actively participating in [Event]. We thank you for your participation and look forward to seeing you in future events.</div>

            <div className={CertificateCss.organizer}>[Organizer]</div>
        </section>
    )
}

export default Certificate;