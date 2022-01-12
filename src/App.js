import logo from './images/Logo.png';
import Chef01 from './images/Chef01.png';
import Chef02 from './images/Chef02.png';
import Chef03 from './images/Chef03.png';
import BurgerImage1 from './images/BurgerImage1.png';
import BurgerImage2 from './images/BurgerImage2.png';
import burgerIcon from './images/burgerIcon.png';
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
            <div id='menuBar'>
              <i onClick="showMobMenu()" class="fas fa-bars"></i>
            </div>
            <ul>
              <a href=""><li><i class="far fa-times-circle"></i></li></a>
              <a href=""><li>HOME</li></a>
              <a href=""><li>PRODUCT</li></a>
              <a href=""><li>PROMO</li></a>
              <a href=""><li>ABOUT</li></a>
              <a href=""><li>CONTACT</li></a>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Vivamus lacinia odio vitae vestibulum
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
      {/* Papolar Package Section */}
      <div id="packageSection">
        <div id="packageHeading">
          <h1>
            Papolar Package
          </h1>
        </div>
        <div id="bestPackage">
          <h1>
            PACKAGE &#8544;
          </h1>
          <img src={burgerIcon} alt="Burger-Icon" />
          <h3>
            &#36;10.00
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h2>
            <a href="">ORDER NOW</a>
          </h2>
        </div>
        <div id="bestPackage">
          <h1>
            PACKAGE &#x2161;
          </h1>
          <img src={burgerIcon} alt="Burger-Icon" />
          <h3>
            &#36;20.00
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h2>
            <a href="">ORDER NOW</a>
          </h2>
        </div>
        <div id="bestPackage">
          <h1>
            PACKAGE &#x2162;
          </h1>
          <img src={burgerIcon} alt="Burger-Icon" />
          <h3>
            &#36;30.00
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h2>
            <a href="">ORDER NOW</a>
          </h2>
        </div>
      </div>
      {/* Barry Henderson Section */}
      <div id="barryHendersonSection">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
          vestibulum.
        </p>
        <h1>
          Barry Henderson
        </h1>
      </div>
      {/* Subscribe Section */}
      <div id="subscribeSection">
        <h1>
          Don’t miss Our Update
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
          vestibulum.
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
          <h1>
            Title Here
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim.
          </p>
          <div id="socialIcon">
            <a href=""><i class="fab fa-facebook-f"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-whatsapp"></i></a>
            <a href=""><i class="fab fa-twitter"></i></a>
          </div>
        </div>
        <div id="about">
          <h1>
            About
          </h1>
          <ul>
            <li> <a href="">History</a> </li>
            <li> <a href="">Our Team</a> </li>
            <li> <a href="">Brand Guidelines</a> </li>
            <li> <a href="">Terms & Condition</a> </li>
            <li> <a href="">Privacy Policy</a> </li>
          </ul>
        </div>
        <div id="services">
          <h1>
            Services
          </h1>
          <ul>
            <li><a href=""> How to Order </a></li>
            <li><a href=""> Our Product </a></li>
            <li><a href=""> Order Status </a></li>
            <li><a href=""> Promo </a></li>
            <li><a href=""> Payment Method </a></li>
          </ul>
        </div>
        <div id="other">
          <h1>
            Other
          </h1>
          <ul>
            <li><a href=""> Contact Us </a></li>
            <li><a href=""> Help </a></li>
            <li><a href=""> Privacy </a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
