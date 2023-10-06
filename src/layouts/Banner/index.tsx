import ButtonPrimary from '../../components/ButtonPrimary';
import DataShow from '../../components/DataShow';
import couple from '../../assets/banner/couple-2.jpeg';
import bannerIconLarge from '../../assets/banner/banner-icon-large.svg';
import bannerIconSmall from '../../assets/banner/banner-icon-small.svg';

function Banner() {
    return (
        <div className="md:flex bg-F2F0F1 pt-10">
            <div className="flex-1 mx-lg mt-lg mt-md">
                <p className="font-bold text-4xl mb-5 mx-sm md:leading-[64px] md:text-[64px] md:font-bold md:w-[577px]">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </p>
                <p className="mx-sm md:mt-8">
                    Browse through our diverse range of meticulously crafted
                    garments, designed to bring out your individuality and cater
                    to your sense of style.
                </p>
                <ButtonPrimary className="w-full my-6 md:mt-8 md:mb-12" />
                <div className="flex mx-14 gap-13 flex-wrap justify-center md:items-center">
                    <DataShow
                        title="International Brands"
                        number={200}
                        className="border-r border-solid border-r-black pr-4 border-opacity-10"
                    />
                    <DataShow
                        title="High-Quality Products"
                        number={2500}
                        className="pl-4 md:border-r md:border-solid md:border-r-black md:pr-4 md:border-opacity-10"
                    />
                    <DataShow
                        title="Happy Customers"
                        number={30000}
                        className="justify-items-center mt-3 md:mt-0 md:pl-4"
                    />
                </div>
            </div>

            <div className="relative flex-1 mx-lg md:flex md:justify-center overflow-hidden mt-md">
                <img
                    src={couple}
                    alt="couple.png"
                    className="md:object-cover md:scale-150 md:h-[662px] md:mt-24"
                />
                <img
                    src={bannerIconLarge}
                    alt=""
                    className="absolute top-10 right-5"
                />
                <img
                    src={bannerIconSmall}
                    alt=""
                    className="absolute top-32 left-7"
                />
            </div>
        </div>
    );
}

export default Banner;
