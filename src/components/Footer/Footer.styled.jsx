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
  transition: transform var(--animation-duration) var(--timing-function);
  &:hover {
    box-shadow: 0 0 13px 3px #de14b9;
    transform: scale(1.3);
  }
`;