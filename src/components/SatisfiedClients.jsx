import React from 'react';
import Heading from '../common/Heading';
import Icon from '../utils/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SATISFIED_CLIENT_LIST } from '../utils/helper';
import { Autoplay, Pagination } from 'swiper/modules'; 
import 'swiper/css/autoplay'; 

const SatisfiedClients = () => {
  return (
    <div className="lg:pt-[51px] md:pt-10 sm:pt-8 pt-[18px] lg:pb-[66px] md:pb-12 pb-[41px]">
      <div className="max-w-[1920px] mx-auto">
        <div className="max-w-[586px] mx-auto">
          <p className="font-light sm:text-3xl sm:leading-custom-6xl text-2xl leading-custom-5xl text-center font-maisonLight pb-[7px]">
            Driving digital revenue for over
          </p>
          <Heading text={'1,400+ SATISFIED CLIENTS.'} classStyle={'text-center'} />
          <img
            src="/assets/images/svg/red-line.svg"
            alt="red-line"
            className="lg:max-w-[119.62px] max-w-[84px] lg:ms-18 xl:ms-2 sm:ms-20 max-sm:-mt-[52px] ms-10"
          />
        </div>
        <div className="xl:flex hidden justify-center gap-[60px] max-w-[1920px] mx-auto pt-[66.5px]">
          {SATISFIED_CLIENT_LIST.map((data, index) => (
            <div key={index}>
              <div
                className={`${data.bgClass} bg-cover bg-no-repeat bg-center p-[35px_29px_33px_29px] max-w-[440px] h-full group`}
              >
                <div className="max-w-[382px] p-[38px_24px_31px_24px] bg-white rounded-[25px]">
                  {data.title && (
                    <div className="-mt-[55px] -ms-1 rounded-full py-[9px] max-w-[165px] px-3 group-hover:bg-black transition-all duration-500">
                      <p className="text-xs group-hover:text-white text-black leading-5 font-semibold font-maisonMedium transition-all duration-500">
                        {data.title}
                      </p>
                    </div>
                  )}
                  <a href="/">
                    <img
                      src={data.logo}
                      alt="logo"
                      className={`${index === 0
                          ? 'max-w-[131px] pt-5'
                          : index === SATISFIED_CLIENT_LIST.length - 1
                            ? 'max-w-[49px] pt-0'
                            : 'max-w-[149.73px] pt-5'
                        }`}
                    />
                  </a>
                  <p className="font-maisonLight font-light text-2xl leading-custom-5xl sm:text-3xl sm:leading-custom-6xl pt-6">
                    {data.description}
                  </p>
                  <p className="text-custom-lg leading-5 font-normal font-maisonMono pt-6">{data.details}</p>
                  <button className="font-semibold font-maisonMedium text-custom-lg text-nowrap leading-5 max-w-[97px] flex gap-[9px] items-center pt-[54px] transition-all duration-500 group">
                    Learn More{' '}
                    <Icon
                      classStyle={'group-hover:translate-x-1 transition-all duration-500'}
                      iconName={'arrowIcon'}
                    />
                  </button>
                </div>
                <div className="flex gap-[46px] justify-center md:gap-[62px] pt-[13px]">
                  {data.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <p className="font-bold font-testSöhneSchmal sm:text-custom-3xl leading-custom-8xl text-custom-2xl">
                        {stat.value}
                      </p>
                      <p className="leading-custom-lg font-medium font-maisonMedium text-custom-lg">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="xl:hidden block sm:mt-12 mt-[90px]">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
            }}
            pagination={{
              el: '.custom-pagination',
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className} custom-bullet"></span>`,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Pagination]} 
          >
            {SATISFIED_CLIENT_LIST.map((data, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`${data.bgClass} bg-cover bg-no-repeat group bg-center p-[35px_20px_33px_20px] w-full xl:max-w-[440px] h-full`}
                >
                  <div className="xl:max-w-[382px] p-[38px_20px_32px_22px] bg-white rounded-[25px]">
                    {data.title && (
                      <div className="-mt-[55px] -ms-1 rounded-full py-[9px] max-w-[165px] px-3 group-hover:bg-black transition-all duration-500">
                        <p className="text-xs group-hover:text-white text-black leading-5 font-semibold font-maisonMedium transition-all duration-500">
                          {data.title}
                        </p>
                      </div>
                    )}
                    <a href="/">
                      <img
                        src={data.logo}
                        alt="logo"
                        className={`${index === 0
                            ? 'max-w-[131px] pt-5'
                            : index === SATISFIED_CLIENT_LIST.length - 1
                              ? 'max-w-[49px] pt-0'
                              : 'max-w-[149.73px] pt-5'
                          }`}
                      />
                    </a>
                    <p className="font-maisonLight font-light text-2xl leading-custom-5xl pt-6">
                      {data.description}
                    </p>
                    <p className="text-custom-lg leading-5 font-normal font-maisonMono pt-6">{data.details}</p>
                    <button
                      className="font-semibold font-maisonMedium text-custom-lg leading-5 xl:max-w-[97px] flex gap-[9px] items-center pt-[54px] transition-all duration-500 group"
                    >
                      Learn More{' '}
                      <Icon
                        classStyle={'group-hover:translate-x-1 transition-all duration-500'}
                        iconName={'arrowIcon'}
                      />
                    </button>
                  </div>
                  <div className="flex gap-[46px] pt-[13px] justify-center">
                    {data.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col">
                        <p className="font-bold font-testSöhneSchmal leading-custom-8xl text-custom-2xl">
                          {stat.value}
                        </p>
                        <p className="leading-custom-lg font-medium font-maisonMedium text-custom-lg">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='mt-6 lg:mt-8'>
            <div className="custom-pagination flex justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfiedClients;
