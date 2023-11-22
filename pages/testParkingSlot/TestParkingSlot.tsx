import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import ParkingAreaInfo from "../parkingSlot/ParkingAreaInfo";
import TestParkingCanvas from "../components/TestParkingCanvas";

interface Detail {
  id: number;
  AN: number;
  PC: boolean;
  PT: number;
  created_data: Date;
  updated_Data: Date;
  type: number;
}
interface Data {
  count: number;
  array: boolean[];
  detail: Detail[];
}

const TestParkingSlot = () => {
  const [parkingData, setParkingData] = useState<Data>();
  const [canParking, setCanParking] = useState<number>();
  const [canDisableParking, setCanDisableParking] = useState<number>(2);

  useEffect(() => {
    axios
      .get("http://univ-parking.xyz/api/v1/parking/1/?format=json")
      .then((response) => {
        setParkingData(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    console.log(`제발 좀!! ${parkingData?.array}`);
    setCanParking(
      parkingData?.array.filter((item) => {
        return !item;
      }).length
    );

    if (parkingData?.array[16] && parkingData?.array[17]) {
      setCanDisableParking(0);
    } else if (parkingData?.array[16] || parkingData?.array[17]) {
      setCanDisableParking(1);
    } else {
      setCanDisableParking(2);
    }
  }, [parkingData]);

  return (
    <ParkingSlotContainer>
      <HeaderContainer>
        <Header title={"모형 주차장"} prev={true} link={"/start"} />
        <ParkingAreaInfo
          count={parkingData?.count}
          disable={2}
          disableCanParking={canDisableParking}
          canParking={canParking}
        />
      </HeaderContainer>

      <SlotContainer>
        <TestParkingCanvas array={parkingData?.array} />
      </SlotContainer>
    </ParkingSlotContainer>
  );
};

const ParkingSlotContainer = styled.div`
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const HeaderContainer = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SlotContainer = styled.div`
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TestParkingSlot;
