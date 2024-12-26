import React, { useState, useEffect } from "react";
import Heading from "../common/Heading";
import CustomButton from '../common/CustomButton'
import { TABS_DATA } from '../utils/helper'

const Tab = ({ activeTab }) => {
    switch (activeTab) {
        case "industry":
            return (
                <div className="relative bg-cover bg-tab-one !max-w-[1280px] bg-center sm:px-20 sm:py-16 px-4 py-6 bg-no-repeat lg:h-[720px]">
                    <div className="lg:flex justify-between">
                        <div className="lg:w-4/12 w-full">
                            <Heading classStyle={'text-white'} text={'The smartest minds in the industry'} />
                            <p className="text-3xl leading-custom-6xl font-light font-maisonLight text-left text-white pb-8 max-sm:pb-4 max-sm:text-2xl pt-2">
                                Answer our questions and listen to our answers.</p>
                            <p className="font-normal text-custom-lg leading-5 font-maisonMono text-left text-white pb-[98px] max-lg:pb-[57px] max-sm:text-xl max-w-[373px]">
                                This is placeholder but can add more to the business of building, some epic fails (and how to avoid them), and everything building science.
                            </p>
                            <div className="flex max-lg:mb-5 max-sm:w-full">
                                <button className="bg-red-500 max-sm:w-full max-sm:justify-center flex px-[32px] py-[31px] text-white leading-custom-lg text-custom-lg"><img className="mr-[10px]" src="./assets/images/svg/subscribe-svg.svg" alt="" />
                                    Subscribe to Podcast <span className="text-custom-sm leading-custom-xs ml-1 mt-[10px]"> ▼</span>
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-2/12 w-full">
                            <div className="flex lg:flex-col gap-5 sm:justify-between items-center max-sm:overflow-auto">
                                <img src="/assets/images/webp/home-deploy-logo.webp" alt="Depot-Logo" className="max-w-[66px] lg:pb-20" />
                                <img src="/assets/images/webp/ai-logo.webp" alt="ai-Logo" className="max-w-[66px] lg:pb-[62px]" />
                                <img src="/assets/images/webp/lowes-logo.webp" alt="Lowes-Logo" className="max-w-[92px] lg:pb-[10px]" />
                                <img src="/assets/images/webp/build-logo.webp" alt="Build-Logo" className="lg:max-w-[191px] max-w-[100px] lg:pb-[31.77px]" />
                                <img src="/assets/images/webp/houzz-logo.webp" alt="Houzz-Logo" className="max-w-[117px]" />
                            </div>
                        </div>
                        <div className="lg:w-5/12 w-full max-lg:mt-5">
                            <img className="lg:h-[573px] w-full" src="./assets/images/webp/tab-card-image.webp" alt="tab-card" />
                        </div>
                    </div>
                </div>
            );
        case "roi":
            return (
                <div className="relative md:bg-tab-two bg-cover bg-no-repeat bg-center pt-[37px] md:pt-14 lg:pt-20 max-w-[1280px] h-[720px] max-md:bg-mobile-tab-two">
                    <Heading classStyle={'text-white ps-[19px] md:ps-20'} text={'Proven Results'} />
                    <p className="text-3xl font-light font-maisonLight text-left text-white ps-[19px] md:ps-20">
                        Not hopes and prayers. </p>
                    <div className="md:block hidden lg:max-w-[293px] absolute yellow-circle bottom-0 xl:bottom-[10%] left-[-5%]">
                        <img className="lg:max-w-[293px]" src="./assets/images/webp/tab-two-yellow-circle.webp" alt="circle" />
                    </div>
                    <div className="md:block hidden lg:max-w-[189px] green-circle absolute top-[34%] right-[-5%]">
                        <img src="./assets/images/webp/tab-two-green-circle.webp" alt="circle" />
                    </div>
                </div>
            );
        case "proprietary":
            return (
                <div className="max-w-[1280px] bg-mobile-tab-three sm:bg-tab-three bg-cover bg-no-repeat bg-center px-[79px] pt-[75px] max-sm:py-9 max-lg:pt-[45px] lg:h-[720px] max-md:px-[32px] max-sm:px-4">
                    <div className="lg:flex-row flex justify-between flex-col">
                        <div className="lg:w-5/12 w-full">
                            <Heading classStyle={'text-white uppercase'} text={'Project Radar'} />
                            <img src="./assets/images/webp/tab-three-logo.webp" alt="tab-logo" className="pt-[7px] max-w-[72.86px] w-full" />
                            <p className="sm:text-3xl lg:max-w-[360px] font-light font-maisonLight text-left text-white sm:leading-custom-6xl pt-10 md:pt-20 lg:pt-[10rem] pb-[14px] text-2xl leading-custom-5xl">
                                Lorem ipsum what this product actually does. </p>
                            <p className="text-white text-custom-lg font-normal leading-5 lg:max-w-[373px] font-maisonMono">This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                            <div className="flex mt-12 max-lg:pb-14 max-sm:pb-[21px] max-sm:w-full max-sm:justify-center max-sm:items-center">
                                <CustomButton classStyle={'!px-8 !py-[31px] max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center'} text={'Call to Action Somewhere'} />
                            </div>
                        </div>
                        <div className="lg:w-5/12 w-full flex max-lg:justify-center max-lg:items-center">
                            <img src="/assets/images/webp/tab-three-card.webp" alt="Tab-Three-Map" />
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

const GrowthPartner = () => {
        const [activeTab, setActiveTab] = useState("industry");

        useEffect(() => {
            const queryParams = new URLSearchParams(window.location.search);
            queryParams.set("tab", activeTab); 
            window.history.pushState(null, "", `?${queryParams.toString()}`); 
        }, [activeTab]);

        useEffect(() => {
            const queryParams = new URLSearchParams(window.location.search);
            const initialTab = queryParams.get("tab");
            if (initialTab && TABS_DATA.some(tab => tab.id === initialTab)) {
                setActiveTab(initialTab);
            }
        }, []);

    return (
        <div className="py-14 flex justify-center relative">
            <div className="container max-w-[1280px] mx-auto">
                <Heading classStyle={'text-center'} text={'The Growth Partner'} />
                <p className="text-3xl font-light font-maisonLight text-center pb-[43px] max-sm:pb-[19px] max-sm:text-2xl">you’ve been looking for.</p>
                <p className="text-custom-lg font-maisonMono font-normal text-center lg:pb-[105px] pb-16 max-sm:pb-[56px]">Businesses trust Venveo to power growth.</p>
                <div className="nav-tabs">
                    <div className="flex justify-center gap-20 max-sm:gap-10 pb-14 tab-list max-sm:overflow-auto">
                        {TABS_DATA.map((tab) => (
                            <button
                                key={tab.id}
                                className={`tab text-lg text-light-black font-semibold whitespace-nowrap relative ${activeTab === tab.id ? "!text-black opacity-100" : ""
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <img
                                        className="absolute top-full max-w-[155px] sm:max-w-[183.85px] left-1/2 transform -translate-x-1/2"
                                        alt="active-line"
                                        src="./assets/images/webp/tab-active-line.webp"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                    <div className="tab-content">
                        <Tab activeTab={activeTab} />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 lg:bottom-7 -z-10 left-0"><img src="/assets/images/webp/tab-green-line.webp" alt="tab-line" className="w-full" /></div>
        </div>
    );
};

export default GrowthPartner;
