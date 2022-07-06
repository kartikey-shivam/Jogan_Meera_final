import React from "react";
import Img1 from "./../assets/section6/1.png";
import Img2 from "./../assets/section6/2.jpg";
import { BsArrowRight } from "react-icons/bs";
export default function Section3() {
  return (
    <div className="section6">
      <div className="section6-left">
        left
        {/* <img src={Img} className="img-main" alt="" /> */}
        <div className="circle_text circle_text_sec5">
          <p className="circle_text-1">Developing ER Solution For</p>
          <h1 className="circle_text-head">Text Headline</h1>
          <p className="circle_text-2">In furniture industry</p>
        </div>
        <div className="bottom-text">
          <h1 className="bottom-text-head">ABC 678</h1>
          <p className="bottom-text-1">
            Best since 2017 we offer wide range offer web development and app
            development
          </p>
          <p className="bottom-text-2">
            View Case Study
            <BsArrowRight className="icon" fontWeight={500} />
          </p>
        </div>
        <div className="skip">
          <p className="skip-text">SKIP</p>
        </div>
      </div>
      <div className="section6-right">
        <img src={Img1} className="sec6_img sec6_img1" />
        <img src={Img2} className="sec6_img sec6_img2" />
      </div>
    </div>
  );
}
