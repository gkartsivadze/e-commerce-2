import { FaStar } from "react-icons/fa6";

export default function Statistics({ statistics }) {
    const yellowStars = new Array(Math.floor(statistics.rating)).fill(<FaStar color="orange" />)
    const emptyStars = new Array(5 - yellowStars.length).fill(<FaStar />)
    return (
    <span>
        <span>
            {[...yellowStars, ...emptyStars]}
        </span>
        <span className="text-grey">({ statistics.num_reviews })</span>
    </span>
    )
};
