import React, { useState } from "react";
import {
  BiChevronLeftCircle,
  BiChevronRightCircle,
  BiChevronUpCircle,
  BiChevronDownCircle,
} from "react-icons/bi";

interface ChevronButtonProps {
  onClick: () => void;
  direction: "left" | "right" | "up" | "down";
  size: number;
}

const ChevronButton: React.FC<ChevronButtonProps> = ({
  onClick,
  direction,
  size,
}) => {
  const [color, setColor] = useState("#aaa");

  const handleMouseEnter = () => {
    setColor("#fff");
  };

  const handleMouseLeave = () => {
    setColor("#aaa");
  };

  const getIcon = () => {
    switch (direction) {
      case "left":
        return <BiChevronLeftCircle size={size} color={color} style={{transition: 'all 10sec '}}/>;
      case "right":
        return <BiChevronRightCircle size={size} color={color} />;
      case "up":
        return <BiChevronUpCircle size={size} color={color} />;
      case "down":
        return <BiChevronDownCircle size={size} color={color} />;
      default:
        return null;
    }
  };

  return (
    <button
      className="chevron"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {getIcon()}
    </button>
  );
};

export default ChevronButton;
