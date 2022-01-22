import './StatisticsValue.css';

export default function StatisticsValue(prose) {
    return (
        <div id="statisticsValue">
            <h1>{prose.heading}</h1>
            <p>{prose.para}</p>
        </div>
    )
}