import { Flex, Image, VStack } from "@chakra-ui/react";
import { FC, useState } from "react";

const choices = ["rock", "paper", "scissors"];

const Game: FC = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handleBoxClick = (choice: string) => {
    setPlayerChoice(choice);
    const computerRandomChoice =
      choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerRandomChoice);
    determineResult(choice, computerRandomChoice);
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
        {computerChoice && <p>Computer's choice: {computerChoice}</p>}
        {result && <p>Result: {result}</p>}
      </div>
    </Flex>
  );
};

export default Game;
