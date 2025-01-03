import React from "react";
import Icon from "../utils/icons";

const CustomButton = ({ text, classStyle}) => {
    return (
        <button
            className={`font-semibold group font-maisonMedium text-base leading-4 bg-green items-center sm:py-3 py-2 sm:px-5 px-4 flex gap-[5.37px] ${classStyle}`}>
            {text}
            <Icon classStyle={'group-hover:translate-x-0.5 transition-all duration-500'} iconName="buttonArrow"/>
        </button>
    );
};

export default CustomButton;