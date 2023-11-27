import { Link } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import CartPageItem from "../components/cart/CartPageItem";
import { useData } from "../context/AppContext";

export default function CartPage() {
    const { cartItems } = useData()
    return (
        <>
            <PageHeading mainhead="Cart" />
            <div className="p-8 lg:p-20 flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-9/12 overflow-x-auto">
                    <div className="grid min-w-[750px] grid-cols-8 overflow-x-auto bg-[#F9F1E7] py-5 font-medium mb-6">
                        <span></span>
                        <span className="text-center">Product</span>
                        <span className="text-center">Size</span>
                        <span className="text-center">Color</span>
                        <span className="text-center">Price</span>
                        <span className="text-center">Quantity</span>
                        <span className="text-center">Subtotal</span>
                        <span></span>
                    </div>
                    <div className="flex w-full flex-col gap-6">
                        {!cartItems.length && <p className="text-xl text-center font-medium opacity-60">There is no products in cart</p>}
                        {cartItems.map(item => <CartPageItem key={item.id} cartItem={item} />)}
                    </div>
                </div>
                <div className="w-full max-h-[40vh] lg:w-3/12 bg-[#F9F1E7] text-center pt-4 px-10 pb-14">
                    <p className="font-semibold text-3xl mb-10">Cart Totals</p>
                    <div className="flex flex-col gap-4 mb-14">
                        <div className="flex gap-10 justify-between">
                            <span className="font-medium">Subtotal</span>
                            <span className="text-[#9F9F9F]">Rs. {cartItems.reduce((total, product) => total + ((product.product.oldprice ? product.product.oldprice : product.product.price) * product.features.quantity), 0)}</span>
                        </div>
                        <div className="flex gap-10 justify-between">
                            <span className="font-medium">Total</span>
                            <span className="text-ochre text-xl">Rs. {cartItems.reduce((total, product) => total + (product.product.price * product.features.quantity), 0)}</span>
                        </div>
                    </div>
                    <Link className="font-xl border border-black hover:bg-black hover:text-white duration-300 px-10 py-2 rounded-xl" to='/checkout'>Check Out</Link>
                </div>
            </div>
        </>
    )
}
