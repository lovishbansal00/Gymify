import React from "react";
import { Icon } from '@iconify/react';

const IconText = ({ iconName, displayText, active }) => {
    return (
        <div className="flex justify-start items-center cursor-pointer">
            <div className="py-2 px-5">
                <Icon
                    icon={iconName}
                    color={active ? "white" : "gray"}
                    fontSize={25}
                />
            </div>
            <div
                className={`${active ? "text-white" : "text-gray-400"} text-sm font-semibold hover:text-white`}
            >
                {displayText}
            </div>
        </div>
    );
}

export default IconText;