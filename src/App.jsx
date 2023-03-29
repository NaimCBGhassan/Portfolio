import "./App.css";
import { About, Contact, Header, Home, Porfolio } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Porfolio />
      <Contact />
    </div>
  );
}

export default App;
