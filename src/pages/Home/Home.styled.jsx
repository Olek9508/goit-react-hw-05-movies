import styled from "@emotion/styled";

export const List = styled.ul`
  display: grid;
  flex-basis: calc((100% - 8 * 15px) / 3);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: center;
flex-direction: column;
padding: 5px;
border-radius: 10px;
box-shadow: 0 0 10px 1px greenyellow;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
  box-shadow: 0 0 13px 3px orange;
  transform: scale(1.03);
}
`;

export const Text = styled.p`
display: flex;
padding: 5px;
color: greenyellow;
: hover{
  color: orange;
}
`;