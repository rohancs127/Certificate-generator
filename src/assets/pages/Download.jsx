import Certificate from "./Cerificate";
import DownloadCss from '../styles/Download.module.css';
import handleDownload from "../scripts/Download";

const Download = ()=>{
   
    return(
        <section>
            <div className={DownloadCss.certificate}>
                <div>
                <Certificate/>
                </div>
                <div className={DownloadCss.buttonDiv}>
                    <button onClick={handleDownload}>Download</button>
                    <h4 className={DownloadCss.description}>Click here to Download</h4>
                </div>
            </div>
        </section>
    );
}

export default Download;