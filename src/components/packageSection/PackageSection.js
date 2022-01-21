// CSS
import '../FontsStyle.css';
import './PackageSection.css';
import BurgerIcon from '../../images/BurgerIcon.png';
import { RedHeading } from '../heading/Heading';
import Package from '../package/Package';

export default function PackageSection() {
    return (
        <div id="packageSection">
            <div id="packageHeading">
                <RedHeading heading="Papolar Package" />
            </div>
            <Package heading="PACKAGE Ⅰ" Image={BurgerIcon} price="$10.00" />
            <Package heading="PACKAGE ⅠⅠ" Image={BurgerIcon} price="$20.00" />
            <Package heading="PACKAGE ⅠⅠⅠ" Image={BurgerIcon} />
        </div>
    )
}