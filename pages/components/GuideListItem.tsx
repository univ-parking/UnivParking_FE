import styled from "styled-components";
import { GuideData } from "../aboutTeam/GuideSlide";
import Image from "next/image";

interface GuideDataProps extends GuideData {}

const GuideListItem = ({ icon, title, content }: GuideDataProps) => {
  return (
    <GuideListItemContainer>
      <ContentsContainer>
        <Image src={icon} width={40} height={40} alt={title} />
        <Title>
          <h1>{title}</h1>
        </Title>

        <Content>
          <p>{content}</p>
        </Content>
      </ContentsContainer>
    </GuideListItemContainer>
  );
};

const GuideListItemContainer = styled.div`
  width: 17rem;
  height: 12rem;
  border-bottom: 3px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const Title = styled.div`
  margin-top: 2vh;
  h1 {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

const Content = styled.div`
  margin-top: 2vh;
  p {
    font-size: 1rem;
    font-weight: 300;
    word-break: keep-all;
  }
`;

export default GuideListItem;
