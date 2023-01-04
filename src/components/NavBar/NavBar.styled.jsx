import styled from "@emotion/styled";
import {NavLink} from 'react-router-dom';

export const LinkEl = styled(NavLink)`
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
`;