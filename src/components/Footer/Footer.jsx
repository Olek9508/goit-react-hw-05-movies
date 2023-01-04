import {
  FooterBox,
  FooterData,
  FooterIcon,
} from './Footer.styled';

export default function Footer() {
  return (
    <FooterBox>
      <FooterData>
          Developed by
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/Olek9508'
          >
            <FooterIcon />
          </a>
      </FooterData>
    </FooterBox>
  )
}