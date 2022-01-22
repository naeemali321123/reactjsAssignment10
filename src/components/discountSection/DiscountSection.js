// CSS
import './DiscountSection.css';

// IMAGE
import logo from "../../images/Logo.png";
import barIcon from "../../images/barIcon.png";

// Component
import RedButton from "../button/MultiButton.js";
import WhitePara from '../pehragraph/ProductPara';

function DiscountSection() {
    function openMenu() {

    }

    function closeMenu() {
    }
    return (
        <div id="discountSection" className="uniPadding">
            <div id="topbar">
                <div id="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div id="navbar">
                    <div id="menuBar" onClick={openMenu}>
                        <img src={barIcon} ali='Menu Icon' />
                    </div>
                    <ul>
                        <a href="">
                            <li onClick={closeMenu}>
                                <b>&#10005;</b>
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