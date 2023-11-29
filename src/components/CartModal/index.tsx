import { useEffect } from 'react';
import { useData } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { CartModalItem } from '..';
import Close from '../../assets/icons/cart-modal/close-cart.svg'

const CartModal: React.FC = () => {
    const {
        isCartOpen,
        setIsCartOpen,
        isNavOpen,
        cartItems
    } = useData()

    useEffect(() => {
        if (isCartOpen) {
            document.body.classList.add('no-scroll');
        } else if (!isNavOpen) {
            document.body.classList.remove('no-scroll');
        }
    }, [isCartOpen])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsCartOpen(false)
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;

        if (target.classList.contains('parent-cart-div')) {
            setIsCartOpen(false);
        }
    };

    return (
        <div onClick={(event) => handleBackgroundClick(event)} className={`${!isCartOpen ? 'hidden' : 'block'} parent-cart-div fixed inset-0 duration-300 z-30  bg-black bg-opacity-50`}>
            <div className={`${!isCartOpen ? 'right-[-100%] w-0 overflow-hidden' : 'right-0 w-full lg:w-[30%]'}  bg-white fixed h-screen py-5 px-8`}>
                <div className="flex justify-between items-center">
                    <p className='font-semibold text-2xl'>Shopping Cart</p>
                    <button onClick={() => setIsCartOpen(false)}>
                        <img loading="lazy" src={Close} alt="close" />
                    </button>
                </div>
                <span className='h-[1px] w-9/12 block bg-[#D9D9D9] my-6'></span>
                <div className="h-[60vh] overflow-y-auto flex flex-col gap-6">
                    {!cartItems.length && <p className="text-xl text-center font-medium opacity-60">There is no products in cart</p>}
                    {cartItems.map(p => <CartModalItem key={p.id} p={p} />)}
                </div>
                <div className="flex py-6">
                    <span>Subtotal</span>
                    <div className="text-center w-full text-ochre font-semibold">
                        <span>Rs. {cartItems.reduce((total, product) => total + (product.product.price * product.features.quantity), 0)}</span>
                    </div>
                </div>
                <div className="text-sm flex w-full gap-4 border-t border-t-[#D9D9D9] py-10">
                    <Link onClick={() => setIsCartOpen(false)} to='/cart' className='border w-1/2 border-black rounded-full p-1 text-center'>Cart</Link>
                    <Link onClick={() => setIsCartOpen(false)} to='/checkout' className='border w-1/2 text-center border-black rounded-full p-1'>Checkout</Link>
                </div>
            </div>
        </div>
    )
}

export default CartModal
