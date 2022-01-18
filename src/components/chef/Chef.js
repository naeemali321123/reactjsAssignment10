import '../fontsStyle.css';
import './Chef.css';
import Chef01 from "../../images/Chef01.png";


function Chef(num) {
    return (
        <div id="chef">
            <img src={Chef01} alt="Our Checf 01" />
            <h1>AIDEN HUNTER</h1>
            <p>Founder</p>
        </div>
    )
}
export default Chef;