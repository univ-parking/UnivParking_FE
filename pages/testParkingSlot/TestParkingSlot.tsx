import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import ParkingAreaInfo from "../parkingSlot/ParkingAreaInfo";
import TestParkingCanvas from "../components/TestParkingCanvas";
import isEqual from "lodash/isEqual";

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
  const initArray = Array(23).fill(false);
  const [parkingData, setParkingData] = useState<Data>();
  const [parkingDataArray, setParkingDataArray] =
    useState<boolean[]>(initArray);
  const [canParking, setCanParking] = useState<number>();
  const [canDisableParking, setCanDisableParking] = useState<number>(2);

  const fetchData = () => {
    axios
      .get("http://univ-parking.xyz/api/v1/parking/1/?format=json")
      .then((response) => {
        setParkingData(response.data.data);
        setParkingDataArray(response.data.data.array);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // // 초기 데이터 로딩
    fetchData();

    // // 3초마다 데이터 갱신
    // const intervalId = setInterval(fetchData, 1000);

    // // 컴포넌트가 언마운트될 때 clearInterval을 호출하여 인터벌 정리
    // return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
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

  function refreshPage() {
    window.location.reload();
  }

  return (
    <ParkingSlotContainer>
      <HeaderContainer>
        <Header title={"모형 주차장"} prev={true} link={"/parkingList"} />
        <button type="button" onClick={refreshPage}>
          Close
        </button>
        <ParkingAreaInfo
          count={parkingData?.count}
          disable={2}
          disableCanParking={canDisableParking}
          canParking={canParking}
        />
      </HeaderContainer>

      <SlotContainer>
        <TestParkingCanvas array={parkingDataArray} />
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
