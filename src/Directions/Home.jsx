import AsideNavigation from "../components/AsideNavigation";
import ImageSlider from "../components/ImageSlider";
import ItemCard from "../components/custom/ItemCard";

import { items, categories } from "../data.json"

export default function Home() {
    return (
        <>
            <section id="slider_section">
                <AsideNavigation categories={categories} />
                <ImageSlider />
            </section>
        </>
    )
};
