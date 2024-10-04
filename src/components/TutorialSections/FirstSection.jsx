// import React from 'react'
import workTyping from '../../images/from-worker-typing-laptop.webp';
import imgDetails from '../../images/enter detail.webp';
import qrCodeTable from '../../images/qr-code-table.webp';

const FirstSection = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-5">How to Generate a QR Code</h2>

      {/* First Row: Image Left, Text Right */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={workTyping}
            alt="Step 1"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h4>Step 1: Enter your data</h4>
          <p>
            Provide the necessary details (like URL, text, or other data) that
            you want to convert into a QR code.
          </p>
        </div>
      </div>

      {/* Second Row: Text Left, Image Right */}
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2">
          <img
            src={imgDetails}
            alt="Step 2"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h4>Step 2: Customize your QR code</h4>
          <p>
            Choose from various customization options such as color, size, and
            design to make your QR code unique.
          </p>
        </div>
      </div>

      {/* Third Row: Image Left, Text Right */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={qrCodeTable}
            alt="Step 3"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h4>Step 3: Generate the QR code</h4>
          <p>
            Click the &quot;Generate&quot; button and instantly create your
            custom QR code. You can now download and use it!
          </p>
        </div>
      </div>

      {/* Continue alternating rows as needed */}
    </section>
  );
};

export default FirstSection