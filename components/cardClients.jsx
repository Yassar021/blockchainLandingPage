import { Box, Image } from "@chakra-ui/react"

const CardClients = ({image}) => {
    return(
        <Box h={{base:'16px',md:'54px',lg:'54px',xl:'54px','2xl':'54px'}}>
           <Image src={image} w='100%' alt='clients' /> 
        </Box>
    )
}

export default CardClients