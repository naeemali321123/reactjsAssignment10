// CSS
import '../FontsStyle.css';
import './DiscountSection.css';

// IMAGE
import logo from "../../images/Logo.png";

// Component
import RedButton from "../button/MultiButton.js";
import WhitePara from '../pehragraph/ProductPara';

function DiscountSection() {
    return (
        <div id="discountSection" className="uniPadding">
            <div id="topbar">
                <div id="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div id="navbar">
                    <div id="menuBar" onClick="openMenu()">
                        <i class="fas fa-bars"></i>
                    </div>
                    <ul>
                        <a href="">
                            <li id='crossMenu' onClick="closeMenu()">
                                <i class="far fa-times-circle"></i>
                            </li>
                        </a>
                        <a href="">
                            <li>HOME</li>
                        </a>
                        <a href="">
                            <li>PRODUCT</li>
                        </a>
                        <a href="">
                            <li>PROMO</li>
                        </a>
                        <a href="">
                            <li>ABOUT</li>
                        </a>
                        <a href="">
                            <li>CONTACT</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div id="discountInfo">
                <h1>
                    Get Cashback
                    <br /> up to 50%
                </h1>
                <WhitePara />
                <RedButton />
            </div>
        </div>
    )
}
export default DiscountSection;