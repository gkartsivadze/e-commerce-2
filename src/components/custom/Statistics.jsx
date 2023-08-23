import { FaStar } from "react-icons/fa6";

export default function Statistics({ statistics }) {
    const yellowStars = new Array(Math.floor(statistics.rating)).fill(<FaStar color="orange" />)
    const emptyStars = new Array(5 - yellowStars.length).fill(<FaStar />)
    console.log(yellowStars.length)
    // const yellowStars = Array(Math.floor(statistics.statistic)).fill(<FaStar color="yellow" />);
    // const whiteStars = Array(5 - yellowStars.length).fill(<FaStar />)
    return (
    <span>
        <span>
            {[...yellowStars, ...emptyStars]}
        </span>
        <span>({ statistics.num_reviews })</span>
    </span>
    )
};
