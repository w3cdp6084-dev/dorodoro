import { Box } from '@chakra-ui/react';
import './Footer.scss';

export const Footer = () => {
 
    return (
      <>
      <footer>
        <Box className='FooterListBox'>
            <ul>
                <li className='FooterList'>
                    <a href="https://twitter.com/w3cdp6084w3cdp" target="_blank">
                        <img src={`${process.env.PUBLIC_URL}/twitter.svg`} alt="Twitter" />
                    </a>
                </li>
                <li className='FooterList'>
                    <a href="https://www.facebook.com/w3cdpmori" target="_blank">
                        <img src={`${process.env.PUBLIC_URL}/facebook.svg`} alt="Facebook" />
                    </a>
                </li>
                <li className='FooterList'>
                    <a href="https://dribbble.com/w3cdp6084" target="_blank">
                        <img src={`${process.env.PUBLIC_URL}/dribbble.svg`} alt="Dribbble" />
                    </a>
                </li>
                <li className='FooterList'>
                    <a href="https://github.com/w3cdp6084-dev" target="_blank">
                        <img src={`${process.env.PUBLIC_URL}/github.svg`} alt="Github" />
                    </a>
                </li>
            </ul>
        </Box>
        <p className='FooterText'>©konekone blog.</p>
        </footer>
      </>
    );

};
export default Footer;