import Certificate from "../pages/Cerificate";
import html2canvas from 'html2canvas';

const handleDownload = (certificateRef) => {
    if (certificateRef.current) {
      html2canvas(certificateRef.current).then((canvas) => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'certificate.png';
        link.click();
      });
    }
  };
  
export default handleDownload;