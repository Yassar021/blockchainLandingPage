import { Box, Container, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react"

const Footer = () => {
    return(
        <Box h='100%' w='100%' bgImage="/bg-footer.png" backgroundRepeat='no-repeat' backgroundSize='cover'>
            <Flex direction='column' px='120px' py='40px' alignItems='center'>
                <HStack spacing='24px'>
                    <Stack>
                        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M76 37.9992C76 58.9863 58.9875 76 37.9992 76C17.0125 76 0 58.9863 0 37.9992C0 17.0153 17.0125 1.12981e-05 37.9992 1.12981e-05C48.0593 -0.00775823 57.7146 3.992 64.8702 11.1306C71.9843 18.2273 75.9923 27.9019 76 37.9992Z" fill="#FF6600"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M36.9204 61.286C28.0024 60.8633 20.1095 55.3889 16.5894 47.1859C13.0693 38.9812 14.5469 29.4636 20.3819 22.7367C20.9514 22.0825 21.9395 22.0172 22.5891 22.5937C22.6091 22.6108 22.6291 22.6295 22.6476 22.6481L26.6848 26.6852C27.2466 27.2384 27.2928 28.1303 26.7926 28.7394C22.7122 33.6638 22.3459 40.7185 25.8952 46.0468C29.4446 51.383 36.0692 53.7666 42.2044 51.9128C48.338 50.0606 52.5369 44.4075 52.5384 37.9992C52.5292 34.5355 51.2701 31.1931 48.9968 28.598C48.4627 28.0122 48.4627 27.1109 48.9968 26.5251L53.1218 22.4352C53.7082 21.809 54.6871 21.781 55.3089 22.3731C55.3305 22.3933 55.3505 22.4135 55.3705 22.4352C61.6503 29.3998 63.1203 39.5142 59.0861 48.0063C55.0534 56.4984 46.3109 61.7351 36.9204 61.2844V61.286Z" fill="white"/>
                        </svg>
                    </Stack>
                    <Text fontSize={'30px'} fontWeight={'700'} color='#fff'>Excursy</Text>
                </HStack>
                <Stack my='42px' direction='row' spacing='24px'>
                    <Stack>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27 3H22.5C20.5109 3 18.6032 3.79018 17.1967 5.1967C15.7902 6.60322 15 8.51088 15 10.5V15H10.5V21H15V33H21V21H25.5L27 15H21V10.5C21 10.1022 21.158 9.72064 21.4393 9.43934C21.7206 9.15804 22.1022 9 22.5 9H27V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Stack>
                    <Stack>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 16.5V10.5M31.5 3H4.5V27H12V33L18 27H25.5L31.5 21V3ZM16.5 16.5V10.5V16.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Stack>
                    <Stack>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12C26.3869 12 28.6761 12.9482 30.364 14.636C32.0518 16.3239 33 18.6131 33 21V31.5H27V21C27 20.2044 26.6839 19.4413 26.1213 18.8787C25.5587 18.3161 24.7956 18 24 18C23.2044 18 22.4413 18.3161 21.8787 18.8787C21.3161 19.4413 21 20.2044 21 21V31.5H15V21C15 18.6131 15.9482 16.3239 17.636 14.636C19.3239 12.9482 21.6131 12 24 12V12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 13.5H3V31.5H9V13.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Stack>
                    <Stack>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 33.0006V27.1956C24.0563 26.4804 23.9596 25.7613 23.7165 25.0863C23.4734 24.4113 23.0894 23.7958 22.59 23.2806C27.3 22.7556 32.25 20.9706 32.25 12.7806C32.2496 10.6864 31.444 8.67244 30 7.15564C30.6838 5.3234 30.6354 3.29816 29.865 1.50064C29.865 1.50064 28.095 0.975639 24 3.72064C20.562 2.78887 16.938 2.78887 13.5 3.72064C9.405 0.975639 7.635 1.50064 7.635 1.50064C6.86456 3.29816 6.81622 5.3234 7.5 7.15564C6.04519 8.68369 5.23878 10.7158 5.25 12.8256C5.25 20.9556 10.2 22.7406 14.91 23.3256C14.4165 23.8356 14.0359 24.4437 13.793 25.1105C13.55 25.7773 13.4502 26.4877 13.5 27.1956V33.0006M13.5 28.5006C6 30.7506 6 24.7506 3 24.0006L13.5 28.5006Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Stack>
                </Stack>

                <Stack direction='row' spacing='40px'>
                    <Text fontSize='18px' fontWeight='500' color='#fff'>Home</Text>
                    <Text fontSize='18px' fontWeight='500' color='#fff'>About Us</Text>
                    <Text fontSize='18px' fontWeight='500' color='#fff'>Our interests</Text>
                    <Text fontSize='18px' fontWeight='500' color='#fff'>Values</Text>
                    <Text fontSize='18px' fontWeight='500' color='#fff'>Current Projects</Text>
                </Stack>
            </Flex>
        </Box>
    )
}

export default Footer