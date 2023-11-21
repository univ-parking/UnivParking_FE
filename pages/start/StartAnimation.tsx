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
  background-image: url("data:image/svg+xml,%3Csvg width='287' height='932' viewBox='0 0 287 932' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect y='7' width='287' height='932' fill='%23B1B1B1' fill-opacity='0.2'/%3E%3Cpath d='M9.00006 0L9.00002 932' stroke='%23F8D823' stroke-width='5'/%3E%3Cpath d='M76 0L76 932' stroke='white' stroke-width='4' stroke-dasharray='50 50'/%3E%3Cpath d='M209 0L209 932' stroke='white' stroke-width='4' stroke-dasharray='50 50'/%3E%3Cpath d='M143 0L143 932' stroke='%23F8D823' stroke-width='5'/%3E%3Cpath d='M275 0L275 932' stroke='%23F8D823' stroke-width='5'/%3E%3C/svg%3E%0A");
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
