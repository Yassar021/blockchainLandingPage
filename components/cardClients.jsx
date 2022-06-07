import { Box, Image } from "@chakra-ui/react"

const CardClients = ({image}) => {
    return(
        <Box h={'54px'}>
           <Image src={image} w='100%' alt='clients' /> 
        </Box>
    )
}

export default CardClients