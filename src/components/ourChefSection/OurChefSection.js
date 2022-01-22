import './OurChefSection.css';
import Chef from "../chef/MultiChef";
import { RedPara } from '../pehragraph/ProductPara';
import { RedHeading } from '../heading/Heading';
import Image from '../../images/Chef01.png';
import Image1 from '../../images/Chef02.png';
import Image2 from '../../images/Chef03.png';


function OurChefSection() {
    return (
        <div id="ourChefSection" className="uniPadding">
            <div id="chefDetail">
                <RedHeading heading='Our Chef' />
                <RedPara />
            </div>
            <Chef para="Founder" heading="Naeem Ali" image={Image} />
            <Chef para="Co Founder" heading="Hina Rubani" image={Image1} />
            <Chef para="Co Founder" heading="Shabnam" image={Image2} />
        </div>
    )
}
export default OurChefSection;