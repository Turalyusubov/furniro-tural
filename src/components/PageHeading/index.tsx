import { Link } from "react-router-dom";
import Arrow from '../../assets/icons/arrow-to-right.svg'
import Icon from '../../assets/website-icon/small-icon.png'
import { PageHeadingProps } from "../../interfaces";

const PageHeading: React.FC<PageHeadingProps> = ({ mainhead, subhead = mainhead }) => {
    return (
        <div className="relative">
            <div className="absolute inset-0 z-10 backdrop-blur-sm bg-white bg-opacity-25"></div>
            <div className="text-black flex justify-center pb-6 lg:pb-0 items-end lg:items-center h-[24vh] lg:h-[40vh] bg-center bg-no-repeat bg-cover bg-[url(/page-heading/background.jpg)]">
                <div className="relative gap-4 flex flex-col items-center z-20">
                    <img loading="lazy" className="w-fit" src={Icon} alt="icon" />
                    <h2 className="z-20 font-medium text-3xl lg:text-5xl">{mainhead}</h2>
                    <div className="z-20 flex gap-1">
                        <Link className="font-medium" to='/'>Home</Link>
                        <img loading="lazy" src={Arrow} alt="arrow" />
                        <span>{subhead}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeading
