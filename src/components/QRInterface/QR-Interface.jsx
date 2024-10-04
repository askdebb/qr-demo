import { useState } from "react";
import CategoryField from "./CategoryField";
import "./QR-Interface.css";
import QROutputInterface from "./QROutputInterface";
import ScrollCategoryOption from "./ScrollCategoryOption";
import Frames from "./Frames";
import FormModal from "../FrameStructure/FormModal";

const QRInterface = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [content, setContent] = useState({
    url: "",
    description: "",
    imageUrl: "",
  });

  const [frame, setFrame] = useState(null); // Holds the selected frame's URL
  const [qrStyle, setQrStyle] = useState({
    dotsOptions: { type: "dots", color: "#726e6e" },
    cornersSquareOptions: { type: "square", color: "#160101" },
    cornersDotOptions: { type: "square", color: "#635858" },
  });

  // Handles when a category is selected
  const handleCategorySelected = (categoryItem) => {
    setSelectedCategory(categoryItem);
  };

  // Handles when a frame is selected from the Frames component
  const frameHandler = (frameUrl) => {
    setFrame(frameUrl); // Store the selected frame's URL
  };

  return (
    <section className="qrSection container mt-4" style={{ padding: "10px" }}>
      <div className="qr-interface container">
        {/* Scrollable category option component */}
        <ScrollCategoryOption onCategorySelect={handleCategorySelected} />

        {/* CategoryField: For entering URL, description, etc. */}
        <CategoryField
          selectedCategory={selectedCategory}
          onContentCreate={setContent}
        />

        {/* QROutputInterface: Displays the QR code with the selected frame */}
        <QROutputInterface
          frameSelected={frame}
          content={content}
          qrStyle={qrStyle}
          onStyleChange={setQrStyle}
        />

        {/* Frames: Lets user select a frame for the QR code */}
        <Frames onsetFrame={frameHandler} />

        {/* FormModal: Modal for customizing the QR code. It uses the selected frame and content */}
        <FormModal
          formCSSData={frame}
          qrCodeContent={content}
          qrStyle={qrStyle}
        />
      </div>
    </section>
  );
};

export default QRInterface;
