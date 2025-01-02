import React from "react";
import { FOOTER_DATA, FOOTER_LIST } from "../utils/helper"; 
import Icon from "../utils/icons";

function Footer() {
  const { logo, visit, contact, socialLinks, footerPolicies } = FOOTER_LIST;

  return (
    <footer className="bg-dark-green text-white pt-[57px] lg:pt-[90px] pb-[86px] lg:pb-[104px]">
      <div className="container max-w-[1353px] mx-auto grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 max-sm:gap-4">
        {FOOTER_DATA.map((obj, index) => (
          <div
            key={index}
            className={`max-xl:pb-10 max-w-[169px] ${index === 3 ? 'xl:-ml-[75px]' : ''
              }`}
          >
            <ul>
              <li className="font-medium text-xs leading-custom-md md:mb-6 mb-4 uppercase">
                {obj.title}
              </li>
              {obj.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    className="font-maisonLight text-custom-lg text-nowrap leading-custom-6xl hover:text-green transition-all duration-500"
                    href={link.href} target="_blank">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="text-center md:text-left xl:-ml-[180px]">
          <p className="mb-4 text-3xl font-maisonLight">Get weekly data — and insights.</p>
          <form className="border-2 border-white mt-[30px] text-white rounded-[50px] text-center py-4 sm:py-5 px-5 xl:px-7 flex w-full xl:max-w-[448px] sm:mx-auto justify-between">
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent outline-none w-full placeholder:text-white text-white text-custom-lg font-normal leading-5 font-MaisonNeue"
              aria-label="Enter Your Email"
              required/>
            <button
              className="hover:text-white text-custom-xs text-nowrap leading-5 font-semibold text-center font-maisonDemi text-green transition-all duration-500">
              Get Started
            </button>
          </form>
        </div>
      </div>
      <div className="container max-w-[1353px] pt-14 lg:pt-20 mx-auto flex flex-wrap justify-between items-center text-center sm:text-left">
        <div className="lg:w-1/3 md:w-1/2 w-full mb-6 sm:mb-0">
          <a href="#">
            <img src={logo.src} alt={logo.alt} className="mx-auto sm:mx-0 mb-[22px] max-w-[44.8px]"/>
          </a>
          <p className="text-custom-md leading-5 max-w-[315px] max-sm:text-center max-sm:mx-auto">
            {logo.description}
          </p>
          <p className="text-custom-md leading-5 max-sm:text-center">
            {logo.copyright}
          </p>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full lg:pl-9 flex gap-8 md:gap-14 max-sm:justify-center lg:justify-center max-md:mt-5">
          <div className="flex flex-col">
            <p className="font-medium text-xs leading-custom-md pb-4 lg:pb-[30px]">{visit.title}</p>
            <a target="_blank" href={visit.link} className="text-custom-md leading-5 max-w-[228px]">
              {visit.address.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </a>
          </div>
          <div className="flex flex-col">
            <p className="font-medium pb-4 text-xs leading-custom-md lg:pb-[30px]">{contact.title}</p>
            <a
              target="_blank"
              href={contact.email.link}
              className="text-custom-md leading-5 font-normal border-b border-green w-full max-w-[104px]">
              {contact.email.text}
            </a>
            <a
              target="_blank"
              href={contact.phone.link}
              className="pt-[21px] text-nowrap font-normal text-custom-md leading-5 border-b border-green w-full max-w-[112px]">
              {contact.phone.text}
            </a>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full mt-6 lg:mt-0">
          <div className="flex max-sm:justify-center lg:justify-end space-x-4">
            {footerPolicies.map((policy, index) => (
              <a href="/" target="_blank" key={index} className="text-custom-md font-medium leading-5 font-maisonMedium">
                {policy}
              </a>
            ))}
          </div>
          <div className="flex max-sm:justify-center items-center lg:justify-end space-x-[34px] pt-[31px]">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="transition duration-700 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer">
                <Icon iconName={link.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
