import React from 'react';
import Heading from '../common/Heading';
import Icon from '../utils/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SATISFIED_CLIENT_LIST } from '../utils/helper';

const SatisfiedClients = () => {
  return (
    <div className="lg:pt-[51px] md:pt-10 sm:pt-8 pt-[18px] lg:pb-[66px] md:pb-12 pb-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="max-w-[586px] mx-auto">
          <p className="font-light sm:text-3xl sm:leading-custom-6xl text-2xl leading-custom-5xl text-center font-maisonLight pb-[7px]">
            Driving digital revenue for over
          </p>
          <Heading text={'1,400+ SATISFIED CLIENTS.'} classStyle={'text-center'} />
          <img
            src="/assets/images/svg/red-line.svg"
            alt="red-line"
            className="lg:max-w-[119.62px] max-w-[84px] lg:ms-2 sm:ms-20 max-sm:-mt-[52px] ms-10"
          />
        </div>
        <div className='xl:flex hidden justify-center gap-[60px] max-w-[1920px] mx-auto pt-[88px]'>
          {SATISFIED_CLIENT_LIST.map((card, index) => (
            <div key={index}>
              <div
                className={`${card.bgClass} bg-cover bg-no-repeat bg-center p-[35px_29px_33px_29px] max-w-[440px] h-[500px]`}
              >
                <div className="max-w-[382px] p-[38px_24px_31px_24px] bg-white rounded-[25px]">
                  {card.title && (
                    <div className="-mt-[55px] -ms-1 rounded-full py-[9px] max-w-[165px] px-3 group hover:bg-black transition-all duration-500">
                      <p className="text-xs group-hover:text-white text-black leading-5 font-semibold font-MaisonNeue transition-all duration-500">
                        {card.title}
                      </p>
                    </div>
                  )}
                  <a href="/">
                    <img
                      src={card.logo}
                      alt="logo"
                      className={`${index === 0 ? 'max-w-[131px] pt-5' : index === SATISFIED_CLIENT_LIST.length - 1 ? 'max-w-[49px] pt-0' : 'max-w-[149.73px] pt-5'}`}
                    />
                  </a>

                  <p className="font-maisonLight font-light text-2xl leading-custom-5xl sm:text-3xl sm:leading-custom-6xl pt-6">
                    {card.description}
                  </p>
                  <p className="text-custom-lg leading-5 font-normal font-maisonMono pt-6">{card.details}</p>
                  <a
                    className="font-semibold text-custom-lg leading-5 max-w-[97px] flex gap-[9px] items-center pt-[54px] transition-all duration-500 group"
                    href="/"
                  >
                    Learn More{' '}
                    <Icon classStyle={'group-hover:translate-x-1 transition-all duration-500'} iconName={'arrowIcon'} />
                  </a>
                </div>
                <div className="flex gap-[46px] md:gap-[62px] pt-[13px]">
                  {card.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <p className="font-bold font-testSöhneSchmal sm:text-custom-3xl leading-custom-8xl text-custom-2xl">
                        {stat.value}
                      </p>
                      <p className="leading-custom-lg text-custom-lg">{stat.label}</p>
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
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {SATISFIED_CLIENT_LIST.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`${card.bgClass} bg-cover bg-no-repeat bg-center p-[35px_20px_33px_20px] max-w-[440px] h-[500px]`}
                >
                  <div className="max-w-[382px] p-[38px_20px_32px_22px] bg-white rounded-[25px]">
                    {card.title && (
                      <div className="-mt-[55px] -ms-1 rounded-full py-[9px] max-w-[165px] px-3 group hover:bg-black transition-all duration-500">
                        <p className="text-xs group-hover:text-white text-black leading-5 font-semibold font-MaisonNeue transition-all duration-500">
                          {card.title}
                        </p>
                      </div>
                    )}
                    <a href="/">
                      <img
                        src={card.logo}
                        alt="logo"
                        className={`${index === 0 ? 'max-w-[131px] pt-5' : index === SATISFIED_CLIENT_LIST.length - 1 ? 'max-w-[49px] pt-0' : 'max-w-[149.73px] pt-5'}`}
                      />
                    </a>
                    <p className="font-maisonLight font-light text-2xl leading-custom-5xl pt-6">
                      {card.description}
                    </p>
                    <p className="text-custom-lg leading-5 font-normal font-maisonMono pt-6">{card.details}</p>
                    <a
                      className="font-semibold text-custom-lg leading-5 max-w-[97px] flex gap-[9px] items-center pt-[54px] transition-all duration-500 group"
                      href="/"
                    >
                      Learn More{' '}
                      <Icon classStyle={'group-hover:translate-x-1 transition-all duration-500'} iconName={'arrowIcon'} />
                    </a>
                  </div>
                  <div className="flex gap-[46px] pt-[13px]">
                    {card.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col">
                        <p className="font-bold font-testSöhneSchmal leading-custom-8xl text-custom-2xl">
                          {stat.value}
                        </p>
                        <p className="leading-custom-lg text-custom-lg">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SatisfiedClients;
