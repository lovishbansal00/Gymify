import React from "react";

const TextInput = ({ label, placeholder, className }) => {
    return (
        <div className={`textInputDiv flex flex-col w-full space-y-2 ${className}`}>
            <label for={label} className="font-semibold">
                {label}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className="border border-solid rounded border-gray-400 p-3 placeholder-gray-500"
                id={label}
            />
        </div>
    );
};

export default TextInput;