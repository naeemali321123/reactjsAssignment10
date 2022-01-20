import '../FontsStyle.css';
import './ProductImage.css';
import BurgerImage1 from '../../images/BurgerImage1.png';
import BurgerImage2 from '../../images/BurgerImage2.png';

export default function ProductImage() {
  return (
    <div id="productImage">
      <img src={BurgerImage1} alt="burger" />
    </div>
  )
}
export function ProductImage1() {
  return (
    <div className="productImage">
      <img src={BurgerImage2} alt="burger" />
    </div>
  )
}