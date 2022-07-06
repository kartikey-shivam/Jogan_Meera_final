import React from "react";
import Img1 from "./../assets/section3/1.png";
import Img2 from "./../assets/section3/2.png";

export default function Section3() {
  return (
    <div className="section3">
      <div className="section3-left">
        {/* <img src={Img} className="img-main" alt="" /> */}
        <div className="circle_text circle_text_sec3">
          <p className="circle_text-1">The Next Big</p>
          <h1 className="circle_text-head">Blockchain</h1>
          <p className="circle_text-2">Revolution</p>
        </div>
        <div className="bottom-text">
          <h1 className="bottom-text-head">ABC 234</h1>
          <p className="bottom-text-1">
            We are the best development company in the world
          </p>
          <p className="bottom-text-2">
            Comming Soon
            {/* <BsArrowRight className="icon" /> */}
          </p>
        </div>
        <div className="skip">
          <p className="skip-text">SKIP</p>
        </div>
      </div>
      <div className="section3-right">
        <img src={Img1} className="sec3_img sec3_img1" />
        <img src={Img2} className="sec3_img sec3_img2" />
      </div>
    </div>
  );
}
