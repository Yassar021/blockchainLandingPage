import { Box, Flex, Image, Link, Stack, Text } from "@chakra-ui/react"

const Projects = () => {
    return(
        <Box pb='200px'>
            <Flex direction='column' textAlign='center' pb='132px'>        
                <Text fontSize={'52px'} fontWeight={'800'} color='#2B2B2B'>Current Projects</Text>
            </Flex>

            <Stack direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} spacing='60px'>
                <Box>
                    <Image src='/project1.png' w='100%' h='378px' alt='' />
                    <Text my='24px' fontSize='28px' fontWeight='600'>Certified Great<br /> Expectations Lover</Text>
                    <Text fontSize='20px' fontWeight='600' color='#5B5B5B'>Certified Great Expectations Lover - To add value to <Link href='' color="#FF6600">Read more.</Link></Text>
                </Box>
                <Box>
                    <Image src='/project2.png' w='100%' h='378px' alt='' />
                    <Text my='24px' fontSize='28px' fontWeight='600'>Certified Great<br /> BlockSpace - A solar System</Text>
                    <Text fontSize='20px' fontWeight='600' color='#5B5B5B'>BlockSpace - We built the first ever accurate model of <Link href='' color="#FF6600">Read more.</Link></Text>
                </Box>
                <Box>
                    <Image src='/project3.png' w='100%' h='378px' alt='' />
                    <Text my='24px' fontSize='28px' fontWeight='600'>Certified Great<br /> 0xProxy - A web 3.0 Website</Text>
                    <Text fontSize='20px' fontWeight='600' color='#5B5B5B'>BlockSpace - This project was a collaborative exercise. <Link href='' color="#FF6600">Read more.</Link></Text>
                </Box>
            </Stack>
        </Box>
    )
}

export default Projects