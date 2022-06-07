import { Box, Button, Flex, HStack, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import CardClients from "./cardClients"

const Hero = () => {
    return(
        <Box pt='56px' pb='139px'>
            <Flex d='row' justify='space-between'>
                <HStack d='row' justifyContent='center' spacing={'21px'}>
                    <Stack>
                        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M76 37.9992C76 58.9863 58.9875 76 37.9992 76C17.0125 76 0 58.9863 0 37.9992C0 17.0153 17.0125 1.12981e-05 37.9992 1.12981e-05C48.0593 -0.00775823 57.7146 3.992 64.8702 11.1306C71.9843 18.2273 75.9923 27.9019 76 37.9992Z" fill="#FF6600"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M36.9204 61.286C28.0024 60.8633 20.1095 55.3889 16.5894 47.1859C13.0693 38.9812 14.5469 29.4636 20.3819 22.7367C20.9514 22.0825 21.9395 22.0172 22.5891 22.5937C22.6091 22.6108 22.6291 22.6295 22.6476 22.6481L26.6848 26.6852C27.2466 27.2384 27.2928 28.1303 26.7926 28.7394C22.7122 33.6638 22.3459 40.7185 25.8952 46.0468C29.4446 51.383 36.0692 53.7666 42.2044 51.9128C48.338 50.0606 52.5369 44.4075 52.5384 37.9992C52.5292 34.5355 51.2701 31.1931 48.9968 28.598C48.4627 28.0122 48.4627 27.1109 48.9968 26.5251L53.1218 22.4352C53.7082 21.809 54.6871 21.781 55.3089 22.3731C55.3305 22.3933 55.3505 22.4135 55.3705 22.4352C61.6503 29.3998 63.1203 39.5142 59.0861 48.0063C55.0534 56.4984 46.3109 61.7351 36.9204 61.2844V61.286Z" fill="white"/>
                        </svg>
                    </Stack>
                    <Text fontSize={'30px'} fontWeight={'700'}>Excursy</Text>
                </HStack>

                <HStack spacing='48px'>
                    <Link><Text fontSize={'18px'} fontWeight={'700'} color='#FF6600'>Home</Text></Link>
                    <Link><Text fontSize={'18px'} fontWeight={'400'} color='#2B2B2B'>About Us</Text></Link>
                    <Link><Text fontSize={'18px'} fontWeight={'400'} color='#2B2B2B'>Our interests</Text></Link>
                    <Link><Text fontSize={'18px'} fontWeight={'400'} color='#2B2B2B'>Values</Text></Link>
                    <Link><Text fontSize={'18px'} fontWeight={'400'} color='#2B2B2B'>Current Projects</Text></Link>
                </HStack>

                <Button
                    size='md'
                    height='55px'
                    width='146px'
                    border='2px'
                    borderColor='#FF6600'
                    bgColor='#FF6600'
                    color='#fff'
                    _hover={{ bg: '#FF6600' }}
                    _active={{
                        bg: '#FF6600',
                        transform: 'scale(0.98)',
                        borderColor: '#FF6600',
                    }}
                    >
                    Sign Up
                </Button>
            </Flex>
            <Stack direction={'row'} spacing='90px' mt={'127px'}>
                <Box>
                    <Text fontSize={'56px'} fontWeight={'800px'} color='#2B2B2B'>Let’s take a 
                    tour to Blockchain
                    Technology</Text>
                    <Text mt='36px' mb='74px' fontSize={'18px'} color='#5B5B5B'>We are highly focused by blockchain technology that will lead positively to the future web.</Text>
                    <HStack spacing={'32px'}>
                        <Button
                            rightIcon={<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.52011 0L0.110107 1.41L4.69011 6L0.110107 10.59L1.52011 12L7.52011 6L1.52011 0Z" fill="white"/>
                            </svg>
                            }
                            size='md'
                            height='64px'
                            width='208px'
                            border='2px'
                            borderColor='#FF6600'
                            bgColor='#FF6600'
                            color='#fff'
                            _hover={{ bg: '#FF6600' }}
                            _active={{
                                bg: '#FF6600',
                                transform: 'scale(0.98)',
                                borderColor: '#bec3c9',
                            }}
                            >
                            Get Started
                        </Button>
                        <Button
                            size='md'
                            height='64px'
                            width='208px'
                            border='2px'
                            borderColor='#FF6600'
                            bgColor='#fff'
                            color='#2B2B2B'
                            _hover={{ bg: '#fff' }}
                            _active={{
                                bg: '#fff',
                                transform: 'scale(0.98)',
                                borderColor: '#FF6600',
                            }}
                            >
                            Learn More
                        </Button>
                    </HStack>
                </Box>
                <Box>
                    <Image src="/a-hero.png" w='100%' h='390px' alt='' />
                </Box>
            </Stack>
            
            <SimpleGrid columns={4} spacing={'96px'} mt='159px' mx='auto'>
                <CardClients image={'/a-client.png'} />
                <CardClients image={'/b-client.png'} />
                <CardClients image={'/c-client.png'} />
                <CardClients image={'/d-client.png'} />
            </SimpleGrid>
        </Box>
    )
}

export default Hero