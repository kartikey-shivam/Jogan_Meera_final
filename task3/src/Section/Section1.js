import React from "react";
import Img from "./../assets/paths.svg";
import Img1 from "./../assets/section1/1.png";
import Img2 from "./../assets/section1/2.png";
import Img3 from "./../assets/section1/3.png";
import Img4 from "./../assets/section1/4.png";
import Img5 from "./../assets/section1/5.png";
import { BsArrowRight } from "react-icons/bs";
export default function Section1() {
  return (
    <div className="section1">
      <div className="section1-left">
        {/* <img src={Img} className="img-main" alt="" /> */}
        <div className="circle_text">
          <p className="circle_text-1">Redefining</p>
          <h1 className="circle_text-head">UX Stratergy</h1>
          <p className="circle_text-2">and UI Design</p>
        </div>
        <div className="bottom-text">
          <h1 className="bottom-text-head">ABC 456</h1>
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
      <div className="section1-right">
        <img src={Img1} className="img img1" />
        <img src={Img2} className="img img2" />
        <img src={Img3} className="img img3" />
        <img src={Img4} className="img img4" />
        <img src={Img5} className="img img5" />
      </div>
    </div>
  );
}
