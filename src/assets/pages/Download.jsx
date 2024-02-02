import Certificate from "./Cerificate";
import DownloadCss from '../styles/Download.module.css';
import html2canvas from 'html2canvas';

const Download = ()=>{
    const handleDownload = () => {
        const certificateElement = document.getElementById('certificate-section');
    
        html2canvas(certificateElement)
          .then((canvas) => {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'certificate.png';
            link.click();
          })
          .catch((error) => {
            console.error('Error capturing certificate as image:', error);
          });
      };
   
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