import styled from "styled-components";

interface Props {
  title: string;
  value: string;
}

const MenuListItem = ({ title, value }: Props) => {
  return (
    <MenuListItemContainer>
      <p>{title}</p>
    </MenuListItemContainer>
  );
};

const MenuListItemContainer = styled.div`
  width: 6rem;
  height: 2.2rem;
  background-color: #e0e0e0;
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
