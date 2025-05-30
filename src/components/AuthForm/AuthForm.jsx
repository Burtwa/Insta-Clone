import { Box, VStack, Image, Input, Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleAuth = () => {
        // handle login or signup here
    }

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src='/logo.png' h={24} cursor={"pointer"} alt="Instagram" />
          <Input 
              placeholder="Email"
              fontSize={14}
              value={inputs.email}
              onChange={e => setInputs({...inputs, email: e.target.value})}
          />
          <Input 
              placeholder="Password"
              fontSize={14}
              type="password"
              value={inputs.password}
              onChange={e => setInputs({...inputs, password: e.target.value})}
          />
          {!isLogin ? (
              <Input 
                  placeholder="Confirm Password"
                  fontSize={14}
                  type="password"
                  value={inputs.confirmPassword}
                  onChange={e => setInputs({...inputs, confirmPassword: e.target.value})}
              />
          ) : null}

          <Button w={"full"} colorScheme="blue" fontSize={14} onClick={handleAuth}>
              {isLogin ? "Log in" : "Sign Up"}
          </Button>
          {/* ----------------- OR ----------------- */}
          <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
              <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
              <Text mx={1} color={"white"}>OR</Text>
              <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
              <Image src="/google.png" w={5} alt="Google Logo" />
              <Text mx="2" color={"blue.500"}>
                  Log in with Google
              </Text>
          </Flex>
        </VStack>
      </Box>
      
      <Box border="1px solid gray" borderRadius={4} padding={5}>
          <Flex justifyContent={"center"} alignItems={"center"}>
              <Box mx={2} fontSize={14}>
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
              </Box>
              <Box onClick={() => setIsLogin(!isLogin)} color="blue.500" cursor={"pointer"} fontSize={14}>
                  {isLogin ? "Sign Up" : "Log In"}
              </Box>
          </Flex>
      </Box>
    </>
  )
}

export default AuthForm