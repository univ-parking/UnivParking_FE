import styled from "styled-components";

interface Props {
  title: string;
  value: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuListItem = ({ title, value, setModalOpen }: Props) => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setModalOpen(true);
  };

  return (
    <MenuListItemContainer value={value} onClick={onClickHandler}>
      <p>{title}</p>
    </MenuListItemContainer>
  );
};

const MenuListItemContainer = styled.button`
  width: 6rem;
  height: 2.2rem;
  background-color: #e0e0e0;
  border: none;
  border-radius: 0.4rem;
  margin-left: 5vw;
  box-shadow: 0px 1px 1px black;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 0.8rem;
    font-weight: 700;
  }
`;

export default MenuListItem;
