import { useState, useRef, useEffect } from "react";
import { carPosition } from "../testParkingSlot/data";
import styled from "styled-components";

interface ParkingData {
  array: boolean[] | undefined;
}

interface IsParking {
  id: number;
  carX: number;
  carY: number;
  vertical: boolean;
  disable: boolean;
}

const TestParkingCanvasBackup = ({ array }: ParkingData) => {
  //canvas reference
  const parkingSlot = useRef<HTMLCanvasElement>(null);
  const [isParking, setIsParking] = useState<IsParking[]>();

  //cavnas context
  const canvas = parkingSlot.current;
  const context = canvas?.getContext("2d");

  //canvas initial size
  const initialWidth = 414;
  const initialHeight = 645;
  //ratio of canvas size
  const aspectRatio = initialWidth / initialHeight;

  //if onLoadImage
  const renderParkingSlot = () => {
    context?.drawImage(parkingSlotImage, 0, 0, canvas.width, canvas.height);
  };

  const renderCar = () => {
    isParking?.forEach((car) => {
      const transformedX = (car.carX / initialWidth) * canvas.width;
      const transformedY = (car.carY / initialHeight) * canvas.height;
      const transformedImageWidth = (46 / initialWidth) * canvas.width;
      const transformedImageHeight = (96 / initialHeight) * canvas.height;

      context?.drawImage(
        carImage,
        transformedX,
        transformedY,
        transformedImageHeight,
        transformedImageWidth
      );
    });
  };

  //image load
  const parkingSlotImage = new Image();
  parkingSlotImage.src = "/images/testParkingSlot.svg";

  const carImage = new Image();
  carImage.src = "/images/car.svg";

  const renderCanvas = () => {
    const resizeCanvas = () => {
      const { clientWidth, clientHeight } = document.documentElement;

      if (clientWidth / clientHeight > aspectRatio) {
        canvas.width = clientHeight * aspectRatio;
        canvas.height = clientHeight;
      } else {
        canvas.width = clientWidth;
        canvas.height = clientWidth / aspectRatio;
      }

      // Canvas를 새로 그릴 때 기존의 내용을 지워줌
      context?.clearRect(0, 0, canvas.width, canvas.height);

      //Cavas에 그리기
      context?.fillRect(0, 0, canvas?.width, canvas?.height);

      parkingSlotImage.onload = () => {
        context?.drawImage(
          parkingSlotImage,
          0,
          0,
          canvas?.width,
          canvas?.height
        );
      };
    };

    //초기 한 번 호출하여 Canvas를 현재 브라우저 크기로 설정
    resizeCanvas();

    //브라우저 크기가 변경될 때마다 Canvas 크기 조정
    window.addEventListener("resize", resizeCanvas);

    //컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  };

  //TODO 이미지 온로드 밖으로 빼기.

  useEffect(() => {
    let tmpArray: IsParking[] = [];

    array?.forEach((car, index) => {
      if (car) {
        tmpArray.push(
          carPosition[carPosition.findIndex((car) => car.id === index)]
        );
      }
    });

    setIsParking(tmpArray);
  }, [array]);

  useEffect(() => {
    renderCanvas();

    parkingSlotImage.onload = () => {
      renderParkingSlot();
    };

    carImage.onload = () => {
      renderCar();
    };
  }, [isParking]);

  return <canvas ref={parkingSlot} />;
};

export default TestParkingCanvasBackup;
