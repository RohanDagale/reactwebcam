import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import "./webcam-style.css";
import Button from "./Button";

const videoConstraints = {
  width: 640,
  height: 1080,
  facingMode: "user",
};

const WebcamCapture = () => {
  const img = useRef();
  const [image, setImage] = useState("");
  const capture = () => {
    setImage(img.current.getScreenshot());
    console.log(image);
  };

  return (
    <>
      <div className="main-container">
        <div className="left-container">
          <div className="live-cam">
            <Webcam
              className="frame"
              ref={img}
              height={"100%"}
              width={"100%"}
              //   height={100 + "%"}
              //   width={100 + "%"}
              mirrored={true}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <button onClick={capture}>
            <Button button="SNAP" />
          </button>
        </div>
        <div className="right-container">
          <div className="demo">
            <img src={image} className="frame1" />
          </div>
          <a download="image/jpeg" href={image} className="pad">
            <button className="button">Download</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default WebcamCapture;
