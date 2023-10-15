import React, { useLayoutEffect, useRef, useState } from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import { Controller, FreeMode, Navigation, Thumbs } from 'swiper/modules'

export default function AdSwiper() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>()
    const [firstSwiper] = useState<SwiperClass>()
    const [secondSwiper] = useState<SwiperClass>()
    const swiper1Ref = useRef<React.MutableRefObject<null>>(null)
    const swiper2Ref = useRef()

    useLayoutEffect(() => {
        if (swiper1Ref.current !== null) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            swiper1Ref.current.controller.control = swiper2Ref.current
        }
    }, [])

    return (
        <div className="mx-4 mb-4 z-0 max-w-[400px]">
            <Swiper
                onSwiper={(swiper) => {
                    if (swiper1Ref.current !== null) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        swiper1Ref.current = swiper
                    }
                }}
                controller={{ control: secondSwiper }}
                spaceBetween={10}
                slidesPerView={1}
                grabCursor={true}
                navigation={true}
                loop={true}
                lazyPreloadPrevNext={1}
                thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
                modules={[FreeMode, Navigation, Thumbs, Controller]}
            >
                <SwiperSlide className="w-full rounded-3xl h-full">
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl object-cover"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={`https://media.istockphoto.com/id/1463890146/vi/anh/ph%C3%B9-h%E1%BB%A3p-v%E1%BB%9Bi-%C4%91%C3%A0o-t%E1%BA%A1o-ph%E1%BB%A5-n%E1%BB%AF-b%C3%AAn-ngo%C3%A0i.webp?s=2048x2048&w=is&k=20&c=HPVzZV__JNcsDoIko1Q5iZP_coZF_22ePm7x1LhyygE=`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={`https://media.istockphoto.com/id/1312358262/vi/anh/ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-h%E1%BA%A5p-d%E1%BA%ABn-m%E1%BB%89m-c%C6%B0%E1%BB%9Di-t%E1%BA%ADp-luy%E1%BB%87n-v%E1%BB%9Bi-m%E1%BB%99t-s%E1%BB%A3i-d%C3%A2y-nh%E1%BA%A3y.jpg?s=2048x2048&w=is&k=20&c=g8bPqA8sb9Sh8lIgFLey3GRUXqy4nFtm3CFSGIPvwKI=`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
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
                className="w-full h-full mt-4"
            >
                <SwiperSlide className="w-[70px]">
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>

                <SwiperSlide className="w-[70px]">
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-[70px]">
                    <img
                        src={`https://images.unsplash.com/photo-1697118725645-564a84431afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80`}
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
