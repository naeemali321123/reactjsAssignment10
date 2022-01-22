// CSS LINK
import "./App.css";

// components LINK
import DiscountSection from "./components/discountSection/DiscountSection.js";
import OurChefSection from "./components/ourChefSection/OurChefSection.js";
import BurCatSec, { BurCatSec1 } from "./components/burCatSec/BurCatSec.js";
import StatisticsSection from "./components/statisticsSection/StatisticsSection";
import PackageSection from './components/packageSection/PackageSection';
import BarrySection from './components/barrySection/BarrySection';
import SubscribeSection from './components/subscribeSection/SubscribeSection';
import LinkSection from './components/linkSection/LinkSection';

function App() {
  return (
    <div id="container">
      <DiscountSection />
      <OurChefSection />
      <BurCatSec />
      <BurCatSec1 />
      <StatisticsSection />
      <PackageSection />
      <BarrySection />
      <SubscribeSection />
      <LinkSection />
    </div>
  );
}

export default App;
