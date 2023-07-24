import { Flex, Image, VStack } from "@chakra-ui/react";

const Game = () => {
  return (
    <Flex>
      <VStack>
        <Flex
          h="200px"
          w="175px"
          border="1px solid red"
          as="button"
          alignItems="center"
          justifyContent="center"
        >
          <Image src="https://svgsilh.com/svg/576655.svg" />
        </Flex>
        <Flex
          h="200px"
          w="175px"
          border="1px solid red"
          as="button"
          alignItems="center"
          justifyContent="center"
        >
          <Image src="https://www.svgrepo.com/download/221785/paper.svg" />
        </Flex>
        <Flex
          h="200px"
          w="175px"
          border="1px solid red"
          as="button"
          alignItems="center"
          justifyContent="center"
        >
          <Image src="https://freesvg.org/img/scissors_01.png" />
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Game;
