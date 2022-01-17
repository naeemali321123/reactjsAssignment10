import '../fontsStyle.css';
import './OurChefSection.css';
import Chef01 from "../../images/Chef01.png";
import Chef02 from "../../images/Chef02.png";
import Chef03 from "../../images/Chef03.png";

function OurChefSection() {
    return (
        <div id="ourChefSection" className="uniPadding">
            <div id="chefDetail">
                <h1>Our Chef</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Vivamus lacinia odio vitae vestibulum vestibulum.
                </p>
            </div>
            <div id="chef">
                <img src={Chef01} alt="Our Checf 01" />
                <h1>AIDEN HUNTER</h1>
                <p>Founder</p>
            </div>
            <div id="chef">
                <img src={Chef02} alt="Our Checf 02" />
                <h1>AIDEN HUNTER</h1>
                <p>Co-Founder</p>
            </div>
            <div id="chef">
                <img src={Chef03} alt="Our Checf 02" />
                <h1>AIDEN HUNTER</h1>
                <p>Co-Founder</p>
            </div>
        </div>
    )
}
export default OurChefSection;