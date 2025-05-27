import React from 'react'
import { Container, Flex, Box, Image } from '@chakra-ui/react'

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} alignItems={"center"} justifyContent={"center"} px={4}>
        <Container maxW={"container.md"}> 
            {/* Left hand side */}
        <Box display={{base: "none", md: "block"}}>
            <Image src="/auth.png" h={650} alt='Phone img' />
         </Box>
        </Container>
    </Flex>
  )
}

export default AuthPage