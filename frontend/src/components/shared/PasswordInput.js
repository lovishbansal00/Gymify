import React from "react";

const TextInput = ({ label, placeholder, value, setValue }) => {
    return (
        <div className="textInputDiv flex flex-col w-full space-y-2">
            <label for={label} className="font-semibold">
                {label}
            </label>
            <input
                type="password"
                placeholder={placeholder}
                className="border border-solid rounded border-gray-400 p-2 placeholder-gray-500"
                id={label}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />
        </div>
    );
};

export default TextInput;