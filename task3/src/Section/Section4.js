import React from "react";
import Img1 from "./../assets/section4/1.png";
import Img2 from "./../assets/section4/2.png";
import Img3 from "./../assets/section4/3.png";

export default function Section3() {
  return (
    <div className="section4">
      <div className="section4-left">
        <div className="circle_text circle_text_sec4">
          <p className="circle_text-1">Powered By</p>
          <img src={Img3} className="img-main" alt="" />
          <p className="circle_text-2 circle_text-2_sec4">Algorithms</p>
        </div>
        <div className="bottom-text">
          <h1 className="bottom-text-head">ABC 345</h1>
          <p className="bottom-text-1">
            We are the best development company in the world
          </p>
          <p className="bottom-text-2">Comming Soon</p>
        </div>
        <div className="skip">
          <p className="skip-text">SKIP</p>
        </div>
      </div>
      <div className="section4-right">
        <img src={Img1} className="sec4_img sec4_img1" />
        <img src={Img2} className="sec4_img sec4_img2" />
      </div>
    </div>
  );
}
