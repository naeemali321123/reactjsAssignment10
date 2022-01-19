import '../FontsStyle.css';
import './MultiChef.css';
import Chef01 from "../../images/Chef01.png";
import Chef02 from "../../images/Chef02.png";
import Chef03 from "../../images/Chef03.png";

export default function Chef() {
    return (
        <div id="chef">
            <img src={Chef01} alt="Our Checf" />
            <h1>AIDEN HUNTER</h1>
            <p>Founder</p>
        </div>
    )
}

export function Chef1() {
    return (
        <div id="chef">
            <img src={Chef02} alt="Our Checf 01" />
            <h1>AIDEN HUNTER</h1>
            <p>Co Founder</p>
        </div>
    )
}
export function Chef2() {
    return (
        <div id="chef">
            <img src={Chef03} alt="Our Checf 02" />
            <h1>AIDEN HUNTER</h1>
            <p>Co Founder</p>
        </div>
    )
}