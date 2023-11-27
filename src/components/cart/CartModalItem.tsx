import { AiFillCloseCircle } from "react-icons/ai";
import { useData } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { CartItemType } from "../../interfaces";

export default function CartModalItem({ p }: { p: CartItemType }) {
    const { removeFromCart, setIsCartOpen } = useData()

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
                <img loading="lazy" className='bg-[#B88E2F38] rounded-lg w-24 h-24 object-cover' src={p?.product?.image} alt={p?.product?.title + "_img"} />
                <div className="flex flex-col gap-2">
                    <Link onClick={() => setIsCartOpen(false)} to={`/products/${p?.product?.id}`}>{p?.product?.title} <span className="text-gray-400">({p.features.color}/{p.features.size})</span></Link>
                    <div className="text-xs flex items-center gap-3">
                        <span className='text-[16px]'>{p.features.quantity}</span>
                        <span>X</span>
                        <span className='text-ochre'>Rs. {p?.product?.price}</span>
                    </div>
                </div>
            </div>
            <button onClick={() => removeFromCart(p.id)} className='text-[#9F9F9F] text-2xl'>
                <AiFillCloseCircle />
            </button>
        </div>
    )
}
