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
    if (!parkingSlot) return;
    const currentCanvas = parkingSlot.current?.getContext("2d");
    currentCanvas?.fillRect(0, 0, 397.5, 645);
    const parkingSlotImage = new Image();
    parkingSlotImage.src = "/images/parking_slot.svg";

    const carImage = new Image();
    carImage.src = "/images/car.svg";

    const carVerticalImage = new Image();
    carVerticalImage.src = "/images/car_vertical.svg";

    parkingSlotImage.onload = () => {
      currentCanvas?.drawImage(parkingSlotImage, 0, 0, 397.5, 645);
    };

    carImage.onload = () => {
      isParking?.forEach((car) => {
        if (car.vertical) {
          currentCanvas?.drawImage(
            carVerticalImage,
            car.carX,
            car.carY,
            46,
            96
          );
        } else {
          currentCanvas?.drawImage(carImage, car.carX, car.carY, 96, 46);
        }
      });
    };
  }, [parkingSlot, array]);

  return <canvas ref={parkingSlot} width={397.5} height={645} />;
};

export default ParkingCanvas;
