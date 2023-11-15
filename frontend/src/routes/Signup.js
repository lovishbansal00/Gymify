import React from "react";
import { Icon } from '@iconify/react';
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link } from "react-router-dom";

const SignupComponent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            {/*logo  */}
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width="150" />
            </div>

            {/*input region*/}
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                <div className="font-bold mb-4 text-2xl">
                    Sign up for free to start listening.
                </div>

                <TextInput
                    label="Email Address"
                    placeholder="Enter your email address"
                    className="my-6"
                />
                <TextInput
                    label="Confirm Email Address"
                    placeholder="Enter your email again"
                    className="mb-6"
                />

                <PasswordInput
                    label="Create Password"
                    placeholder="Enter a strong password here"
                />

                <div className="w-full flex justify-between items-center space-x-8">
                    <TextInput
                        label="First Name"
                        placeholder="Enter your First Name"
                        className="my-6"
                    />
                    <TextInput
                        label="Last Name"
                        placeholder="Enter your Last Name"
                        className="my-6"
                    />
                </div>

                {/* login button */}
                <div className="w-full flex items-center justify-center my-8">
                    <button className="bg-green-400 font-semibold p-3 px-10 rounded-full">
                        SIgn Up
                    </button>
                </div>

                <div className="w-fullborder border-solid border-gray-300 "></div>

                {/* Signup region */}
                <div className="my-6 font-semibold text-lg">
                    Already have an account?
                </div>

                {/* Signup Button */}
                <div className="border border-gray-400 w-full text-gray-400 flex items-center justify-center py-4 rounded-full font-bold">
                    <Link to="/login">
                        LOG IN INSTEAD
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;