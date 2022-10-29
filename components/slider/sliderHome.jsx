import { Carousel } from "antd";
import React from "react";

export const SliderHome = () => {
  const contentStyle = {
    height: "450px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <Carousel
        effect="fade"
        autoplay
        dotPosition="bottom"
        adaptiveHeight={true}
        arrows={false}
        draggable={true}
        touchMove={true}
        infinite={true}
        swipeToSlide={true}
        speed={4000}
      >
        <div>
          <h3 style={contentStyle}></h3>
        </div>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
      </Carousel>
    </>
  );
};
