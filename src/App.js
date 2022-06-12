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
      <div className="rating-brand section__margin section__padding">
        <Rating />
        <Brand />
      </div>
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
