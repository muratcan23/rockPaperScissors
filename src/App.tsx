import { ChakraProvider } from "@chakra-ui/react";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Game />
    </ChakraProvider>
  );
}

export default App;
