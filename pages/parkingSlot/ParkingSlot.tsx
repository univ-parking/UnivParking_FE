import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import ParkingAreaInfo from "./ParkingAreaInfo";
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
  const initArray = [false, false, false, false, false, false];
  const [parkingData, setParkingData] = useState<Data>();
  const [parkingDataArray, setParkingDataArray] =
    useState<boolean[]>(initArray);
  const [canParking, setCanParking] = useState<number>();
  const [canDisableParking, setCanDisableParking] = useState<number>(1);

  const fetchData = () => {
    axios
      .get("http://univ-parking.xyz/api/v1/parking/2/?format=json")
      .then((response) => {
        const newArray = response.data.data.array;
        if (JSON.stringify(newArray) !== JSON.stringify(parkingDataArray)) {
          console.log(`${newArray} 비교 ${parkingDataArray}`);
          setParkingDataArray(response.data.data.array);
        }
        setParkingData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // 초기 데이터 로딩
    fetchData();

    // 3초마다 데이터 갱신
    const intervalId = setInterval(fetchData, 3000);

    // 컴포넌트가 언마운트될 때 clearInterval을 호출하여 인터벌 정리
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
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
        <Header title={"전산관 주차장"} prev={true} link={"/parkingList"} />
        <ParkingAreaInfo
          count={parkingData?.count}
          disable={1}
          disableCanParking={canDisableParking}
          canParking={canParking}
        />
      </HeaderContainer>

      <SlotContainer>
        <ParkingCanvas array={parkingDataArray} />
      </SlotContainer>
    </ParkingSlotContainer>
  );
};

const ParkingSlotContainer = styled.div`
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const HeaderContainer = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SlotContainer = styled.div`
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ParkingSlot;
