import React, { useLayoutEffect, useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import SwiperCore from 'swiper'

import { Controller, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import imgDetail from '../../assets/img_detail.png'

export default function AdSwiper() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>()
    const [firstSwiper] = useState<SwiperClass>()
    const [secondSwiper] = useState<SwiperClass>()
    const swiper1Ref = useRef<React.MutableRefObject<null>>(null)
    const swiper2Ref = useRef()

    useLayoutEffect(() => {
        if (swiper1Ref.current !== null) {
            // @ts-ignore
            swiper1Ref.current.controller.control = swiper2Ref.current
        }
    }, [])

    return (
        <div className="h-[550px] ">
            <Swiper
                onSwiper={(swiper) => {
                    if (swiper1Ref.current !== null) {
                        // @ts-ignore
                        swiper1Ref.current = swiper
                    }
                }}
                controller={{ control: secondSwiper }}
                spaceBetween={10}
                slidesPerView={1}
                grabCursor={true}
                navigation={true}
                thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
                modules={[FreeMode, Navigation, Thumbs, Controller]}
                className="w-[848px] h-[454px] rounded-xl"
            >
                <SwiperSlide>
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
            <Swiper
                controller={{ control: firstSwiper }}
                loop={false}
                spaceBetween={10}
                slidesPerView={3}
                watchSlidesProgress
                touchRatio={0.2}
                slideToClickedSlide={true}
                onSwiper={setThumbsSwiper}
                modules={[Navigation, Thumbs, Controller]}
                className="h-[100.4px] w-[848px] mt-[20px] rounded-xl"
            >
                <SwiperSlide className="w-[70px]">
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>

                <SwiperSlide className="w-[70px]">
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src={imgDetail}
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
