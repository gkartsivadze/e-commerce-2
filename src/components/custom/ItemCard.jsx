import img from "../../../public/coat.png"
import Statistics from "./Statistics";

export default function ItemCard({ data }) {

    return (
        <div className="item_card">
            {data.new || true && <h4 className="new_item">NEW</h4>}
            <img src={img} alt={data.img + " Image"} />
            <h4>{data.name}</h4>

            <div className="flex-vertical-align">
                <h3 className="price">${(data.price * (1 - data.discount)).toFixed(2)}</h3>
                <h5 className="old_price">${data.price}</h5>
                <Statistics statistics={data.statistics} />
            </div>
        </div>
    )
};
