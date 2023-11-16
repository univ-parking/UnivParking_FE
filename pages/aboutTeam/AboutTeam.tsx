import styled from "styled-components";
import UpperMenu from "./UpperMenu";
import Guide from "./Guide";
import { useState } from "react";
import AboutTeamModal from "../components/AboutTeamModal";

interface Data {
  title?: string;
  nameTag?: React.ReactNode;
  contents?: React.ReactNode;
}

const testValue = {
  title: "팀 소개",
  contents: <p>차대의 팀 소개입니다.</p>,
};

const AboutTeam = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [value, setValue] = useState<Data>();
  return (
    <AboutTeamContainer>
      <AboutTeamHeader>
        <h1>차대의 이야기</h1>
      </AboutTeamHeader>
      <UpperMenu setModalOpen={setModalOpen} />
      <Guide />
      {modalOpen && (
        <AboutTeamModal setModalOpen={setModalOpen} data={testValue} />
      )}
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
