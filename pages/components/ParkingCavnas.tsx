import { useState, useRef, useEffect } from "react";
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

const carPosition: IsParking[] = [
  {
    id: 0,
    carX: 132,
    carY: 155,
    vertical: true,
    disable: false,
  },
  {
    id: 1,
    carX: 190,
    carY: 155,
    vertical: true,
    disable: false,
  },
  {
    id: 2,
    carX: 255,
    carY: 225,
    vertical: false,
    disable: false,
  },
  {
    id: 3,
    carX: 255,
    carY: 282,
    vertical: false,
    disable: false,
  },
  {
    id: 4,
    carX: 255,
    carY: 342,
    vertical: false,
    disable: false,
  },
  {
    id: 5,
    carX: 255,
    carY: 412,
    vertical: false,
    disable: true,
  },
];

const ParkingCanvas = ({ array }: ParkingData) => {
  const parkingSlot = useRef<HTMLCanvasElement>(null);
  const [isParking, setIsParking] = useState<IsParking[]>();

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
    const canvas = parkingSlot.current;
    const context = canvas?.getContext("2d");

    //초기 주차장 크기
    const initialWidth = 397.5;
    const initialHeight = 645;

    //비율 계산
    const aspectRatio = initialWidth / initialHeight;

    const resizeCanvas = () => {
      const { clientWidth, clientHeight } = document.documentElement;

      if (clientWidth / clientHeight > aspectRatio && canvas) {
        canvas.width = clientHeight * aspectRatio;
        canvas.height = clientHeight;
      } else if (canvas && clientWidth / clientHeight < aspectRatio) {
        canvas.width = clientWidth;
        canvas.height = clientWidth / aspectRatio;
      }

      //Cavas에 그리기
      if (canvas) {
        context?.fillRect(0, 0, canvas.width, canvas.height);
      }

      const parkingSlotImage = new Image();
      parkingSlotImage.src = "/images/parking_slot.svg";

      const carImage = new Image();
      carImage.src = "/images/car.svg";

      const carVerticalImage = new Image();
      carVerticalImage.src = "/images/car_vertical.svg";

      parkingSlotImage.onload = () => {
        if (canvas) {
          context?.drawImage(
            parkingSlotImage,
            0,
            0,
            canvas.width,
            canvas.height
          );
        }
      };

      carImage.onload = () => {
        isParking?.forEach((car) => {
          if (canvas) {
            const transformedX = (car.carX / initialWidth) * canvas.width;
            const transformedY = (car.carY / initialHeight) * canvas.height;
            const transformedImageWidth = (46 / initialWidth) * canvas.width;
            const transformedImageHeight = (96 / initialHeight) * canvas.height;
            if (car.vertical) {
              context?.drawImage(
                carVerticalImage,
                transformedX,
                transformedY,
                transformedImageWidth,
                transformedImageHeight
              );
            } else {
              context?.drawImage(
                carImage,
                transformedX,
                transformedY,
                transformedImageHeight,
                transformedImageWidth
              );
            }
          }
        });
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
  }, [parkingSlot, array]);

  return <canvas ref={parkingSlot} />;
};

export default ParkingCanvas;
