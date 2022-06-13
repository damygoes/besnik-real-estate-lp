import {
  Description,
  Featured,
  Header,
  Highlight,
  Strength,
} from "./container";
import { Brand, CTA, Footer, Rating } from "./components";
import HighlightImage from "../src/assets/image-card-highlight.svg";
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
      <Featured
        title="Featured Properties"
        subtext="Everything you need to know when you're looking"
        linktext="View All Properties"
      />
      <Highlight
        image={HighlightImage}
        figure="40,000+"
        text="By avarage for 2 bedroom apments in San Francisco, CA"
      />
      <Strength />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
