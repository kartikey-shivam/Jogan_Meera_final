import React from "react";
import Img1 from "./../assets/section7/1.png";
import Img2 from "./../assets/section7/2.png";
import Img3 from "./../assets/section7/3.png";
// import Img3 from "./../assets/section7/3.png";
import { BsArrowRight } from "react-icons/bs";
export default function Section3() {
  return (
    <div className="section7">
      <div className="section7-left">
        <img src={Img3} className="img-main-sec3" alt="" />
        <div className="circle_text circle_text_sec7">
          <p className="circle_text-1">Biggest Classifieds</p>
          <h1 className="circle_text-head circle_text-head_sec2 ">East Asia</h1>
          <p className="circle_text-2 circle_text-2_sec2">countries</p>
        </div>
        <div className="bottom-text">
          <h1 className="bottom-text-head">ABC 123</h1>
          <p className="bottom-text-1">
            We are the best development company in the world
          </p>
          <p className="bottom-text-2">Comming Soon</p>
        </div>
        <div className="skip">
          <p className="skip-text">SKIP</p>
        </div>
        {/* <img src={Img} className="img-main" alt="" /> */}
      </div>
      <div className="section7-right">
        <img src={Img1} className="sec7_img sec7_img1" />
        <img src={Img2} className="sec7_img sec7_img2" />
      </div>
    </div>
  );
}
