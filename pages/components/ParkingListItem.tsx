import Link from "next/link";
import styled from "styled-components";

interface Props {
  title: string;
  link: string;
}

const ParkingListItem = ({ title, link }: Props) => {
  return (
    <Link href={link}>
      <ParkingListItemContainer>
        <p>{title}</p>
      </ParkingListItemContainer>
    </Link>
  );
};

const ParkingListItemContainer = styled.div`
  width: 80vw;
  height: 5vh;
  background-color: #f0f0f0;
  box-shadow: 0px 1px 1px black;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export default ParkingListItem;
