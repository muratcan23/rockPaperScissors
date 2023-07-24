import { ChakraProvider, Flex, HStack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <ChakraProvider>
      <Flex
        alignItems="center"
        justifyContent="center"
        h="90px"
        w="100"
        bg="#381452"
      >
        <HStack spacing="10%">
          <Flex
            border="1px solid red"
            _hover={{ bg: "gray", cursor: "pointer" }}
            borderRadius="15%"
            p="3px"
          >
            <Text fontFamily="cursive" color="white" letterSpacing="2px">
              Rock
            </Text>
          </Flex>
          <Flex
            border="1px solid white"
            _hover={{ bg: "gray", cursor: "pointer" }}
            borderRadius="15%"
            p="3px"
          >
            <Text fontFamily="cursive" color="white" letterSpacing="2px">
              Paper
            </Text>
          </Flex>

          <Flex
            border="1px solid yellow"
            _hover={{ bg: "gray", cursor: "pointer" }}
            borderRadius="10%"
            p="3px"
          >
            <Text fontFamily="cursive" color="white" letterSpacing="2px">
              Scissors
            </Text>
          </Flex>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
};

export default Header;
