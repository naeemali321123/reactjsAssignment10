import '../FontsStyle.css';
import './OurChefSection.css';
import Chef, {Chef1 , Chef2} from "../multiChef/MultiChef";


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
            <Chef />
            <Chef1 />
            <Chef2 />
        </div>
    )
}
export default OurChefSection;