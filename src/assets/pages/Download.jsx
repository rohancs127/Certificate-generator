import Certificate from "./Certificate";
import DownloadCss from "../styles/Download.module.css";
import html2canvas from "html2canvas";
import certificateData from "../scripts/Certificate";
import DownloadComplete from "../Components/DownloadComplete";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Download = () => {
  const { name, event } = certificateData;
  const navigate = useNavigate();
  const [displayDComplete, setDisplayDComplete] = useState(false);
  const handleDownload = () => {
    const certificateElement = document.getElementById("certificate-section");

    html2canvas(certificateElement, {
      width: certificateElement.offsetWidth,
      height: certificateElement.offsetHeight,
      scrollX: 0,
      scrollY: -window.scrollY,
    })
      .then((canvas) => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = `${name}.png`;
        link.click();
      })
      .catch((error) => {
        console.error("Error capturing certificate as image:", error);
      });
    setDisplayDComplete(true);
  };

  return (
    <section>
      <div className={DownloadCss.certificate}>
        <div>
          <Certificate />
        </div>
        <div className={DownloadCss.buttonDiv}>
          <button onClick={handleDownload}>Download</button>
          <h4 className={DownloadCss.description}>Click here to Download</h4>
        </div>
      </div>
      {displayDComplete && <DownloadComplete />}
    </section>
  );
};

export default Download;
