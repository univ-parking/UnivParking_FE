import styled from "styled-components";
import MenuListItem from "../components/MenuListItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

interface Props {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const settings = {
  dots: true,
  draggable: false,
  adaptiveHeight: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  speed: 500,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

const MENU_DATA_ARRAY = [
  {
    title: "차대 팀 소개",
    value: "intro",
  },
  {
    title: "배경과 필요성",
    value: "background",
  },
  {
    title: "서비스 목표",
    value: "goal",
  },
  {
    title: "SaaS란?",
    value: "saas",
  },
  {
    title: "서비스의 장점",
    value: "service",
  },
];

const UpperMenu = ({ setModalOpen }: Props) => {
  return (
    <SliderContainer>
      <Slider {...settings}>
        {MENU_DATA_ARRAY.map((items, index) => (
          <MenuListItem
            key={index}
            title={items.title}
            value={items.value}
            setModalOpen={setModalOpen}
          />
        ))}
      </Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  margin-top: 2vh;
`;

export default UpperMenu;
