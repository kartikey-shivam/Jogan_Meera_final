import React from "react";
import Img1 from "./../assets/section2/1.png";
import Img2 from "./../assets/section2/2.png";
import Img3 from "./../assets/section2/3.png";
import { BsArrowRight } from "react-icons/bs";
export default function Section2() {
  return (
    <div className="section2">
      <div className="section2-left">
        <img src={Img3} className="img-main-sec3" alt="" />
        <div className="circle_text circle_text_sec2">
          <p className="circle_text-1"></p>
          <h1 className="circle_text-head circle_text-head_sec2 ">
            25M+ Downloads
          </h1>
          <p className="circle_text-2 circle_text-2_sec2">
            on appstore and google playstore
          </p>
        </div>
        <div className="bottom-text">
          <h1 className="bottom-text-head">ABC 123</h1>
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
      <div className="section2-right">
        <img src={Img1} className="sec2_img sec2_img1" />
        <img src={Img2} className="sec2_img sec2_img2" />
      </div>
    </div>
  );
}
