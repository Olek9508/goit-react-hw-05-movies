import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const MovieCardBox = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px orange;
`;

export const MovieInfo = styled.div`
  display: block;
  padding: 15px;
  margin-left: 20px;
  color: gray;
`;

export const MovieContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 0;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px 1px orange;
  background-color: transperant;
  );
`;

export const MovieLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: greenyellow;
  font-size: 25px;
  font-weight: 500;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px greenyellow;
  &.active {
    color: orange;
    box-shadow: 0 0 13px 3px orange;
  }
  : hover{
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: orange;
    transform: scale(1.1);
    box-shadow: 0 0 10px 1px orange;
  }
`;

export const MovieTitleH2 = styled.h2`
  color: orange;
`;

export const MovieTitleH3 = styled.h2`
  color: orange;
`;


  // background-image: repeating-linear-gradient(
  //   -45deg,
  //   #7bd4eb,
  //   #7bd4eb 15px,
  //   #fcfcfc 15px,
  //   #fcfcfc 30px