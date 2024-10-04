import { useState } from "react";
import PropTypes from 'prop-types';

import FrameOne from "../FrameStructure/FrameOne";
import FrameTwo from "../FrameStructure/FrameTwo";
import FrameThree from "../FrameStructure/FrameThree";
import FrameFour from "../FrameStructure/FrameFour";
import Framefive from "../FrameStructure/Framefive";
import FrameSix from "../FrameStructure/FrameSix";
import FrameSeven from "../FrameStructure/FrameSeven";
import FrameEight from "../FrameStructure/FrameEight";

const Frames = ({ onsetFrame }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    { icon: <FrameOne className="icons" />, label: "Link", frameUrl: "../../images/frame_1.svg" },
    { icon: <FrameTwo className="icons" />, label: "Call", frameUrl: "../../images/frame_2.svg" },
    { icon: <FrameThree className="icons" />, frameUrl: "../../images/frame_3.svg" },
    { icon: <FrameFour className="icons" />, frameUrl: "../../images/frame_4.svg" },
    { icon: <Framefive className="icons" />, frameUrl: "../../images/frame_5.svg" },
    { icon: <FrameSix className="icons" />, frameUrl: "../../images/frame_6.svg" },
    { icon: <FrameSeven className="icons" />, frameUrl: "../../images/frame_7.svg" },
    { icon: <FrameEight className="icons" />, frameUrl: "../../images/frame_8.svg" },
  ];

  const handleFrameClick = (item, selectedObjectIndex) => {
    setActiveIndex(selectedObjectIndex);
    onsetFrame(item.frameUrl); // Pass the selected frame's URL to the parent
    console.log(`Selected frame with index: ${selectedObjectIndex}`);
  };

  return (
    <div className="bg-white p-2 shadow-lg qr-interface-item">
      <div className="scroller snaps-inline">
        {items.map((item, i) => (
          <div
            key={i}
            className={`scroller-item ${activeIndex === i ? "active" : ""}`}
            onClick={() => handleFrameClick(item, i)}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

Frames.propTypes = {
  onsetFrame: PropTypes.func.isRequired,
};

export default Frames;
