import { Flex, Image, VStack } from "@chakra-ui/react";
import { FC, useState } from "react";

const choices = ["rock", "paper", "scissors"];

const Game: FC = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

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
