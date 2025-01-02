import React from 'react'
import Header from '../components/Header'
import Description from '../common/Description'

const Hero = () => {
    return (
        <div className='bg-cover bg-no-repeat bg-center sm:bg-hero max-2xl:min-h-screen xl:h-[896px] lg:bg-[100%_100%] mx-w-[1440px] max-sm:bg-dark-green max-sm:h-[640px] relative'>
           <img className='absolute left-0 top-0 sm:hidden block' src="/assets/images/webp/hero-vector.webp" alt="hero-vector" />
            <Header />
            <div className="container">
                <div className='max-w-[822px] mx-auto'>
                    <h1 className='sm:pt-[79px] pt-[43px] font-testSöhneSchmal sm:text-custom-5xl font-bold sm:leading-custom-11xl uppercase text-white max-w-[822px] mx-auto text-center text-6xl leading-custom-9xl'>Make marketing
                        <span className='block'></span>a growth machine</h1>
                    <img className='ml-[164px] max-lg:ml-[116px] max-2xl:ml-[160px] max-sm:max-w-[146px] max-sm:ml-10' src="/assets/images/svg/green-line.svg" alt="line" />
                </div>
                <Description classStyle={'pt-1 text-white sm:max-w-[656px] max-w-[319px] mx-auto font-light text-center sm:text-2xl text-custom-xl leading-7 sm:leading-custom-6xl'} text={'We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.'} />
                    <form action="" className="border-2 border-white mt-7 rounded-[50px] text-center py-4 sm:py-5 px-7 flex max-w-[448px] sm:mx-auto justify-between">
                        <input
                            id="email"
                            type="text"
                            placeholder="Enter Your Website"
                            className="bg-transparent font-normal outline-none font-MaisonNeue text-custom-lg leading-5 flex-grow placeholder:text-light-gray text-white"
                        aria-label="Enter your website"
                        required
                        />
                        <button
                        className="text-white text-custom-lg leading-5 font-maisonMedium font-semibold text-center">
                            Analyze
                        </button>
                    </form>
                <img className='pt-[66px] pointer-events-none sm:block hidden max-w-[924px] mx-auto w-full pb-24 xl:pb-12' src="/assets/images/webp/hero-image.webp" alt="hero-image" />
                <div className='sm:hidden block pt-12 pb-[31px]'>
                    <img className='max-w-[328px] mx-auto w-full pointer-events-none' src="/assets/images/webp/hero-mobile.webp" alt="hero-mobile" />
                </div>
            </div>
        </div>
    )
}

export default Hero