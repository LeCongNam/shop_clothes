import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import StarRatings from '../../StarRatings'

import image1 from '../../../assets/products/image1.png'

import { Link } from 'react-router-dom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function ListItem() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            className="md:mt-16"
            breakpoints={{
                350: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
        >
            {new Array(9).fill('').map((_, index) => (
                <SwiperSlide key={index}>
                    <Link
                        to="detail"
                        className=""
                        key={index}
                    >
                        <img
                            src={image1}
                            alt=""
                            className="md:max-w-full md:max-h-full"
                        />
                        <p className="text-base font-bold">T-SHIRT WITH TAPE DETAILS</p>
                        <div>
                            <StarRatings star={Math.random() * 5} />
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold">$130</span>
                            {true && <span className="opacity-40 line-through">$160</span>}
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ListItem
