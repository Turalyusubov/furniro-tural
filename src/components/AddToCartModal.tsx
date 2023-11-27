import { useData } from "../context/AppContext"
import ProductFeaturesComponent from "./ProductFeaturesComponent.tsx";

export default function AddToCartModal() {
    const {
        toggleCartModal,
        setToggleCartModal,
    } = useData()

    const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;

        if (target.classList.contains('parent-div')) {
            setToggleCartModal(false);
        }
    };

    return (
        <div onClick={(event) => handleBackgroundClick(event)} className={`${toggleCartModal ? '' : 'hidden'} parent-div fixed flex flex-col items-center justify-center inset-0 bg-black bg-opacity-60`}>
            <div className="bg-white flex flex-col gap-4 rounded-lg p-10">
                <ProductFeaturesComponent isPage={false} />
            </div>
        </div>
    )
}
