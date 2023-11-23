import styled from "styled-components";
import ParkingListItem from "../components/ParkingListItem";

const ParkingList = () => {
  return (
    <ParkingListWrapper>
      <ParkingListContainer>
        <ParkingListItem
          title={"대림대학교 전산관 주차장 실시간"}
          link={"/parkingSlot"}
        />
        <ParkingListItem
          title={"모형 주차장 실시간"}
          link={"/testParkingSlot"}
        />
      </ParkingListContainer>
    </ParkingListWrapper>
  );
};

const ParkingListWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ParkingListContainer = styled.div`
  width: 80%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export default ParkingList;
