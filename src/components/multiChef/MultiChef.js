import './MultiChef.css';

export default function Chef(prose) {
    return (
        <div id="chef">
            <img src={prose.image} alt="Our Checf" />
            <h1>{prose.heading}</h1>
            <p>{prose.para}</p>
        </div>
    )
}