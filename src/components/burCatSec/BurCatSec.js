// StyleSheet
import './BurCatSec.css';

// Components link
import ProductImage from '../productImage/ProductImage';
import RedButton, { WhiteButton } from '../multiButton/MultiButton';
import WhiteHeading, { RedHeading } from '../heading/Heading';
import WhitePara, { RedPara } from '../productPara/ProductPara';
// Images
import BurgerImage1 from '../../images/BurgerImage1.png';
import BurgerImage2 from '../../images/BurgerImage2.png';



export default function BurCatSec() {
  return (
    <div className="BurCatContainer">
      <div className="burgerImage">
        <ProductImage Image={BurgerImage1} />
      </div>
      <div className="burgerInfo">
        <WhiteHeading heading="Best Burger" />
        <WhitePara />
        <WhiteButton />
      </div>
    </div>
  )
}
export function BurCatSec1() {
  return (
    <div className="BurCatContainer" id="BurCatContainer1">
      <div className="burgerInfo">
        <RedHeading heading="Big Burger" />
        <RedPara />
        <RedButton />
      </div>
      <div className="burgerImage">
        <ProductImage Image={BurgerImage2} />
      </div>
    </div>
  )
}