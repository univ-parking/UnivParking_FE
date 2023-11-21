import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  title: string;
  prev: boolean;
}

const Header = ({ title, prev }: HeaderProps) => {
  return (
    <HeaderContainer>
      {prev && <FontAwesomeIcon icon={faChevronLeft} size={"2x"} />}
      {title && <h1>{title}</h1>}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  margin-top: 5vh;
  width: 100%;
  height: 5vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

const ContentsArea = styled.div``;

export default Header;
