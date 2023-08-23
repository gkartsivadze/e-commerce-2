import img from "../../../public/coat.png"
import Statistics from "./Statistics";

export default function ItemCard({ data }) {

    return (
        <div className="item_card">
            <img src={ img } alt={ data.img + " Image" } />
            <h4>{ data.name }</h4>
            <div>
                <span>{data.price}</span>
                <Statistics statistics={data.statistics} />
            </div>

        </div>
    )
};
