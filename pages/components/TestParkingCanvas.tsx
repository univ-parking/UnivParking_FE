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
    carX: 18,
    carY: 496,
    vertical: false,
    disable: false,
  },
  {
    id: 1,
    carX: 18,
    carY: 440,
    vertical: false,
    disable: false,
  },
  {
    id: 2,
    carX: 18,
    carY: 384,
    vertical: false,
    disable: false,
  },
  {
    id: 3,
    carX: 18,
    carY: 328,
    vertical: false,
    disable: false,
  },
  {
    id: 4,
    carX: 18,
    carY: 272,
    vertical: false,
    disable: false,
  },
  {
    id: 5,
    carX: 18,
    carY: 216,
    vertical: false,
    disable: false,
  },
  {
    id: 6,
    carX: 18,
    carY: 155,
    vertical: false,
    disable: false,
  },
  {
    id: 7,
    carX: 18,
    carY: 99,
    vertical: false,
    disable: true,
  },
  {
    id: 8,
    carX: 138,
    carY: 496,
    vertical: false,
    disable: true,
  },
  {
    id: 9,
    carX: 138,
    carY: 440,
    vertical: false,
    disable: true,
  },
  {
    id: 10,
    carX: 138,
    carY: 384,
    vertical: false,
    disable: true,
  },
  {
    id: 11,
    carX: 138,
    carY: 328,
    vertical: false,
    disable: true,
  },
  {
    id: 12,
    carX: 138,
    carY: 272,
    vertical: false,
    disable: true,
  },
  {
    id: 13,
    carX: 138,
    carY: 216,
    vertical: false,
    disable: true,
  },
  {
    id: 14,
    carX: 138,
    carY: 155,
    vertical: false,
    disable: true,
  },
  {
    id: 15,
    carX: 138,
    carY: 99,
    vertical: false,
    disable: false,
  },
  {
    id: 16,
    carX: 270,
    carY: 485,
    vertical: false,
    disable: true,
  },
  {
    id: 17,
    carX: 270,
    carY: 400,
    vertical: false,
    disable: true,
  },
  {
    id: 18,
    carX: 270,
    carY: 328,
    vertical: false,
    disable: false,
  },
  {
    id: 19,
    carX: 270,
    carY: 270,
    vertical: false,
    disable: false,
  },
  {
    id: 20,
    carX: 270,
    carY: 212,
    vertical: false,
    disable: false,
  },
  {
    id: 21,
    carX: 270,
    carY: 155,
    vertical: false,
    disable: false,
  },
  {
    id: 22,
    carX: 270,
    carY: 95,
    vertical: false,
    disable: false,
  },
];

const TestParkingCanvas = ({ array }: ParkingData) => {
  const parkingSlot = useRef<HTMLCanvasElement>(null);
  const [isParking, setIsParking] = useState<IsParking[]>();
  const initialWidth = 414;
  const initialHeight = 645;

  //im

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
    const canvas = parkingSlot.current;
    const context = canvas?.getContext("2d");

    const parkingSlotImage = new Image();
    parkingSlotImage.src = "/images/testParkingSlot.svg";

    const carImage = new Image();
    carImage.src = "/images/car.svg";

    //초기 주차장 크기

    //비율 계산
    const aspectRatio = initialWidth / initialHeight;

    const resizeCanvas = () => {
      const { clientWidth, clientHeight } = document.documentElement;

      if (clientWidth / clientHeight > aspectRatio && canvas) {
        canvas.width = clientHeight * aspectRatio;
        canvas.height = clientHeight;
      } else if (clientWidth / clientHeight < aspectRatio && canvas) {
        canvas.width = clientWidth;
        canvas.height = clientWidth / aspectRatio;
      }

      // Canvas를 새로 그릴 때 기존의 내용을 지워줌
      if (canvas) {
        context?.clearRect(0, 0, canvas.width, canvas.height);
      }

      //Cavas에 그리기
      // context?.fillRect(0, 0, canvas?.width, canvas?.height);

      parkingSlotImage.onload = () => {
        if (canvas) {
          context?.drawImage(
            parkingSlotImage,
            0,
            0,
            canvas?.width,
            canvas?.height
          );
        }
      };

      //540 477 / 417 / 357 / 290 / 230 / 170 / 110 /

      carImage.onload = () => {
        isParking?.forEach((car) => {
          if (canvas) {
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
  }, [isParking]);

  return <canvas ref={parkingSlot} />;
};

export default TestParkingCanvas;
