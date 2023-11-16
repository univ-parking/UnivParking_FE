import React from "react";
import styled from "styled-components";

interface Data {
  title?: string;
  nameTag?: React.ReactNode;
  contents?: React.ReactNode;
}
interface Props {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: Data;
}

const AboutTeamModal = ({ setModalOpen, data }: Props) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContainer>
      {data?.title}
      <div>{data?.contents}</div>
      <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 90%;
  height: 70%;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: unset;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  width: 2vw;
  height: 3vh;
  border: none;
  border-radius: 5px;

  font-size: 1em;
  font-weight: 900;

  :hover {
    background: #df3c3c;
    color: #fff;
  }
`;

export default AboutTeamModal;
