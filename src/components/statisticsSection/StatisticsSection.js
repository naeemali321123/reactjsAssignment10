// CSS
import './StatisticsSection.css';
// Component
import WhiteHeading from '../heading/Heading';
import WhitePara from '../productPara/ProductPara';
import StatisticsValue from '../statisticsValue/StatisticsValue';


export default function StatisticsSection() {
    return (
        <div id="statisticsSection">
            <div id="statisticsHeading">
                <WhiteHeading heading="Statistics" />
                <WhitePara />
            </div>
            <StatisticsValue heading="7k" para="CUSTOMER" />
            <StatisticsValue heading="109" para="OUTLETS" />
            <StatisticsValue heading="35" para="COUNTRY" />
        </div>
    )
}