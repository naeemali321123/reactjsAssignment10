import logo from './images/Logo.png';
import Chef01 from './images/Chef01.png';
import Chef02 from './images/Chef02.png';
import Chef03 from './images/Chef03.png';
import BurgerImage1 from './images/BurgerImage1.png';
import BurgerImage2 from './images/BurgerImage2.png';
import './App.css';

function App() {
  return (
    <div id="container">
      {/* Discount Section */}
      <div id="discountSection" className="uniPadding">
        <div id="topbar">
          <div id="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div id="navbar">
            <ul>
              <li><a href="">HOME</a></li>
              <li><a href="">PRODUCT</a></li>
              <li><a href="">PROMO</a></li>
              <li><a href="">ABOUT</a></li>
              <li><a href="">CONTACT</a></li>
            </ul>
          </div>
        </div>
        <div id="discountInfo">
          <h1>
            Get Cashback<br /> up to 50%
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur justo eu nunc
            consequat.
          </p>
          <h2>
            <a href="">ORDER NOW</a>
          </h2>
        </div>
      </div>
      {/* Our Chef Section */}
      <div id="ourChefSection" className="uniPadding">
        <div id="chefDetail">
          <h1>
            Our Chef
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>
        <div id="chef">
          <img src={Chef01} alt="Our Checf 01" />
          <h1>
            AIDEN HUNTER
          </h1>
          <p>
            Founder
          </p>
        </div>
        <div id="chef">
          <img src={Chef02} alt="Our Checf 02" />
          <h1>
            AIDEN HUNTER
          </h1>
          <p>
            Co-Founder
          </p>
        </div>
        <div id="chef">
          <img src={Chef03} alt="Our Checf 03" />
          <h1>
            AIDEN HUNTER
          </h1>
          <p>
            Co-Founder
          </p>
        </div>
      </div>
      {/* burger CatagFory Section */}
      <div id="burgerCategorySection">
        <div id="burgerImage">
          <img src={BurgerImage1} alt="burger" />
        </div>
        <div id="burgerInfo">
          <h1>
            Best Burger
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
            vestibulum.
          </p>
          <h2>
            <a href="">ORDER NOW</a>
          </h2>
        </div>
      </div>
      {/* burger burgerCategory Section 2 */}
      <div id="burgerCategorySection1">
        <div id="burgerInfo1">
          <h1>
            Big Burger
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
            vestibulum.
          </p>
          <h2>
            <a href="">ORDER NOW</a>
          </h2>
        </div>
        <div id="burgerImage1">
          <img src={BurgerImage2} alt="burger" />
        </div>
      </div>
      {/* ٖstatisticsSection */}
      <div id="statisticsSection">
        <div id="statisticsHeading">
          <h1>
            Statistics
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Vivamus lacinia odio vitae vestibulum
              vestibulum.
          </p>
        </div>
        <div id="statisticsValue">
          <h1>
            7k
          </h1>
          <p>
            CUSTOMER
          </p>
        </div>
        <div id="statisticsValue">
          <h1>
            109
          </h1>
          <p>
            OUTLETS
          </p>
        </div>
        <div id="statisticsValue">
          <h1>
            35
          </h1>
          <p>
            COUNTRY
          </p>
        </div>
      </div>



    </div>
  );
}

export default App;
