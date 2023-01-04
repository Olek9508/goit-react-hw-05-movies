import styled from "@emotion/styled";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: black;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px greenyellow;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 5px;
  font-weight: 700;
  &:hover {
    box-shadow: 0 0 13px 3px orange;
  }
`;

export const BtnLabel = styled.span`
  margin-left: 10px;
  color: greenyellow;
  font-weight: 700;
  padding: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
    color: orange;
  }
`;