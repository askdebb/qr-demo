import { useState } from "react";
import PropTypes from 'prop-types';

import InsertLinkSharpIcon from "@mui/icons-material/InsertLinkSharp";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import TextsmsSharpIcon from "@mui/icons-material/TextsmsSharp";
import PictureAsPdfSharpIcon from "@mui/icons-material/PictureAsPdfSharp";
import ImageSharpIcon from "@mui/icons-material/ImageSharp";

const ScrollCategoryOption = ({ onCategorySelect }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      icon: <InsertLinkSharpIcon className="icons" />,
      label: "Link",
    },
    {
      icon: <CallSharpIcon className="icons" />,
      label: "Call",
    },
    {
      icon: <ContactPageIcon className="icons" />,
      label: "Contact",
    },
    {
      icon: <EmailSharpIcon className="icons" />,
      label: "Mail",
    },
    {
      icon: <TextsmsSharpIcon className="icons" />,
      label: "SMS",
    },
    {
      icon: <WhatsAppIcon className="icons" />,
      label: "WhatsApp",
    },
    {
      icon: <PictureAsPdfSharpIcon className="icons" />,
      label: "PDF",
    },
    {
      icon: <ImageSharpIcon className="icons" />,
      label: "Image",
    },
  ];

  const handleCategoryClick = (item, selectedObjectIndex) => {
    setActiveIndex(selectedObjectIndex);
    onCategorySelect(item);
    console.log(`item selected label is: ${item.label} with index: ${selectedObjectIndex}`);
    
  };

  return (
    <div
      className="bg-white p-2 shadow-lg text-white qr-interface-item"
      style={{ backgroundColor: "fff" }}
    >
      <div className="scroller snaps-inline">
        {items.map((item, i) => (
          <div
            key={i}
            className={`scroller-item ${activeIndex === i ? "active" : ""}`}
            onClick={() => handleCategoryClick(item, i)}
          >
            {item.icon}
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

ScrollCategoryOption.propTypes = {
  onCategorySelect: PropTypes.func.isRequired,
};

export default ScrollCategoryOption;
