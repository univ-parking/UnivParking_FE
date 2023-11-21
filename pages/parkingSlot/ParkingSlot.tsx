import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import ParkingAreaInfo from "./ParkingAreaInfo";
import Image from "next/image";
import ParkingCanvas from "../components/ParkingCavnas";

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

const ParkingSlot = () => {
  const [parkingData, setParkingData] = useState<Data>();
  const [canParking, setCanParking] = useState<number>();
  const [canDisableParking, setCanDisableParking] = useState<number>(1);

  useEffect(() => {
    axios
      .get("http://univ-parking.xyz/api/v1/parking/2/?format=json")
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

    if (parkingData?.array[5]) {
      setCanDisableParking(0);
    } else {
      setCanDisableParking(1);
    }
  }, [parkingData]);

  return (
    <ParkingSlotContainer>
      <HeaderContainer>
        <Header title={"전산관 주차장"} prev={false} />
        <ParkingAreaInfo
          count={parkingData?.count}
          disable={1}
          disableCanParking={canDisableParking}
          canParking={canParking}
        />
      </HeaderContainer>

      <SlotContainer>
        <ParkingCanvas array={parkingData?.array} />
      </SlotContainer>
    </ParkingSlotContainer>
  );
};

const ParkingSlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const HeaderContainer = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SlotContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ParkingSlot;
