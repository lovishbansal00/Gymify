import React from "react";
import { Icon } from '@iconify/react';
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper";


const SignupComponent = () => {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const Signup = async () => {
        if (email != confirmEmail) {
            alert("Emails do not match");
            return;
        }
        const data = { email, password, username, firstName, lastName };
        const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);
        if (response && !response.err) {
            alert("Successfully signed up!");
        } else {
            alert("Error signing up");
        }
    };


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
                    value={email}
                    setValue={setEmail}
                />
                <TextInput
                    label="Confirm Email Address"
                    placeholder="Enter your email again"
                    className="mb-6"
                    value={confirmEmail}
                    setValue={setConfirmEmail}
                />

                <TextInput
                    label="Username"
                    placeholder="Enter your username again"
                    className="mb-6"
                    value={username}
                    setValue={setUsername}
                />

                <PasswordInput
                    label="Create Password"
                    placeholder="Enter a strong password here"
                    value={password}
                    setValue={setPassword}
                />

                <div className="w-full flex justify-between items-center space-x-8">
                    <TextInput
                        label="First Name"
                        placeholder="Enter your First Name"
                        className="my-6"
                        value={firstName}
                        setValue={setFirstName}
                    />
                    <TextInput
                        label="Last Name"
                        placeholder="Enter your Last Name"
                        className="my-6"
                        value={lastName}
                        setValue={setLastName}
                    />
                </div>

                {/* Signup Button */}
                <div className="w-full flex items-center justify-center my-8">
                    <button
                        className="bg-green-400 font-semibold p-3 px-10 rounded-full"
                        onClick={(e) => {
                            e.preventDefault();
                            Signup();
                        }}
                    >
                        SIgn Up
                    </button>
                </div>

                <div className="w-fullborder border-solid border-gray-300 "></div>

                {/* login region */}
                <div className="my-6 font-semibold text-lg">
                    Already have an account?
                </div>

                {/* login button */}
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