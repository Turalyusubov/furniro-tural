import PageHeading from "../components/PageHeading";
import FilterBar from "../components/shop/FilterBar";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import UpperFooter from "../layout/UpperFooter";
import products from "../data/products";

export default function ShopPage() {

    return (
        <>
            <PageHeading mainhead='Shop' />
            <FilterBar />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-8 lg:p-20">
                {products.map((product) => (<ProductCard key={product.id} product={product} />))}
            </div>
            <Pagination />
            <div className="mb-20"></div>
            <UpperFooter />
        </>
    )
}
