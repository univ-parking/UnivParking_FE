import styled from "styled-components";
import UpperMenu from "./UpperMenu";
import Guide from "./Guide";

const AboutTeam = () => {
  return (
    <AboutTeamContainer>
      <AboutTeamHeader>
        <h1>차대의 이야기</h1>
      </AboutTeamHeader>
      <UpperMenu />
      <Guide />
    </AboutTeamContainer>
  );
};

const AboutTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const AboutTeamHeader = styled.div`
  margin-top: 5vh;
  width: 100%;
  height: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export default AboutTeam;
