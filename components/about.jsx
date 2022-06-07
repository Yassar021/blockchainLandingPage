const { Box, Flex, Image, Text, Stack, HStack, Divider, Center, SimpleGrid, Link } = require("@chakra-ui/react")

const About = () => {
    return(
        <Box>
            <Stack direction={{base:'column-reverse',md:'column',lg:'row',xl:'row','2xl':'row'}} spacing='30px' mt='139px' pb={{base:'160px',md:'140px',lg:'140px',xl:'140px','2xl':'140px'}}>
                <Box>
                    <Image mt={{base:'350px',md:'0px',lg:'0px',xl:'0px','2xl':'0px'}} src='a-about.png' w='100%' h={{base:'256px',md:'331px',lg:'331px',xl:'331px','2xl':'331px'}} alt='about' />
                </Box>
                <Box textAlign={{base:'center',md:'center',lg:'left',xl:'left','2xl':'left'}}>
                    <Text fontSize='52px' fontWeight='800' color='#2B2B2B'>About Us</Text>
                    <Text my='35px' fontSize='20px' fontWeight='400' color='#5B5B5B'>We generated names based on a multitude of factors and picked the one that 
                            resonated with us the most. Our founder first engaged with the blockchain in 2013</Text>
                    <Stack spacing='32px' direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} h='132px' w={{base:'100%',md:'639px',lg:'639px',xl:'639px','2xl':'639px'}} ml={{base:'0px',md:'66px',lg:'0px',xl:'0px','2xl':'0px'}}>
                        <Box p='8px'>
                            <Text mb='8px' fontSize={'24px'} fontWeight={'600'} color='#5B5B5B'>Project Done</Text>
                            <Text fontSize={'40px'} fontWeight={'700'} color='#FF6600'>600+</Text>
                        </Box> 
                        <Divider orientation={{base:'horizontal',md:'vertical'}} />
                        <Box p='8px'>
                            <Text mb='8px' fontSize={'24px'} fontWeight={'600'} color='#5B5B5B'>Happy Clients</Text>
                            <Text fontSize={'40px'} fontWeight={'700'} color='#FF6600'>1214+</Text>
                        </Box> 
                        <Divider orientation={{base:'horizontal',md:'vertical'}} />
                        <Box p='8px'>
                            <Text mb='8px' fontSize={'24px'} fontWeight={'600'} color='#5B5B5B'>Employee</Text>
                            <Text  fontSize={'40px'} fontWeight={'700'} color='#FF6600'>60+</Text>
                        </Box> 
                    </Stack>                       
                </Box>
            </Stack>
            <Flex direction='column' textAlign='center' pb='65px'>        
                <Text fontSize={'52px'} fontWeight={'800'} color='#2B2B2B'>Our Interests</Text>
                <Text mt='35px' fontSize={'20px'} fontWeight={'400'} color='#5B5B5B'>It’s the norm these days to lay out a roadmap that gives stakeholders an indication of the direction that the project aspires to go. 
                    Inspired by Elon Musk’s 2006 masterplan, these are our skeleton ambitions.</Text>
            </Flex>
            <Flex direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} pb='140px'>
                <Box shadow='sm' py='44px' px='40px'>
                    <Stack>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="70" height="70" rx="8" fill="#FFEDE6"/>
                            <g clipPath="url(#clip0_1_2347)">
                                <path d="M26.6357 43.0949C24.9393 42.9149 23.36 42.1448 22.1735 40.9192C19.3731 38.0257 19.44 33.3593 22.343 30.5497L27.1335 25.9133C30.0269 23.113 34.7027 23.1894 37.503 26.0829C40.3034 28.9763 40.2365 33.6427 37.3335 36.4524L34.9382 38.7705" stroke="#FF6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M43.3641 26.9047C45.0604 27.0847 46.6397 27.8548 47.8263 29.0804C50.6266 31.9739 50.5598 36.6403 47.6567 39.4499L42.8663 44.0863C39.9728 46.8866 35.2971 46.8102 32.4968 43.9167C29.6964 41.0233 29.7633 36.3569 32.6663 33.5472L35.0615 31.2291" stroke="#FF6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_2347">
                                <rect width="32" height="32" fill="white" transform="translate(12.3755 34.6299) rotate(-44.0633)"/>
                                </clipPath>
                            </defs>
                        </svg>

                    </Stack>
                    <Text my='24px' fontSize={'28px'} fontWeight={'700'} color='#2B2B2B'>Blockchain product </Text>
                    <Text fontSize={'18px'} fontWeight={'400'} color='#5B5B5B'>Create something novel that has never been done on the blockchain before Build a product</Text>
                    <Text mt='24px' fontSize={'18px'} fontWeight={'600'} color='#FF6600'><Link><a>Read More</a></Link></Text>
                </Box>
                <Box shadow='sm' py='44px' px='40px'>
                    <Stack>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="70" height="70" rx="8" fill="#FFE1E9"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M34.2776 23C34.1361 23 33.7877 23.0388 33.6025 23.4091L30.7621 29.0884C30.3125 29.986 29.4461 30.6097 28.4443 30.7528L22.0852 31.6691C21.6652 31.7297 21.5221 32.0408 21.4785 32.1715C21.4397 32.2975 21.3774 32.618 21.6668 32.8948L26.265 37.3126C26.9977 38.0173 27.3305 39.0331 27.1563 40.0271L26.0736 46.2648C26.0068 46.6553 26.251 46.8824 26.3599 46.9602C26.475 47.0473 26.783 47.22 27.1641 47.0208L32.8496 44.0731C33.7456 43.6111 34.8128 43.6111 35.7057 44.0731L41.3897 47.0193C41.7723 47.2168 42.0803 47.0442 42.197 46.9602C42.3059 46.8824 42.5501 46.6553 42.4832 46.2648L41.3974 40.0271C41.2232 39.0331 41.5561 38.0173 42.2888 37.3126L46.887 32.8948C47.1779 32.618 47.1156 32.296 47.0752 32.1715C47.0332 32.0408 46.8901 31.7297 46.4701 31.6691L40.111 30.7528C39.1108 30.6097 38.2443 29.986 37.7948 29.0868L34.9512 23.4091C34.7676 23.0388 34.4192 23 34.2776 23ZM26.8063 49.4444C26.1639 49.4444 25.5261 49.2422 24.9801 48.844C24.0374 48.1533 23.5754 47.0131 23.7761 45.8651L24.8588 39.6273C24.8992 39.3955 24.8199 39.1606 24.6488 38.9957L20.0505 34.578C19.2043 33.7675 18.901 32.5697 19.2588 31.4575C19.6197 30.3328 20.5748 29.5286 21.7523 29.3606L28.1114 28.4444C28.3572 28.4102 28.5688 28.2593 28.6745 28.0446L31.5165 22.3637C32.0408 21.3168 33.0985 20.6666 34.2776 20.6666C35.4568 20.6666 36.5145 21.3168 37.0388 22.3637L39.8823 28.0431C39.9896 28.2593 40.1996 28.4102 40.4439 28.4444L46.803 29.3606C47.9805 29.5286 48.9356 30.3328 49.2965 31.4575C49.6543 32.5697 49.3494 33.7675 48.5032 34.578L43.905 38.9957C43.7339 39.1606 43.6561 39.3955 43.6965 39.6257L44.7808 45.8651C44.9799 47.0146 44.5179 48.1548 43.5736 48.844C42.617 49.5455 41.371 49.6404 40.3148 49.0897L34.6323 46.1451C34.4099 46.03 34.1439 46.03 33.9214 46.1451L28.239 49.0913C27.7848 49.3277 27.2948 49.4444 26.8063 49.4444Z" fill="#FD346E"/>
                        </svg>
                    </Stack>
                    <Text my='24px' fontSize={'28px'} fontWeight={'700'} color='#2B2B2B'>Quality product </Text>
                    <Text fontSize={'18px'} fontWeight={'400'} color='#5B5B5B'>Create something novel that has never been done on the blockchain before Build a product</Text>
                    <Text mt='24px' fontSize={'18px'} fontWeight={'600'} color='#FF6600'><Link><a>Read More</a></Link></Text>
                </Box>
                <Box shadow='sm' py='44px' px='40px'>
                    <Stack>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="70" height="70" rx="8" fill="#DBF9ED"/>
                            <path d="M35 50C43.2843 50 50 43.2843 50 35C50 26.7157 43.2843 20 35 20C26.7157 20 20 26.7157 20 35C20 43.2843 26.7157 50 35 50Z" stroke="#0CD68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M41.6666 30L32.5 39.1667L28.3333 35" stroke="#0CD68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Stack>
                    <Text my='24px' fontSize={'28px'} fontWeight={'700'} color='#2B2B2B'>Viable product </Text>
                    <Text fontSize={'18px'} fontWeight={'400'} color='#5B5B5B'>Create something novel that has never been done on the blockchain before Build a product</Text>
                    <Text mt='24px' fontSize={'18px'} fontWeight={'600'} color='#FF6600'><Link><a>Read More</a></Link></Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default About