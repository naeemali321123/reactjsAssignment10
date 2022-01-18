import '../fontsStyle.css';
import './MultiButton.css';

function RedButton() {
    return (
        <h2 className='redButton'>
            <a href="">ORDER NOW</a>
        </h2>
    )
}
export default RedButton;

export function WhiteButton() {
    return (
        <h2 className='whiteButton redButton'>
            <a href="">ORDER NOW</a>
        </h2>
    )
}
