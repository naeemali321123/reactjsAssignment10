import '../fontsStyle.css';
import './OurChefSection.css';
import Chef from "../chef/Chef.js";


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
            <Chef />
            <Chef />
        </div>
    )
}
export default OurChefSection;