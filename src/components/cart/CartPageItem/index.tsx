import { FaTrash } from 'react-icons/fa'
import { CartPageItemProps } from '../../../interfaces'
import { Link } from 'react-router-dom'
import { useData } from '../../../context/AppContext'

const CartPageItem: React.FC<CartPageItemProps> = ({ cartItem }) => {

    const { removeFromCart } = useData()

    return (
        <div className="grid min-w-[750px] w-full grid-cols-8">
            <div className="">
                <div className="bg-[#F9F1E7] overflow-hidden max-w-32 h-32 flex items-center rounded-xl">
                    <img loading="lazy" className='w-full h-full object-cover' src={cartItem?.product?.image} alt={cartItem?.product?.title + "_img"} />
                </div>
            </div>
            <div className="text-[#9F9F9F] flex items-center justify-center">
                <Link to={`/products/${cartItem.product.id}`}>{cartItem?.product?.title}</Link>
            </div>
            <div className="text-[#9F9F9F] flex items-center justify-center">
                <p>{cartItem?.features?.size}</p>
            </div>
            <div className="text-[#9F9F9F] gap-1 flex items-center justify-center">
                <span className={`${cartItem?.features?.color === 'ochre' ? 'bg-ochre' : cartItem?.features?.color === 'black' ? 'bg-black' : 'bg-[#816DFA]'} w-6 h-6 rounded-full`}></span>
                <p>{cartItem?.features?.color}</p>
            </div>
            <div className="text-[#9F9F9F] flex items-center justify-center">
                <p>Rs. {cartItem?.product?.price}</p>
            </div>
            <div className="flex items-center justify-center">
                <span className="border border-[#9F9F9F] flex items-center justify-center rounded w-10 h-10 p-4">{cartItem.features.quantity}</span>
            </div>
            <div className="flex items-center justify-center">
                <p>Rs. {cartItem?.product?.price * cartItem?.features?.quantity}</p>
            </div>
            <div className="text-ochre text-2xl flex items-center justify-center">
                <button onClick={() => removeFromCart(cartItem.id)}><FaTrash /></button>
            </div>
        </div>
    )
}

export default CartPageItem