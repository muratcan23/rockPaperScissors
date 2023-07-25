import { Flex, Image, VStack } from "@chakra-ui/react";
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
      }, 1500);

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
          onClick={() => handleBoxClick("rock")}
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
          onClick={() => handleBoxClick("paper")}
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
          onClick={() => handleBoxClick("scissors")}
        >
          <Image src="https://freesvg.org/img/scissors_01.png" />
        </Flex>
      </VStack>
      <div>
        {playerChoice && <p>Your choice: {playerChoice}</p>}
        {isGameInProgress && <p>Computer is choosing...</p>}
        {computerChoice && (
          <Flex>
            <Image
              src={
                computerChoice === "rock"
                  ? "https://example.com/rock.svg"
                  : computerChoice === "paper"
                  ? "https://example.com/paper.svg"
                  : "https://example.com/scissors.svg"
              }
            />
          </Flex>
        )}
        {result && <p>Result: {result}</p>}
      </div>
    </Flex>
  );
};

export default Game;
