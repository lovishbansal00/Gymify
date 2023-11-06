import React from "react";

const TextWithHover = ({ displayText, active }) => {
    return (
        <div className="flex justify-start items-center cursor-pointer">
            <div
                className={`${active ? "text-white" : "text-gray-500"} font-semibold text-lg hover:text-white text-lg`}
            >
                {displayText}
            </div>
        </div>
    );
}

export default TextWithHover;