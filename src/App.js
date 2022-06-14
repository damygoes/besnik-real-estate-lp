import {
  Description,
  Featured,
  Header,
  Highlight,
  Strength,
} from "./container";
import { Brand, CTA, Footer, Rating } from "./components";
import HighlightImage from "../src/assets/image-card-highlight.jpg";
import CTAImage from "../src/assets/illustration.svg";
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
      <div className="highlight-strength section__padding">
        <Highlight
          image={HighlightImage}
          figure="40,000+"
          text="By avarage for 2 bedroom apartments in San Francisco, CA"
        />
        <Strength />
      </div>
      <CTA
        title="Featured Properties"
        text="Everything you need to know when you're looking"
        image={CTAImage}
      />
      <Footer />
    </div>
  );
}

export default App;
