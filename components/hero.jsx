import { useDisclosure, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Hide, HStack, Image, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react"
import CardClients from "./cardClients"
import React from "react"

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button 
            ref={btnRef} fontFamily='Poppins' bgColor='#fff' color='#fff' w='auto' h='48px' onClick={onOpen}>
            <Stack>
                <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="29" height="4" fill="#5B5B5B"/>
                    <rect y="20" width="29" height="4" fill="#5B5B5B"/>
                    <rect x="6" y="10" width="23" height="4" fill="#5B5B5B"/>
                    <rect y="10" width="4" height="4" fill="#FF6600"/>
                </svg>
            </Stack>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
  
            <DrawerBody>
                    <VStack spacing='48px'>
                        <Link><Text fontSize={'18px'} fontWeight={'700'} color='#FF6600'>Home</Text></Link>
                        <Link><Text fontSize={'18px'} fontWeight={'400'} color='#2B2B2B'>About Us</Text></Link>
                        <Link><Text fontSize={'18px'} fontWeight={'400'} color='#2B2B2B'>Our interests</Text></Link>
                        <Link><Text fontSize={'18px'} fontWeight={'400'} color='#2B2B2B'>Values</Text></Link>
                        <Link><Text fontSize={'18px'} fontWeight={'400'} color='#2B2B2B'>Current Projects</Text></Link>
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
                    </VStack>                    
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose} color='#fff' bgColor='#0E1035'>
                Close
              </Button>
              {/* <Button colorScheme='blue'>Save</Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }


const Hero = () => {
    return(
        <Box pt='56px' pb='139px'>
            <Flex d='row' justify='space-between'>
                <HStack d='row' justifyContent='center' spacing={'21px'}>
                    <Image src="/logo.png" w='100%' h={{base:'44px',md:'76px'}} alt="" />
                    <Text fontSize={'30px'} fontWeight={'700'}>Excursy</Text>
                </HStack>
                
                <Flex display={{base:'flex', md:'flex', lg:'none', xl:'none', '2xl': 'none'}}>
                    <DrawerExample />
                </Flex>

                <Hide below="lg">
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
                </Hide>
            </Flex>
            <Stack direction={{base:'column',md:'column',lg:'row',xl:'row','2xl':'row'}} textAlign={{base:'center',md:'center',lg:'left',xl:'left','2xl':'left'}} spacing='90px' mt={'127px'}>
                <Box>
                    <Text fontSize={{base:'34px',md:'56px',lg:'56px',xl:'56px','2xl':'56px'}} fontWeight={'800'} color='#2B2B2B'>Let’s take a 
                    tour to <Link href="" textDecoration={'none'} color='#FF6600'>Blockchain</Link><br/>
                    Technology </Text>
                    <Text mt='36px' mb='74px' fontSize={'18px'} color='#5B5B5B'>We are highly focused by blockchain technology that will lead positively to the future web.</Text>
                </Box>
                <Box>
                    <Image src="/a-hero.png" w='100%' h={{base:'164px',md:'390px'}} alt='' />
                </Box>
            </Stack>
            
            <HStack spacing={'32px'} mt={{base:'40px',md:'40px',lg:'0px',xl:'0px','2xl':'0px'}} ml={{base:'20px',md:'120px',lg:'0px',xl:'0px','2xl':'0px'}}>
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

            <SimpleGrid columns={4} spacing={{base:'10px',md:'96px',lg:'96px',xl:'96px','2xl':'96px'}} mt={{base:'74px',md:'159px'}} mx='auto'>
                <CardClients image={'/a-client.png'} />
                <CardClients image={'/b-client.png'} />
                <CardClients image={'/c-client.png'} />
                <CardClients image={'/d-client.png'} />
            </SimpleGrid>
        </Box>
    )
}

export default Hero