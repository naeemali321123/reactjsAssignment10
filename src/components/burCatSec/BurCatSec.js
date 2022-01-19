import '../FontsStyle.css';
import './BurCatSec.css';
import BurgerImage1 from '../../images/BurgerImage1.png';

export default function BurCatSec() {
    return (
        <div id="burgerCategorySection">
        <div id="burgerImage">
          <img src={BurgerImage1} alt="burger" /> 
        </div>
        <div id="burgerInfo">
          <h1>Best Burger</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
          <h2>
            <a href="">ORDER NOW</a>
          </h2>
        </div>
      </div>
    )
}