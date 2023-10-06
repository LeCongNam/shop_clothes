import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import StarRatings from '../StarRatings';
import SlideButton from './SlideButton';

function Comments() {
    return (
        <div className="flex mx-4 mt-12 flex-col gap-6 pt-20 relative md:mx-[100px]">
            <div className="flex">
                <p className="text-[32px] font-bold leading-9">
                    OUR HAPPY CUSTOMERS
                </p>
            </div>
            <div className="relative">
                <Swiper
                    loop={true}
                    breakpoints={{
                        390: {
                            slidesPerView: 1,
                        },
                        750: {
                            spaceBetween: 16,
                            slidesPerView: 3,
                        },
                        1080: {
                            spaceBetween: 16,
                            slidesPerView: 3,
                        },
                    }}>
                    <SlideButton />
                    {new Array(10).fill('').map((_, index) => (
                        <SwiperSlide
                            className="pt-12"
                            key={index}>
                            <div className="border border-black border-opacity-10 rounded-3xl px-6 py-6 md:px-8 md:py-7">
                                <StarRatings star={5.2} />
                                <span className="flex md:mt-4 md:mb-4">
                                    <p className="capitalize text-base font-bold">
                                        Sarah M.
                                    </p>
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-01AB31 text-2xl ml-1"
                                    />
                                </span>
                                <p>
                                    "I'm blown away by the quality and style of
                                    the clothes I received from Shop.co. From
                                    casual wear to elegant dresses, every piece
                                    I've bought has exceeded my expectations.”
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Comments;
