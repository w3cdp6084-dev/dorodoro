import { Box } from '@chakra-ui/react';


export const Footer = () => {
 
    return (
      <>
        <Box>
            <ul>
                <li>
                    <a href="">
                        <img src={`${process.env.PUBLIC_URL}/twitter.svg`} alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={`${process.env.PUBLIC_URL}/facebook.svg`} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={`${process.env.PUBLIC_URL}/dribbble.svg`} alt="Dribbble" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={`${process.env.PUBLIC_URL}/github.svg`} alt="Github" />
                    </a>
                </li>
            </ul>
        </Box>
      </>
    );

};
export default Footer;