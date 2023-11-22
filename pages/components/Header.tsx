import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface HeaderProps {
  title: string;
  prev: boolean;
  link: string;
}

const Header = ({ title, prev, link }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        {prev && (
          <Link href={link}>
            <FontAwesomeIcon icon={faChevronLeft} size={"2x"} />
          </Link>
        )}
        {title && <h1>{title}</h1>}
        <div></div>
      </HeaderInnerContainer>
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

const HeaderInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
