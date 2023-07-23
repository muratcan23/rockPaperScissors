import { Flex, Text } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Flex
        alignItems="center"
        justifyContent="center"
        h="90px"
        w="100"
        bg="#381452"
      >
        <Text fontFamily="cursive" color="white" letterSpacing="2px">
          Rock Paper Scissors
        </Text>
      </Flex>
    </div>
  );
}

export default App;
