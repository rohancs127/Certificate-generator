import { useEffect } from 'react'
import CertificateCss from '../styles/Certificate.module.css'

const Certificate = ()=>{
    // useEffect(()=>{
    // document.body.classList.add('bodyStyling')
    // },[])
    return(
        <section>
            <div className={CertificateCss.heading}>Certificate</div>
            <div className={CertificateCss.certificateBody}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque omnis obcaecati illum, fugit neque, sint blanditiis adipisci repudiandae nemo beatae cupiditate harum eos veritatis nobis eius laborum aperiam accusantium error. Cumque dignissimos expedita, quasi ipsum iure at tenetur unde, a neque omnis magni itaque dolores blanditiis exercitationem aut minima.</div>
        </section>
    )
}

export default Certificate;