import ItemCard from "../components/custom/ItemCard";

import { items } from "../data.json"

export default function Home(params) {
    return (
        <ItemCard data={items[1]} />
    )
};
