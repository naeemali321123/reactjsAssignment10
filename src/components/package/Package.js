import RedButton from '../button/MultiButton';
import '../FontsStyle.css';
import './Package.css';



export default function Package(props) {
    return (
        <div id="bestPackage">
            <h1>{props.heading}</h1>
            <img src={props.Image} alt="Burger-Icon" />
            <h3>{props.price}</h3>
            <p>{props.detail}</p>
            <RedButton />
        </div>
    )
}
Package.defaultProps = {
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Best Price"
}