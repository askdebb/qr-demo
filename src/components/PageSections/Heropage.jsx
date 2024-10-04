// import React from 'react';

const Heropage = () => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center bg-light"
      style={{ minHeight: '60vh', paddingTop: '20px', paddingBottom: '20px' }}
    >
        <div className="container">
      {/* Main Heading with max-width and centered */}
      <h1 className="display-4 fw-bold my-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        Create Your Own QR Codes Instantly
      </h1>
      {/* Subheading */}
    
       <p className="lead mb-1">
        Generate unique and customizable QR codes for your business, events, or personal use in seconds. It&apos;s fast, easy, and free!
      </p> 
      </div>
      
    </section>
  );
};

export default Heropage;
