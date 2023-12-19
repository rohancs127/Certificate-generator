import Certificate from "./Cerificate";
import DownloadCss from '../styles/Download.module.css';

const Download = ()=>{
   
    return(
        <section>
            <div className={DownloadCss.certificate}>
                <Certificate/>
            </div>
        </section>
    );
}

export default Download;