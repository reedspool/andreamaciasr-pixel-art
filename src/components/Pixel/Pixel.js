import { useState, useEffect } from "react";
import "./Pixel.css";
import RestartButton from "../RestartButton/RestartButton";

export default function Pixel({
  color,
  reset,
  resetComplete,
  background,
  handleSetBackgroundComplete,
  isMouseDown,
}) {
  const [pixelColor, setPixelColor] = useState(color);
  const [previousColor, setPreviousColor] = useState("white");
  const [currentBackground, setCurrentBackground] = useState("white");
  // const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    if (reset) {
      setPixelColor("white");
      handleRestart();
      resetComplete();
      setCurrentBackground("white");
      setPreviousColor("white");
    }
  }, [reset, resetComplete]);

  useEffect(() => {
    if (background) {
      if (pixelColor === currentBackground) {
        setPreviousColor(color);
        setPixelColor(color);
        handleSetBackgroundComplete();
        setCurrentBackground(color);
      }
    }
  }, [background, handleSetBackgroundComplete]);

  function handleMouseDown() {
    handleMouseClick();
  }

  function handleMouseHover() {
    if (isMouseDown) {
      handleMouseClick();
    } else {
      setPixelColor(color);
    }
  }

  function handleMouseLeave() {
    setPixelColor(previousColor);
  }

  function handleMouseClick() {
    setPreviousColor(color);
    setPixelColor(color);
  }

  function handleRestart() {
    setPreviousColor("white");
  }

  return (
    <div
      className="pixel"
      // onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseHover}
      // onClick={handleMouseClick}
      onMouseDown={handleMouseDown}
      // style={pixelStyle}
      style={{ backgroundColor: pixelColor }}
    ></div>
  );
}
