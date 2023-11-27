import BrowseTheRange from "../components/home/BrowseTheRange";
import Hero from "../components/home/Hero";
import HomeGrid from "../components/home/HomeGrid";
import HomeSlider from "../components/home/HomeSlider";
import OurProducts from "../components/home/OurProducts";

export default function HomePage() {
    return (
        <>
            <Hero />
            <BrowseTheRange />
            <OurProducts />
            <HomeSlider />
            <HomeGrid />
        </>
    )
}
