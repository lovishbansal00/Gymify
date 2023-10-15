import React from "react";
import { Icon } from '@iconify/react';
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";

const LoginComponent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            {/*logo  */}
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width="150" />
            </div>

            {/*input region*/}
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                <div className="font-bold mb-6">
                    To continue, log in to Spotify.
                </div>

                <TextInput
                    label="Email ID or Username"
                    placeholder="Enter your email ID or username"
                    className="my-6"
                />

                <PasswordInput label="Password" placeholder="Password" />

                {/* login button */}
                <div className="w-full flex items-center justify-end my-8">
                    <button className="bg-green-400 font-semibold p-3 px-10 rounded-full">
                        Log In
                    </button>
                </div>

                <div className="w-fullborder border-solid border-gray-300 "></div>

                {/* Signup region */}
                <div className="my-6 font-semibold text-lg">
                    Don't have an account?
                </div>

                {/* Signup Button */}
                <div className="border border-gray-400 w-full text-gray-400 flex items-center justify-center py-4 rounded-full font-bold">
                    SIGN UP FOR SPOTIFY
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;