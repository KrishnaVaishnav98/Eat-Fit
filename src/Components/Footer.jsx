import {
    Box,
    Center,
    Grid,
    Heading,
    HStack,
    Image,
    ListItem,
    Spacer,
    Text,
    UnorderedList,
    VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import logo from "../Images/footer_logo.png";
import { SlSocialFacebook } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(() => {
        Aos.init();
    }, []);


    return (
        // <Center bgColor={"black"} >
        <Box id="about" bgColor={"black"} color="white" p={{ base: "10px", sm: "20px", md: "30px", lg: "50px", xl: "50px" }} display={{ base: 'block', sm: 'block', md: 'flex', lg: 'flex', xl: 'flex' }} justifyContent={'space-between'} borderRadius={'15px'} >
            <VStack margin={'auto'} p={'auto'} alignItems={{ base: "center", sm: "center", md: "center", lg: "flex-start", xl: "flex-start" }} >
                <Box w="80px" >
                    {/* <Image src={logo} alt="logo" /> */}
                    <img className="rounded" src={logo} alt="Eat Fit" />
                </Box>
                <Center mt="50px">
                    <HStack fontSize={"30px"} spacing={"30px"}>
                        <SlSocialFacebook />
                        <FaInstagram />
                        <CiYoutube />
                        <CiLinkedin />
                    </HStack>
                </Center>
            </VStack>

            <Box display={'flex'} gap={'20px'} margin={'auto'} padding={'auto'} width={{ base: '90%', sm: '90%', md: '50%', lg: '50%', xl: '50%' }} mt={{ base: '10px', sm: '50px', md: '50px', lg: '0px', xl: '0px' }} >
                <VStack
                    align={"left"}
                    fontSize={{
                        base: "10px",
                        sm: "10px",
                        md: "12px",
                        lg: "14px",
                        xl: "14px",
                    }}
                    spacing="20px"
                    m="auto"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    mt={{ base: '10px', sm: '50px', md: '50px', lg: '0px', xl: '0px' }}
                >
                    <Heading size="sm" >Help & Support</Heading>

                    <UnorderedList listStyleType={"none"} spacing="18px" >
                        <ListItem>Terms & service</ListItem>
                        <ListItem>Privacy Policy</ListItem>
                        <ListItem>FAQ</ListItem>
                    </UnorderedList>
                </VStack>

                <VStack
                    align={"left"}
                    fontSize={{
                        base: "10px",
                        sm: "10px",
                        md: "12px",
                        lg: "14px",
                        xl: "14px",
                    }}
                    spacing="20px"
                    m="auto"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    mt={{ base: '10px', sm: '50px', md: '50px', lg: '0px', xl: '0px' }}
                >
                    <Heading size="sm">Customer care</Heading>
                    <UnorderedList listStyleType={"none"} spacing="18px">
                        <ListItem>Mo: 987654321</ListItem>
                        <ListItem>eatfit@email.com</ListItem>
                        <ListItem>eatfit@linkedIn</ListItem>
                    </UnorderedList>
                </VStack>
            </Box>
        </Box>

    )
};

export default Footer;
