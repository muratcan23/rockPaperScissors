import { Box, Center, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

const choices = ["rock", "paper", "scissors"];
const DataChoise = [
  {
    choice: "rock",
    url: "https://svgsilh.com/svg/576655.svg",
  },
  {
    choice: "paper",
    url: "https://www.svgrepo.com/download/221785/paper.svg",
  },
  {
    choice: "scissors",
    url: "https://freesvg.org/img/scissors_01.png",
  },
];

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
      setResult("It's a tie !");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("You win !");
    } else {
      setResult("Computer wins !");
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
      <VStack spacing={4} bg="gray.300" ml="40px" h="80%">
        {DataChoise.map((item) => (
          <Box
            key={item.url}
            h="200px"
            w="175px"
            as="button"
            alignItems="center"
            justifyContent="center"
            onClick={() => handleBoxClick(item.choice)}
            _hover={{ bg: "#d0a85c" }}
          >
            <Image src={item.url} />
          </Box>
        ))}
      </VStack>
      {/* Your choice */}
      <Center ml="20%">
        <Flex
          ml="25%"
          border="1px solid black"
          h="333px"
          flexDirection="column"
          borderRadius="5px"
        >
          <Flex>
            <Flex flexDirection="column" h="250px">
              <Box h="40px" bg="#D8DFE0">
                {playerChoice && (
                  <Text fontFamily="inherit" fontWeight="bold" fontSize="18px">
                    Your choice ={" "}
                    <span style={{ color: "tomato" }}>{playerChoice}</span>
                  </Text>
                )}
              </Box>
              <Box
                p="10px"
                h="200px"
                w="200px"
                as="button"
                alignItems="center"
                justifyContent="center"
                bg="#AD36A1"
              >
                <Image src={getImageUrl(playerChoice)} />
              </Box>
            </Flex>

            {/* computers choice */}
            <Flex flexDirection="column" h="250px">
              <Box h="40px" bg="#D8DFE0">
                <Text fontFamily="inherit" fontWeight="bold" fontSize="18px">
                  Your choice ={" "}
                  <span style={{ color: "#2A0AD9" }}>{computerChoice}</span>
                </Text>
              </Box>
              {computerChoice && (
                <Box
                  p="10px"
                  h="200px"
                  w="200px"
                  border="1px solid red"
                  as="button"
                  alignItems="center"
                  justifyContent="center"
                  bg="#0bc6e3"
                >
                  <Image src={getImageUrl(computerChoice)} />
                </Box>
              )}
            </Flex>
          </Flex>

          <Box
            borderRadius="10px"
            h="55px"
            w="100%"
            border="2px solid red"
            alignItems="center"
            bg="#D6EA13"
          >
            {result && (
              <Text
                fontFamily="cursive"
                fontWeight="extrabold"
                fontSize="29px"
                ml="30%"
              >
                {" "}
                {result}
              </Text>
            )}
          </Box>
        </Flex>
      </Center>
    </Flex>
  );
};

export default Game;
