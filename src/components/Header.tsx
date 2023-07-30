import { ChakraProvider, Flex, HStack, Text, Tooltip } from "@chakra-ui/react";

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
          <Tooltip
            hasArrow
            label="Rock smashes the scissors !"
            bg="red.600"
            fontSize="2xl"
            borderRadius="15px"
            alignItems="center"
            justifyContent="center"
          >
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
          </Tooltip>
          <Tooltip
            hasArrow
            label="Paper covers the rock !"
            bg="red.600"
            fontSize="2xl"
            borderRadius="15px"
            alignItems="center"
            justifyContent="center"
          >
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
          </Tooltip>
          <Tooltip
            hasArrow
            label="Scissors cut the paper !"
            bg="red.600"
            fontSize="2xl"
            borderRadius="15px"
            alignItems="center"
            justifyContent="center"
          >
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
          </Tooltip>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
};

export default Header;
