import {
  Description,
  Featured,
  Header,
  Highlight,
  Strength,
} from "./container";
import { Brand, CTA, Footer, Rating } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Rating />
      <Brand />
      <Description />
      <Featured />
      <Highlight />
      <Strength />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
