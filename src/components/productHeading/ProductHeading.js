import '../FontsStyle.css';
import './ProductHeading.css';

export default function WhiteHeading() {
    return (
        <div className="whiteHeading">
            <h1>
                Best Burger
            </h1>
        </div>
    )
}
export function RedHeading() {
    return (
        <div id="redHeading" className="whiteHeading">
            <h1>
                Best Burger
            </h1>
        </div>
    )
}