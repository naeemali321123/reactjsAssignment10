// CSS LINK
import "./App.css";
import './components/FontsStyle.css';

// IMAGE LINK
import burgerIcon from "./images/BurgerIcon.png";

// components LINK
import DiscountSection from "./components/discountSection/DiscountSection.js";
import OurChefSection from "./components/ourChefSection/OurChefSection.js";
import BurCatSec, { BurCatSec1 } from "./components/burCatSec/BurCatSec.js";
import StatisticsSection from "./components/statisticsSection/StatisticsSection";

function App() {
  return (
    <div id="container">
      <DiscountSection />
      <OurChefSection />
      <BurCatSec />
      <BurCatSec1 />
      <StatisticsSection />

    
      {/* Papolar Package Section */}
      <div id="packageSection">
        <div id="packageHeading">
          <h1>Papolar Package</h1>
        </div>
        <div id="bestPackage">
          <h1>PACKAGE &#8544;</h1>
          <img src={burgerIcon} alt="Burger-Icon" />
          <h3>&#36;10.00</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h2>
            <a href="">ORDER NOW</a>
          </h2>
        </div>
        <div id="bestPackage">
          <h1>PACKAGE &#x2161;</h1>
          <img src={burgerIcon} alt="Burger-Icon" />
          <h3>&#36;20.00</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h2>
            <a href="">ORDER NOW</a>
          </h2>
        </div>
        <div id="bestPackage">
          <h1>PACKAGE &#x2162;</h1>
          <img src={burgerIcon} alt="Burger-Icon" />
          <h3>&#36;30.00</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h2>
            <a href="">ORDER NOW</a>
          </h2>
        </div>
      </div>
      {/* Barry Henderson Section */}
      <div id="barryHendersonSection">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
        <h1>Barry Henderson</h1>
      </div>
      {/* Subscribe Section */}
      <div id="subscribeSection">
        <h1>Don’t miss Our Update</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
        <div id="subscribeForm">
          <form action="">
            <input type="email" placeholder="Your Email" />
          </form>
          <div id="subscribeBtn">
            <a href="">Subscribe</a>
          </div>
        </div>
      </div>
      {/* Link Section */}
      <div id="linkSection" className="uniPadding ">
        <div id="titleHere">
          <h1>Title Here</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            dignissim nunc, id maximus ex. Etiam nec dignissim elit, at
            dignissim enim.
          </p>
          <div id="socialIcon">
            <a href="">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div id="about">
          <h1>About</h1>
          <ul>
            <li>
              {" "}
              <a href="">History</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">Our Team</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">Brand Guidelines</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">Terms & Condition</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">Privacy Policy</a>{" "}
            </li>
          </ul>
        </div>
        <div id="services">
          <h1>Services</h1>
          <ul>
            <li>
              <a href=""> How to Order </a>
            </li>
            <li>
              <a href=""> Our Product </a>
            </li>
            <li>
              <a href=""> Order Status </a>
            </li>
            <li>
              <a href=""> Promo </a>
            </li>
            <li>
              <a href=""> Payment Method </a>
            </li>
          </ul>
        </div>
        <div id="other">
          <h1>Other</h1>
          <ul>
            <li>
              <a href=""> Contact Us </a>
            </li>
            <li>
              <a href=""> Help </a>
            </li>
            <li>
              <a href=""> Privacy </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
