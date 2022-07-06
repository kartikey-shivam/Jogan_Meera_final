import React from "react";

import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";
import Section4 from "./Section/Section4";
import Section5 from "./Section/Section5";
import Section6 from "./Section/Section6";
import Section7 from "./Section/Section7";
export default function Home() {
  return (
    <div className="home">
      <Section2 />
      <Section3 />
      <Section4 />
      <Section1 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}
