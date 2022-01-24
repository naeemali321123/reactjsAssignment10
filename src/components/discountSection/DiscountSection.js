// CSS
import './DiscountSection.css';

// IMAGE
import logo from "../../images/Logo.png";
import barIcon from "../../images/barIcon.png";

// Component
import RedButton from "../multiButton/MultiButton.js";
import WhitePara from '../productPara/ProductPara';
import { useState } from 'react';


function DiscountSection() {
    const [navbar, setnavbar] = useState();
    function openMenu() {
        setnavbar({ left: '0px' });
    };
    function closeMenu() {
        setnavbar({ left: '-130px' });
    };

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
                    <ul style={navbar}>
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