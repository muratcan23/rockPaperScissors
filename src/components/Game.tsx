import { Box, Center, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

const choices = ["rock", "paper", "scissors"];

const Game: FC = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [isGameInProgress, setGameInProgress] = useState(false);

  useEffect(() => {
    if (isGameInProgress) {
      const delay = setTimeout(() => {
        const computerRandomChoice =
          choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(computerRandomChoice);
        determineResult(playerChoice, computerRandomChoice);
        setGameInProgress(false);
      }, 250);

      return () => clearTimeout(delay);
    }
  }, [isGameInProgress, playerChoice]);

  const handleBoxClick = (choice: string) => {
    if (!isGameInProgress) {
      setPlayerChoice(choice);
      setGameInProgress(true);
    }
  };

  const determineResult = (playerChoice: string, computerChoice: string) => {
    if (playerChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  };

  const getImageUrl = (choice: string) => {
    // Replace these URLs with the correct image URLs for each choice
    if (choice === "rock") {
      return "https://svgsilh.com/svg/576655.svg";
    } else if (choice === "paper") {
      return "https://www.svgrepo.com/download/221785/paper.svg";
    } else if (choice === "scissors") {
      return "https://freesvg.org/img/scissors_01.png";
    } else {
      return "";
    }
  };

  return (
    <Flex>
      <VStack spacing={4}>
        <Box
          h="200px"
          w="175px"
          border="1px solid red"
          as="button"
          alignItems="center"
          justifyContent="center"
          onClick={() => handleBoxClick("rock")}
        >
          <Image src="https://svgsilh.com/svg/576655.svg" />
        </Box>
        <Box
          h="200px"
          w="175px"
          border="1px solid red"
          as="button"
          alignItems="center"
          justifyContent="center"
          onClick={() => handleBoxClick("paper")}
        >
          <Image src="https://www.svgrepo.com/download/221785/paper.svg" />
        </Box>
        <Box
          h="200px"
          w="175px"
          border="1px solid red"
          as="button"
          alignItems="center"
          justifyContent="center"
          onClick={() => handleBoxClick("scissors")}
        >
          <Image src="https://freesvg.org/img/scissors_01.png" />
        </Box>
      </VStack>
      {/* Your choice */}
      <Center ml="20%">
        <Flex ml="25%" border="1px solid black" h="333px">
          <Flex flexDirection="column" border="2px solid blue" h="250px">
            <Box h="40px">
              {playerChoice && <Text>Your choice: {playerChoice}</Text>}
            </Box>
            <Box
              h="200px"
              w="200px"
              border="1px solid red"
              as="button"
              alignItems="center"
              justifyContent="center"
              onClick={() => handleBoxClick("scissors")}
            >
              <Image src={getImageUrl(playerChoice)} />
            </Box>
          </Flex>

          {/* computers choice */}
          <Flex flexDirection="column" border="1px solid green" h="250px">
            <Box h="40px">
              <Text>Computer chose: {computerChoice}</Text>
            </Box>
            {computerChoice && (
              <Box
                h="200px"
                w="200px"
                border="1px solid red"
                as="button"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={getImageUrl(computerChoice)} />
              </Box>
            )}
          </Flex>

          <Box
            borderRadius="10px"
            h="45px"
            w="200px"
            border="2px solid red"
            mt="20px"
          >
            {result && <Text>Result: {result}</Text>}
          </Box>
        </Flex>
      </Center>
    </Flex>
  );
};

export default Game;
