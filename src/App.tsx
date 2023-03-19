import Landing from "./pages/Landing";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakra/theme";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./App.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="section">
        <Landing />
      </div>
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Projects />
      </div>
      <div className="section">
        <Contact />
      </div>
    </ChakraProvider>
  );
}

export default App;
