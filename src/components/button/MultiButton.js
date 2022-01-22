import './MultiButton.css';

function RedButton() {
    return (
        <div className='redButton'>
            <a href="">ORDER NOW</a>
        </div>
    )
}
export default RedButton;

export function WhiteButton() {
    return (
        <div className='whiteButton redButton'>
            <a href="">ORDER NOW</a>
        </div>
    )
}
