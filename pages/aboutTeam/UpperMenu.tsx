import styled from "styled-components";
import MenuListItem from "../components/MenuListItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  draggable: false,
  adaptiveHeight: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 2000,
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

const UpperMenu = () => {
  return (
    <SliderContainer>
      <Slider {...settings}>
        {MENU_DATA_ARRAY.map((items, index) => (
          <MenuListItem key={index} title={items.title} value={items.value} />
        ))}
      </Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  margin-top: 2vh;
  margin-left: 10vw;
`;

export default UpperMenu;
