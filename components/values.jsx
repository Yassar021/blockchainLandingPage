import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react"

const Values = () => {
    return(
        <Box>
            <Stack direction={{base:'column',md:'column',lg:'row',xl:'row','2xl':'row'}} textAlign={{base:'center',md:'center',lg:'left',xl:'left','2xl':'left'}} spacing='30px' pb='200px'>
                <Box>
                    <Image src='/values.png' w='100%' h={{base:'256px',md:'331px',lg:'331px',xl:'331px','2xl':'331px'}} alt='about' />
                </Box>
                <Box>
                    <Text fontSize='52px' fontWeight='800' color='#2B2B2B'>Values</Text>
                    <Text my='35px' fontSize='20px' fontWeight='400' color='#5B5B5B'>anftw is a hallmark. The team members may change, but the quality of our project execution will not.
                    An outstanding team can build a product in any industry. Don’t be intimidated by incumbents.</Text>
                    <Button
                        size='md'
                        height='54px'
                        width='161px'
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
                        Read More
                    </Button>                     
                </Box>
            </Stack>
        </Box>
    )
}

export default Values