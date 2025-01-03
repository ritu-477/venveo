import React from 'react';

const Outsmart = () => {
    return (
        <div className="bg-outsmart lg:mt-[63px] max-md:mt-12 max-sm:mt-6 bg-cover bg-no-repeat lg:bg-[100%_100%] bg-center pt-[60px] pb-20 xl:ps-[117.43px] xl:pr-[225.9px] max-sm:py-12 mb-8 lg:mb-[57px]">
            <div className="container relative max-w-[1136.68px]">
                <img
                    src="/assets/images/svg/outsmart-arrow.svg"
                    alt="arrow-image"
                    className="absolute pointer-events-none 2xl:left-[34rem] xl:left-[33rem] xl:block hidden xl:top-[3.5rem]"/>
                <div className="md:flex justify-between items-center max-lg:flex-col">
                    <div className="flex-col">
                        <p className="text-custom-xs font-space font-normal leading-6 text-left pb-2 font-Mono max-lg:text-center">
                            Get a free competitive analysis on your market
                        </p>
                        <p className="text-custom-2xl !font-light font-maisonLight leading-10 text-left max-lg:text-center max-sm:text-2xl">
                            Outsmart your competition
                        </p>
                    </div>
                    <form className="bg-white  max-lg:mt-5 text-white justify-between rounded-[50px] text-center py-4 sm:py-5 px-7 flex max-w-[448px] w-full max-lg:mx-auto">
                        <input
                            id="email"
                            type="text"
                            placeholder="Enter Your Website"
                            className="bg-transparent outline-none font-MaisonNeue placeholder:text-black text-black text-custom-lg font-normal leading-5"
                            aria-label="Enter your website"
                            required/>
                        <button
                            className="text-black text-custom-lg font-maisonMedium leading-5 font-semibold text-center">
                            Analyze
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Outsmart;
