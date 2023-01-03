import {
  FooterBox,
  FooterData,
  FooterIcon,
} from './Footer.styled';

export default function Footer() {
  return (
    <FooterBox>
      <FooterData>
          © 2022 | All Rights Reserved | Developed by
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/'
          >
            <FooterIcon />
          </a>
      </FooterData>
    </FooterBox>
  )
}