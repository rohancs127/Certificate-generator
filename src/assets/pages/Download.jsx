import Certificate from "./Cerificate";
import DownloadCss from '../styles/Download.module.css';

const Download = ()=>{
   
    return(
        <section>
            <div className={DownloadCss.certificate}>
                <div>
                <Certificate/>
                </div>
                <div>
                    <button>Download</button>
                </div>
            </div>
        </section>
    );
}

export default Download;