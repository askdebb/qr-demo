import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver'; // Import file-saver
import PropTypes from 'prop-types';
import { useEffect, useRef, useState, useCallback } from 'react';
import QRCodeStyling from 'qr-code-styling';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TextField from '@mui/material/TextField';
import DynamicSVG from '../SVGs/svg1'; // Import the DynamicSVG component
import '../QRInterface/QR-Interface.css';

function FormModal({ formCSSData, qrCodeContent, qrStyle }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    buttonText: 'Click me!',
    buttonTextColor: '#000000',
    borderRadius: 10,
    strokeWidth: 5,
    backgroundImageOpacity: 1,
    backgroundSize: 'contain',
  });

  const qrCodeRef = useRef(null);
  const qrCode = useRef(
    new QRCodeStyling({
      width: 200,
      height: 200,
      type: 'canvas',
      margin: 0,
      qrOptions: {
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: "H",
      },
      willReadFrequently: true,
    })
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(() => {
    if (formCSSData) {
      handleShow();
      updateQRCode();
    }
  }, [formCSSData]);

  const updateQRCode = useCallback(() => {
    if (qrCodeRef.current) {
      const qrData = `Link: ${qrCodeContent.url}\nDescription: ${qrCodeContent.description}\nPowered by: KayDee Solutions`;

      qrCode.current.update({
        data: qrData,
        image: qrCodeContent.imageUrl || '',
        dotsOptions: qrStyle.dotsOptions || {},
        cornersSquareOptions: {
          ...qrStyle.cornersSquareOptions,
          color: formData.borderColor,
        },
        cornersDotOptions: qrStyle.cornersDotOptions || {},
        backgroundOptions: {
          color: formData.backgroundColor,
        },
      });

      qrCodeRef.current.innerHTML = '';
      qrCode.current.append(qrCodeRef.current);
    }
  }, [qrCodeContent, qrStyle, formData]);

  useEffect(() => {
    if (show) {
      updateQRCode();
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Allow scrolling
    }

    return () => {
      document.body.style.overflow = ''; // Cleanup
    };
  }, [show, updateQRCode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'strokeWidth' || name === 'borderRadius' || name === 'backgroundImageOpacity'
        ? Number(value)
        : value,
    }));
  };


  // import { saveAs } from 'file-saver'; // If you're not already using this library
  
  const handleDownload = () => {
    const colElement = document.querySelector('.frame-modal'); // Select the Col element that contains both the QR code and the frame
    
    // Use html2canvas to capture the entire Col element as a canvas
    html2canvas(colElement, { useCORS: true }).then((canvas) => {
      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, 'qrcode_with_frame.png'); // Download the combined image
        }
      });
    }).catch((error) => {
      console.error("Error capturing the QR code with the frame: ", error);
    });
  };
  

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg" className='modal'>
      <Modal.Header closeButton>
        <Modal.Title>Customize Your QR Code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="flex-column flex-md-row">
            <Col xs={12} md={6}>
              <div>
                <h5>Frame Section</h5>
                <hr  className='divider'/>
                <div className='d-flex justify-content-around formModal-form'>
                  <TextField
                    label="Border Color"
                    name="borderColor"
                    type="color"
                    className='Textfield'
                    value={formData.borderColor}
                    onChange={handleInputChange}
                    sx={{ width: '150px' }}
                    margin="normal"
                  />
                  <TextField
                    label="Stroke Width"
                    name="strokeWidth"
                    type="range"
                    className='Textfield'
                    min="1"
                    max="10"
                    value={formData.strokeWidth}
                    onChange={handleInputChange}
                    sx={{ width: '150px' }}
                    margin="normal"
                  />
                </div>
                <br />
                <h5>Description Section</h5>
                <hr className='divider' />
                <div className='formModal-form d-flex justify-content-around'>
                  <TextField
                    label="Button Text"
                    name="buttonText"
                    type="text"
                    className='Textfield'
                    value={formData.buttonText}
                    onChange={handleInputChange}
                    sx={{ width: '150px' }}
                    margin="normal"
                    inputProps={{ maxLength: 28 }}
                  />
                  <TextField
                    label="Button Text Color"
                    name="buttonTextColor"
                    type="color"
                    className='Textfield'
                    value={formData.buttonTextColor}
                    onChange={handleInputChange}
                    sx={{ width: '150px' }}
                    margin="normal"
                  />
                </div>
                <br />
                <h5>Image Control Section</h5>
                <hr  className='divider' />
                <div className='formModal-form d-flex justify-content-around'>
                  <TextField
                    label="Border Radius"
                    name="borderRadius"
                    type="range"
                    min="1"
                    max="10"
                    className='Textfield'
                    value={formData.borderRadius}
                    onChange={handleInputChange}
                    sx={{ width: '100px' }}
                    margin="normal"
                  />
                  <TextField
                    label="Background Color"
                    name="backgroundColor"
                    type="color"
                    className='Textfield'
                    value={formData.backgroundColor}
                    onChange={handleInputChange}
                    sx={{ width: '100px' }}
                    margin="normal"
                  />
                  <TextField
                    label="Background Image Opacity"
                    name="backgroundImageOpacity"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    className='Textfield'
                    value={formData.backgroundImageOpacity}
                    onChange={handleInputChange}
                    sx={{ width: '100px' }}
                    margin="normal"
                  />
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} className=" d-flex align-items-center flex-column ">
              <div className="qrCodeContainer frame-modal">
                <DynamicSVG
                  borderColor={formData.borderColor}
                  strokeWidth={formData.strokeWidth}
                  backgroundColor={formData.backgroundColor}
                  buttonText={formData.buttonText}
                  buttonTextColor={formData.buttonTextColor}
                />
                <div ref={qrCodeRef} className="qrcodeModal" />
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className='bottom-footer'>
        <Button className="rounded-0" variant="light" onClick={handleClose}>
          Close
        </Button>
        <Button className="rounded-0" variant="primary" onClick={handleDownload}>
          Download QR Code
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

FormModal.propTypes = {
  formCSSData: PropTypes.object.isRequired,
  qrCodeContent: PropTypes.object.isRequired,
  qrStyle: PropTypes.object.isRequired,
};

export default FormModal;
