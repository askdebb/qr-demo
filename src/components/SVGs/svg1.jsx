// src/components/QRInterface/DynamicSVG.js

// import React from 'react';
import PropTypes from 'prop-types';

const svg1 = ({
  borderColor,
  strokeWidth,
  backgroundColor,
  buttonText,
  buttonTextColor,
}) => {
  // Calculate font size based on text length to ensure it fits within the button
  const fontSize = Math.max(14, 18 - buttonText.length * 0.2); // Adjust as needed

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="250px" height="420px">
      {/* Main shape */}
      <rect
        x="10"
        y="80"
        width="220"
        height="240"
        rx="10"
        fill="none"
        stroke={borderColor}
        strokeWidth={strokeWidth}
      />

      {/* Button shape */}
      <rect
        x="10"
        y="360"
        width="220"
        height="40"
        rx="5"
        fill={backgroundColor}
        stroke={borderColor}
        strokeWidth={strokeWidth}
      />

      {/* Editable text */}
      <foreignObject x="20" y="370" width="200" height="20">
        <input
          xmlns="http://www.w3.org/1999/xhtml"
          type="text"
          value={buttonText}
          readOnly
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            padding: '0',
            fontSize: `${fontSize}px`,
            textAlign: 'center',
            backgroundColor: backgroundColor,
            color: buttonTextColor,
            textOverflow: 'ellipsis',
          }}
        />
      </foreignObject>
    </svg>
  );
};

svg1.propTypes = {
  borderColor: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonTextColor: PropTypes.string.isRequired,
};

export default svg1;
