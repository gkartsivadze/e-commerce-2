import { FaEye, FaHeart } from "react-icons/fa6";
import img from "../../../public/coat.png"
import ColorPicker from "./ColorPicker";
import Statistics from "./Statistics";

export default function ItemCard({ data, statistics = true }) {
    return (
        <div className="item_card">
            {
            data.new
            ||
            data.discount > 0
            &&
            <h4
                style={data.discount && {backgroundColor: "var(--button-red)"}}
                className="new_item"
            >{data.discount ? data.discount * 100 + "%" : "NEW"}</h4>
            }

            <div className="button_wrapper">
                <button className="favourite"><FaHeart /></button>
                <button className="preview"><FaEye /></button>
            </div>
            <img src={img} alt={data.img + " Image"} />
            <h4>{data.name}</h4>

            <div className="flex-vertical-align">
                <h3 className="price">${(data.price * (1 - data.discount)).toFixed(2)}</h3>
                { data.discount > 0 && <h5 className="old_price">${data.price}</h5>}
                {statistics && <Statistics statistics={data.statistics} />}
                { data.colors_available.length > 1 && <ColorPicker colors={data.colors_available} /> }
            </div>
            <button className="cart">Add To Cart</button>
        </div>
    )
};
