import styled from "styled-components";
import Link from "next/link";

const StartAnimation = () => {
  return (
    <StartAnimationContainer>
      <RoadBackground>
        <ButtonContainer>
          <Link href={"/parkingSlot"}>
            <Button color={"#D8ECFE"}>
              <p>차대 시연하기</p>
            </Button>
          </Link>

          <Link href={"/aboutTeam"}>
            <Button color={"#BEEFE5"}>
              <p>차대의 이야기</p>
            </Button>
          </Link>
        </ButtonContainer>
      </RoadBackground>
    </StartAnimationContainer>
  );
};

const StartAnimationContainer = styled.div`
  height: 100vh;
`;

const RoadBackground = styled.div`
  width: 80vw;
  height: 100vh;
  background-image: url("/images/bgRoad.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const ButtonContainer = styled.div`
  padding-top: 45rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  width: 10rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0.3rem;
  display: flex;
  background-color: ${(props) => (props.color ? props.color : "green")};
  box-shadow: 0px 1px 1px black;

  p {
    font-size: 1rem;
    font-weight: 900;
  }
`;

export default StartAnimation;
