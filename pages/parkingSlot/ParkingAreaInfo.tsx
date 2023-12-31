import styled from "styled-components";

interface ParkingArea {
  count: number | undefined;
  disable: number;
  disableCanParking: number;
  canParking: number | undefined;
}

const ParkingAreaInfo = ({
  count,
  disable,
  disableCanParking,
  canParking,
}: ParkingArea) => {
  return (
    <ParkingAreaInfoContainer>
      <AllParkingArea>
        <Title>
          <p>전체 주차 공간</p>
        </Title>
        <AllCount>{count}</AllCount>
      </AllParkingArea>
      <AllParkingArea>
        <Title>
          <p>현재 주차 가능</p>
        </Title>

        <CountArea>
          <Count>
            <p>{disableCanParking}</p>
          </Count>
          <Count>
            <p>{canParking && canParking - disableCanParking}</p>
          </Count>
        </CountArea>
      </AllParkingArea>
    </ParkingAreaInfoContainer>
  );
};

const ParkingAreaInfoContainer = styled.div`
  width: 80%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const AllParkingArea = styled.div`
  width: 35vw;
  height: 7vh;
  border-radius: 10px;
  border: 1px solid black;
`;

const Title = styled.div`
  font-size: 1rem;
  height: 1.5rem;
  padding: 0.2rem;
  text-align: center;
  border-bottom: 1px solid black;
`;

const AllCount = styled.p`
  font-size: 2rem;
  text-align: center;
`;

const CountArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Count = styled.div`
  width: 50%;
  height: 4.3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: "#92ed9b";
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  p {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export default ParkingAreaInfo;
