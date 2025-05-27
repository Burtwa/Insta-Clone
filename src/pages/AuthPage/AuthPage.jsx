import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'
import { Container, Flex, Box, Image, VStack } from '@chakra-ui/react'

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} alignItems={"center"} justifyContent={"center"} px={4}>
        <Container maxW={"container.md"}> 
            <Flex justify={"center"} align={"center"} gap={10}>
            {/* Left hand side */}
        <Box display={{base: "none", md: "block"}}>
            <Image src="/auth.png" h={650} alt='Phone img' />
         </Box>
         {/* Right handside */}
         <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
                <Image src="/microsoft.png" alt='Microsoft Store' h={10} />
                <Image src="/playstore.png" alt='Play Store' h={10} ml={4} />
            </Flex>

         </VStack>
         </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage