import React, { useState, Component } from "react";
import Slider from "react-slick";

import "./style.scss";
import jacket1 from "../../assets/images/jacket1.png";
import jacket2 from "../../assets/images/jacket2.png";
import jacket3 from "../../assets/images/jacket3.png";
import jacket4 from "../../assets/images/jacket4.png";
import bag1 from "../../assets/images/bag1.png";
import bag2 from "../../assets/images/bag2.png";
import bag3 from "../../assets/images/bag3.png";
import bag4 from "../../assets/images/bag4.png";
import shoe1 from "../../assets/images/shoe1.png";
import shoe2 from "../../assets/images/shoe2.png";
import shoe3 from "../../assets/images/shoe3.png";
import shoe4 from "../../assets/images/shoe4.png";
import Card from "../UI/CardChosen/Card";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-[-30px] right-0 " onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
      >
        <path
          d="M12.5251 4.94165L17.5834 9.99996L12.5251 15.0583"
          stroke="#64748B"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.41667 10H17.4417"
          stroke="#64748B"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-[-30px] right-10" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
      >
        <path
          d="M8.475 4.94165L3.41667 9.99996L8.475 15.0583"
          stroke="#64748B"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.5833 10H3.55836"
          stroke="#64748B"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
const index = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="relative">
      <div className="container ">
        <h1 className="text-black text-[36px] font-semibold ">
          Chosen by our experts
        </h1>
        <Slider
          {...settings}
          className="wrapper_choosen flex items-center gap-[10px] pt-[55px]"
        >
          <Card
            img1={jacket1}
            img2={jacket2}
            img3={jacket3}
            img4={jacket4}
            title="Suede Bomber Jacket"
            description="Orange"
            rating="4.9 (269 reviews)"
            price="52"
          />
          <Card
            img1={bag1}
            img2={bag2}
            img3={bag3}
            img4={bag4}
            title="Downtown Pet Tote"
            description="Black and Orange"
            rating="4.9 (269 reviews)"
            price="88"
          />
          <Card
            img1={shoe1}
            img2={shoe2}
            img3={shoe3}
            img4={shoe4}
            title="Cader Leather Sneakers"
            description="3 Sizes Available"
            rating="4.9 (269 reviews)"
            price="60"
          />
          <Card
            img1={jacket1}
            img2={jacket2}
            img3={jacket3}
            img4={jacket4}
            title="Suede Bomber Jacket"
            description="Orange"
            rating="4.9 (269 reviews)"
            price="52"
          />
          <div className="min-w-[395px] h-[440px] bg-[#F3F4F6] mt-3 rounded-[16px]">
            <div className="flex items-center justify-center flex-col h-full">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-medium">More items</h2>

                <svg
                  className="rotate-[140deg]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M8.475 4.94165L3.41667 9.99996L8.475 15.0583"
                    stroke="#64748B"
                    stroke-width="1.25"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5833 10H3.55836"
                    stroke="#64748B"
                    stroke-width="1.25"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[16px] ml-[-46px]">Show me more</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default index;
