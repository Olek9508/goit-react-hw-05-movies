import styled from "@emotion/styled";
import {BsGithub} from 'react-icons/bs';

export const FooterBox = styled.footer`
  display: flex;
`;

export const FooterData = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
padding: 15px;
margin-top: 20px;
margin-bottom: 20px;
margin-left: auto;
margin-right: auto;
border-radius: 10px;
text-align: center;
color: greenyellow;
box-shadow: 0 0 10px 1px greenyellow;
`;

export const FooterIcon = styled(BsGithub)`
  margin-left: 10px;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0 0 13px 3px greenyellow;
    transform: scale(1.3);
  }
`;