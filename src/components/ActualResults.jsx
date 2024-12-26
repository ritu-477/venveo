import React from 'react';
import Heading from "../common/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ACTUAL_RESULTS } from '../utils/helper';

const ActualResults = () => {
    return (
        <div className="bg-actual bg-no-repeat bg-center bg-cover text-white pt-[67px] lg:pt-[119px] pb-[17px] mt-10 relative">
            <p className="font-maisonLight max-sm:px-4 font-light text-3xl leading-custom-6xl text-white text-center">
                Actual businesses.
            </p>
            <Heading text={"Actual results."} classStyle={"text-center text-white max-sm:px-4"} />
            <p className="sm:mt-[46px] mt-[22px] max-sm:px-4 md:mb-[81px] mb-[39px] text-custom-lg leading-5 font-maisonMono font-normal text-center">
                Businesses trust Venveo to power growth.
            </p>
            <button
                className="absolute swiper-button-prev top-1/2 transform -translate-y-1/2 3xl:-left-6 lg:-left-5 -left-2 z-10">
                <img src="/assets/images/svg/prev-button.svg" className='sm:w-[71px] sm:h-[118px] h-[88.5px] w-[45.75px]' alt="prev" />
            </button>
            <button
                className="absolute swiper-button-next cursor-pointer top-1/2 transform -translate-y-1/2 3xl:-right-6 lg:-right-5 -right-2 z-10">
                <img src="/assets/images/svg/next-button.svg" alt="next" className='sm:w-[71px] sm:h-[118px] h-[88.5px] w-[45.75px]' />
            </button>
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1.5}
                centeredSlides={true}
                initialSlide={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 1.5 },
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                    renderBullet: (index, className) =>
                        `<span class="${className} custom-bullet"></span>`,
                }}
            >
                {ACTUAL_RESULTS.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="text-center relative mb-20">
                            <div className="relative">
                                <img
                                    src={testimonial.videoThumbnail}
                                    alt="Thumbnail"
                                    className="!max-w-[640px] w-full mx-auto object-cover rounded transition-all duration-300 ease-in-out"
                                />
                                <div className="layer absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                            <p className="mt-4 text-2xl leading-custom-5xl sm:text-3xl sm:leading-custom-7xl font-light font-maisonLight max-w-[251px] sm:max-w-[640px] md:mt-[74px] mx-auto">
                                "{testimonial.description}"
                            </p>
                            <p className="mt-[23px] max-sm:px-4 text-[15px] leading-[20px] font-maisonMono font-normal">
                                {testimonial.name}
                            </p>
                            <p className="text-sm max-sm:px-4 text-[15px] leading-[20px] font-maisonMono font-normal">
                                {testimonial.title}
                            </p>
                            <img
                                src={testimonial.companyLogo}
                                alt="Company Logo"
                                className="mx-auto mt-4 w-12"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-pagination flex justify-center mt-6 lg:mt-8 mb-6"></div>
        </div>
    );
};

export default ActualResults;