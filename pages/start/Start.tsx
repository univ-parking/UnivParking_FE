import styled from "styled-components";
import StartBanner from "./StartBanner";
import StartAnimation from "./StartAnimation";


const Start = () => {
  return(
    <StartContainer>
      <StartBanner/>
      <StartAnimation/>
    </StartContainer>
  );
};

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



export default Start;