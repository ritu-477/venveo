import React from 'react'
import Header from '../components/Header'
import Description from '../common/Description'

const Hero = () => {
    return (
        <div className='bg-cover bg-no-repeat bg-center sm:bg-hero max-2xl:min-h-screen xl:h-[869px] lg:bg-[100%_100%] mx-w-[1440px] max-sm:bg-dark-green max-sm:h-[640px] relative'>
           <img className='absolute left-0 top-0 sm:hidden block' src="/assets/images/webp/hero-vector.webp" alt="hero-vector" />
            <Header />
            <div className="container">
                <div className='max-w-[822px] mx-auto'>
                    <h1 className='sm:pt-[79px] pt-[43px] sm:text-custom-9xl font-testSöhneSchmal max-xl:text-custom-8xl sm:leading-custom-9xl uppercase text-white max-w-[822px] mx-auto text-center text-6xl leading-custom-lg'>Make marketing
                        <span className='block'></span>a growth machine</h1>
                    <img className='ml-[164px] max-2xl:ml-[160px] max-sm:max-w-[146px] max-sm:ml-10' src="/assets/images/svg/green-line.svg" alt="line" />
                </div>
                <Description classStyle={'pt-3 sm:max-w-[656px] max-w-[319px] mx-auto font-light'} text={'We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.'} />
                    <form action="" className="border-2 border-white mt-[30px] rounded-[50px] text-center py-4 sm:py-5 px-7 flex max-w-[448px] sm:mx-auto justify-between">
                        <input
                            id="email"
                            type="text"
                            placeholder="Enter Your Website"
                            className="bg-transparent outline-none flex-grow placeholder:text-light-gray text-light-gray"
                        aria-label="Enter your website"
                        required
                        />
                        <button
                            className="text-white text-custom-md leading-5 font-semibold text-center">
                            Analyze
                        </button>
                    </form>
                <img className='pt-[66px] pointer-events-none sm:block hidden max-w-[924px] mx-auto w-full pb-12' src="/assets/images/webp/hero-image.webp" alt="hero-image" />
                <div className='sm:hidden block py-12'>
                    <img className='max-w-[328px] w-full pointer-events-none' src="/assets/images/webp/hero-mobile.webp" alt="hero-mobile" />
                </div>
            </div>
        </div>
    )
}

export default Hero