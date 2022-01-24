// CSS
import './SubscribeSection.css';
// Component
import { RedHeading } from '../heading/Heading.js';
import { RedPara } from '../productPara/ProductPara.js';
import SubscribeForm from '../subscribeForm/SubscribeForm';

export default function SubscribeSection() {
    return (
        <div id="subscribeSection">
            <RedHeading heading="Don’t miss Our Update" />
            <RedPara />
            <SubscribeForm />
        </div>
    )
}