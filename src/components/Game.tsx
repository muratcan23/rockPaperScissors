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
  const [showComputerChoice, setShowComputerChoice] = useState(false);

  useEffect(() => {
    if (showComputerChoice) {
      const delay = setTimeout(() => {
        const computerRandomChoice =
          choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(computerRandomChoice);
        determineResult(playerChoice, computerRandomChoice);
        setShowComputerChoice(false);
      }, 250);

      return () => clearTimeout(delay);
    }
  }, [showComputerChoice, playerChoice]);

  const handleBoxClick = (choice: string) => {
    if (!showComputerChoice) {
      setPlayerChoice(choice);
      setShowComputerChoice(true);
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
    <Flex bg="#157A38">
      <VStack spacing={4} bg="gray.300" ml="40px" h="100%">
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
      <Center mx="20%">
        <Flex h="70vh" w="50vw" flexDirection="column">
          <Flex bg="#1D1B1E" p={4} h="80%" borderRadius="10px">
            <Flex
              flexDirection="column"
              h="350px"
              w="350px"
              border="2px solid white"
              borderRadius="5px"
            >
              <Box h="40px" bg="#D8DFE0">
                <Text fontFamily="inherit" fontWeight="bold" fontSize="18px">
                  Player's choice:{" "}
                  <span style={{ color: "tomato" }}>{playerChoice}</span>
                </Text>
              </Box>
              <Box
                h="90%"
                w="100%"
                alignItems="center"
                justifyContent="center"
                bg="#AD36A1"
              >
                <Image
                  src={getImageUrl(playerChoice)}
                  w="90%"
                  h="90%"
                  p="5px"
                />
              </Box>
            </Flex>

            {/* computers choice */}
            <Flex
              ml="5%"
              flexDirection="column"
              h="350px"
              w="350px"
              border="2px solid white"
              borderRadius="5px"
            >
              {computerChoice !== null && (
                <Box h="40px" bg="#D8DFE0">
                  <Text fontFamily="inherit" fontWeight="bold" fontSize="18px">
                    Computer's choice:{" "}
                    <span style={{ color: "#2A0AD9" }}>{computerChoice}</span>
                  </Text>
                </Box>
              )}
              {/* You can use the same height, width, alignItems, and justifyContent for computer's choice */}
              <Box
                h="90%"
                w="100%"
                alignItems="center"
                justifyContent="center"
                bg="#AD36A1"
              >
                <Image
                  src={getImageUrl(computerChoice)}
                  w="90%"
                  h="90%"
                  p="5px"
                />
              </Box>
            </Flex>
          </Flex>

          {/* Displaying result */}
          <Box
            mt="15px"
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
