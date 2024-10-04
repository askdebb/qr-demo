import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import PropTypes from "prop-types";

const defaultQrFrames = [
  {
    id: 1,
    style: {
      width: 50,
      height: 50,
      type: "canvas",
      data: {}, // Sample data for each frame
      qrOptions: {
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "H"
      },
      dotsOptions: {
        type: "extra-rounded",
        color: "#6a1a4c"
      },
      dotsOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#6a1a4c",
      color2: "#6a1a4c",
      rotation: "0"
    }},
      backgroundOptions: {
        color: "#ffffff"
      },
      cornersSquareOptions: { type: "extra-rounded", color: "#000000" },
  cornersSquareOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0"
    }
  },
  cornersDotOptions: { type: "", color: "#000000" },
  cornersDotOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0"
    }
  },
  backgroundOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#ffffff",
      color2: "#ffffff",
      rotation: "0"
    }
  }
    }
  },
  {
    id: 2,
    style: {
      width: 50,
      height: 50,
      type: "canvas",
      data: {}, // Sample data for each frame
      qrOptions: {
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "Q"
      },
      dotsOptions: {
        type: "square",
        color: "#01a07e"
      },
      dotsOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
          linear: true,
          radial: false,
          color1: "#6a1a4c",
          color2: "#6a1a4c",
          rotation: "0"
        }},
      backgroundOptions: {
        color: "#f0f0f0"
      },
      cornersSquareOptions: { type: "square", color: "#000000" },
  cornersSquareOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0"
    }
  },
  cornersDotOptions: { type: "dot", color: "#000000" },
  cornersDotOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0"
    }
  },
  backgroundOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#ffffff",
      color2: "#ffffff",
      rotation: "0"
    }
  }
    }
  },
  {
    id: 3,
    style: {
      width: 50,
      height: 50,
      type: "canvas",
      data: {}, // Sample data for each frame
      qrOptions: {
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "Q"
      },
      dotsOptions: {
        type: "classy-rounded",
        color: "#028d02"
      },
      dotsOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
          linear: true,
          radial: false,
          color1: "#6a1a4c",
          color2: "#6a1a4c",
          rotation: "0"
        }},
      backgroundOptions: {
        color: "#f0f0f0"
      },
      cornersSquareOptions: { type: "dot", color: "#000000" },
  cornersSquareOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0"
    }
  },
  cornersDotOptions: { type: "square", color: "#000000" },
  cornersDotOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0"
    }
  },
  backgroundOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#ffffff",
      color2: "#ffffff",
      rotation: "0"
    }
  }
    }
  },
  {
    id: 4,
    style: {
      width: 50,
      height: 50,
      type: "canvas",
      data: {}, // Sample data for each frame
      qrOptions: {
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "Q"
      },
      dotsOptions: {
        type: "classy",
        color: "#ff00c8"
      },
      dotsOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
          linear: true,
          radial: false,
          color1: "#6a1a4c",
          color2: "#6a1a4c",
          rotation: "0"
        }
      },
      backgroundOptions: {
        color: "#f0f0f0"
      },
      cornersSquareOptions: { type: "extra-rounded", color: "#000000" },
  cornersSquareOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0"
    }
  },
  cornersDotOptions: { type: "dot", color: "#000000" },
  cornersDotOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0"
    }
  },
  backgroundOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#ffffff",
      color2: "#ffffff",
      rotation: "0"
    }
  }
    }
  },
  {
    id: 5,
    style: {
      width: 50,
      height: 50,
      type: "canvas",
      data: {}, // Sample data for each frame
      qrOptions: {
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "Q"
      },
      dotsOptions: {
        type: "dots",
        color: "#0051ff"
      },
      dotsOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
          linear: true,
          radial: false,
          color1: "#6a1a4c",
          color2: "#6a1a4c",
          rotation: "0"
        }
      },
      backgroundOptions: {
        color: "#ffffff"
      },
      cornersSquareOptions: { type: "dot", color: "#000000" },
  cornersSquareOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0"
    }
  },
  cornersDotOptions: { type: "dot", color: "#000000" },
  cornersDotOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0"
    }
  },
  backgroundOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#ffffff",
      color2: "#ffffff",
      rotation: "0"
    }
  }
    }
  }
];


const QRFrame = ({ qrCompStyle }) => {
  const frameRefs = useRef([]);

  // Render previews of QR codes
  useEffect(() => {
    defaultQrFrames.forEach((frame, index) => {
      const qr = new QRCodeStyling(frame.style);
  
      if (frameRefs.current[index]) {
        // Clear previous QR code (if any) to avoid duplication
        frameRefs.current[index].innerHTML = ''; 
  
        // Append QR code to the current frame
        qr.append(frameRefs.current[index]);
      }
    });
  }, []);

    // Handle frame clicks to apply style
    const handleClick = (style) => {
      qrCompStyle(style); // Update the main QR Code style
    };
  
  return (

    <div className="frame-container my-2 mx-auto snaps-inline">
      {defaultQrFrames.map((frame, index) => (
          <div
            key={frame.id}
            ref={(el) => (frameRefs.current[index] = el)}
            style={{ cursor: "pointer", border: "2px solid #ccc", padding: "5px" }}
            className="frame-container-item"
            onClick={() => handleClick(frame.style)}
          />
        ))}
    </div>
  );
};

QRFrame.propTypes = {
  qrCompStyle: PropTypes.func.isRequired
};

export default QRFrame;

