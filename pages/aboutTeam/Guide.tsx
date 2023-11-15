import styled from "styled-components";
import GuideSlide from "./GuideSlide";
import Image from "next/image";

const Guide = () => {
  return (
    <GuideContainer>
      <SuccessGuide>
        <Title>
          <h1>차대의 성공가이드</h1>
        </Title>
        <GuideSlide />
      </SuccessGuide>

      <OurGoal>
        <Title color={"rgba(96, 218, 0, 0.20)"}>
          <h1>
            차대의 목표<span>자세히 보기&gt;</span>
          </h1>
        </Title>
        <GoalImage>
          <Image
            src="/images/our_goal.svg"
            alt="ourGoal"
            width={300}
            height={300}
          />
        </GoalImage>
      </OurGoal>
      <GoToTest>
        <p>시연하기 &gt;</p>
      </GoToTest>
    </GuideContainer>
  );
};

const GuideContainer = styled.div`
  width: 80vw;
  margin-top: 7vh;
  margin-bottom: 7vh;
`;

const SuccessGuide = styled.div``;

const OurGoal = styled.div`
  padding-top: 10vh;
`;

const Title = styled.div`
  margin-left: 1.5vw;
  h1 {
    width: 70%;
    font-size: 1.5rem;
    /* inset | offset-x | offset-y | color */
    box-shadow: inset 0 -15px 0 ${(props) => (props.color ? props.color : "rgba(0, 166, 218, 0.2)")};

    span {
      margin-left: 5vw;
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

const GoalImage = styled.div`
  padding-top: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoToTest = styled.div`
  display: flex;
  justify-content: flex-end;

  p {
    font-weight: 700;
  }
`;

export default Guide;
