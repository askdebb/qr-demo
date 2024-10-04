import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import QRCodeStyling from "qr-code-styling";

import QRFrame from "./QRFrame";

const QROutputInterface = ({ content, qrStyle, onStyleChange }) => {
  const qrCodeRef = useRef(null);

  // Initialize the selected format with "png" as the default value
  const [selectedFormat, setSelectedFormat] = useState("png");

  const [qrCode, setQrCode] = useState(
    new QRCodeStyling({
      width: 200,
      height: 200,
      type: "svg",
      margin: 0,
      qrOptions: {
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "H",
      },
    })
  );

  // Append QR code to DOM after component mounts
  useEffect(() => {
    if (qrCodeRef.current) {
      qrCode.append(qrCodeRef.current);
    }
  }, [qrCode]);

  // Function to update QR code with new content and styles
  const updateQRCode = () => {
    const qrData = `Link: ${content.url}\nProgram Description: ${content.description}\nPowered by: KayDee Solutions`;

    qrCode.update({
      data: qrData,
      image: content.imageUrl || "", // Optional image within the QR code
      dotsOptions: qrStyle.dotsOptions || {},
      cornersSquareOptions: qrStyle.cornersSquareOptions || {},
      cornersDotOptions: qrStyle.cornersDotOptions || {},
    });
  };

  // Re-render QR code when content or styles change
  useEffect(() => {
    updateQRCode();
  }, [content, qrStyle]); // Trigger update when content or qrStyle changes

  // Handle QR code download with the latest state
  const handleDownload = (format) => {
    updateQRCode(); // Ensure the QR is updated before downloading
    setTimeout(() => {
      qrCode.download({
        name: "qr-code",
        extension: format,
      });
    }, 100); // Small delay to ensure update completes before download
  };

  // Handle style change and reset QR code to use new style
  const handleStyleChange = (newStyle) => {
    onStyleChange(newStyle); // Call the parent function to change styles
    setQrCode(
      new QRCodeStyling({
        width: 200,
        height: 200,
        type: "canvas",
        margin: 0,
        qrOptions: {
          typeNumber: 0,
          mode: "Byte",
          errorCorrectionLevel: "H",
        },
        // Set willReadFrequently to true
        willReadFrequently: true,
      })
    );
  };

  return (
    <div className="bg-white shadow-lg qr-interface-item p-3 outputHere">
      <p>
        Want to do more? <a href="#">Click Here</a>
      </p>
      <div className="qrContainer">
        <div ref={qrCodeRef} />
      </div>

      {/* QRFrame Component to select styles */}
      <div>
        <QRFrame className="qr" qrCompStyle={handleStyleChange} />
      </div>

      {/* Download Buttons */}
      <div className="takeAction d-flex">
        {/* Download button */}
        <button
          className="btn btn-secondary rounded-0 ms-2"
          type="button"
          onClick={() => handleDownload(selectedFormat)} // download based on selected format
        >
          Download
        </button>
        {/* Dropdown for selecting format */}
        <select
          className="form-select format-select btn-focus btn btn-secondary rounded-0 ms-1"
          value={selectedFormat} // state variable for the selected format
          onChange={(e) => setSelectedFormat(e.target.value)} // update the selected format
        >
          <option value="png">PNG</option>
          <option value="svg">SVG</option>
          <option value="jpeg">JPEG</option>
        </select>
      </div>
    </div>
  );
};

QROutputInterface.propTypes = {
  content: PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string, // Optional image
  }).isRequired,
  qrStyle: PropTypes.object.isRequired,
  onStyleChange: PropTypes.func.isRequired,
};

export default QROutputInterface;
