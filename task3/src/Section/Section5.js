import React from "react";
import Img1 from "./../assets/section5/1.png";
import Img2 from "./../assets/section5/2.png";
import Img3 from "./../assets/section5/3.png";
import Img4 from "./../assets/section5/4.png";
import Img5 from "./../assets/section5/5.png";
import { BsArrowRight } from "react-icons/bs";

export default function Section3() {
  return (
    <div className="section5">
      <div className="section5-left">
        left
        {/* <img src={Img} className="img-main" alt="" /> */}
        <div className="circle_text circle_text_sec5">
          <p className="circle_text-1">Text Headline</p>
          <h1 className="circle_text-head">Text Headline</h1>
          <p className="circle_text-2">Footer headline</p>
        </div>
        <div className="bottom-text">
          <h1 className="bottom-text-head">ABC 576</h1>
          <p className="bottom-text-1">
            We are the best development company in the world
          </p>
          <p className="bottom-text-2">
            View Case Study
            <BsArrowRight className="icon" />
          </p>
        </div>
        <div className="skip">
          <p className="skip-text">SKIP</p>
        </div>
      </div>
      <div className="section5-right">
        <img src={Img1} className="sec5_img sec5_img1" />
        <img src={Img2} className="sec5_img sec5_img2" />
        <img src={Img3} className="sec5_img sec5_img3" />
        <img src={Img4} className="sec5_img sec5_img4" />
        <img src={Img5} className="sec5_img sec5_img5" />
      </div>
    </div>
  );
}
