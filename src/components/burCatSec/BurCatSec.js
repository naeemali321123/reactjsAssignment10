// StyleSheet
import '../FontsStyle.css';
import './BurCatSec.css';

// Components link
import ProductImage, { ProductImage1 } from '../productImage/ProductImage';
import RedButton, { WhiteButton } from '../multiButton/MultiButton';
import WhiteHeading, { RedHeading } from '../productHeading/ProductHeading';
import WhitePara, { RedPara } from '../productPara/ProductPara';

export default function BurCatSec() {
  return (
    <div className="BurCatContainer">
      <div className="burgerImage">
        <ProductImage />
      </div>
      <div className="burgerInfo">
        <WhiteHeading />
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
        <RedHeading />
        <RedPara />
        <RedButton />
      </div>
      <div className="burgerImage">
        <ProductImage1 />
      </div>
    </div>
  )
}