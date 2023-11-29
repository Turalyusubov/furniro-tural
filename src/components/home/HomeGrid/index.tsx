import img2 from '../../../assets/img/grid/2.png'
import img3 from '../../../assets/img/grid/3.png'
import img4 from '../../../assets/img/grid/4.png'
import img5 from '../../../assets/img/grid/5.png'

const HomeGrid: React.FC = () => {
    return (
        <div className='py-8 lg:py-20'>
            <p className='font-semibold text-[#616161] text-center lg:text-xl'>Share your setup with</p>
            <h2 className='font-bold text-[#3A3A3A] text-2xl lg:text-4xl text-center'>#FuniroFurniture</h2>
            <div className="overflow-hidden flex flex-col items-center">
                <div className="homegrid h-[90vh] gap-2 lg:gap-4 min-w-[150vh]">
                    <img loading="lazy" className='h-full w-full object-cover' src={img5} alt="grid-img" />
                    <img loading="lazy" className='h-full w-full object-cover' src={img3} alt="grid-img" />
                    <img loading="lazy" className='h-full w-full object-cover' src={img5} alt="grid-img" />
                    <img loading="lazy" className='h-full w-full object-cover' src={img3} alt="grid-img" />
                    <img loading="lazy" className='h-full w-full object-cover' src={img3} alt="grid-img" />
                    <img loading="lazy" className='h-full w-full object-cover' src={img4} alt="grid-img" />
                    <img loading="lazy" className='h-full w-full object-cover' src={img4} alt="grid-img" />
                    <img loading="lazy" className='h-full w-full object-cover' src={img3} alt="grid-img" />
                    <img loading="lazy" className='h-full w-full object-cover' src={img2} alt="grid-img" />
                </div>
            </div>

        </div>
    )
}

export default HomeGrid
