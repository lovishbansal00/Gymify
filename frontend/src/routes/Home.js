import React from "react";
import { Icon } from '@iconify/react';
import Spotify_logo from "../assets/images/spotify_logo.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";

const home = () => {
    return (
        <div className="h-full w-full flex">
            {/* left panel */}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>
                    {/* logo */}
                    <div className="logoDiv p-6">
                        <img src={Spotify_logo} alt="spotify logo" width={125} />
                    </div>

                    <div className="py-3">
                        {/* Home Button */}
                        <IconText
                            iconName={"material-symbols:home"}
                            displayText={"Home"}
                            active
                        />

                        {/* Search Button */}
                        <IconText
                            iconName={"material-symbols:search-rounded"}
                            displayText={"Search"}
                        />

                        {/* Your Library */}
                        <IconText
                            iconName={"mdi:bookshelf"}
                            displayText={"Library"}
                        />
                    </div>

                    <div className="pt-5">
                        {/* Create Playlist */}
                        <IconText
                            iconName={"icon-park-solid:add"}
                            displayText={"Create Playlist"}
                        />

                        {/* Liked Songs */}
                        <IconText
                            iconName={"zondicons:heart"}
                            displayText={"Liked Songs"}
                        />
                    </div>
                </div>

                {/* language change button */}
                <div className="px-5">
                    <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer" >
                        <Icon icon="ci:globe" />
                        <div className="ml-2 text-sm font-semibold">
                            English
                        </div>
                    </div>
                </div>

            </div>

            {/* right panel */}
            <div className="h-full w-4/5 bg-app-black">
                <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                    <div className="w-1/2 flex h-full">
                        <div className="w-3/5 flex items-center justify-around">
                            <TextWithHover displayText={"Premium"} />
                            <TextWithHover displayText={"Support"} />
                            <TextWithHover displayText={"Download"} />
                            <div className="h-1/2 border border-r border-white"></div>
                        </div>
                        <div className="w-2/5 flex justify-around h-full items-center">
                            <TextWithHover displayText={"Sign up"} />
                            <div className="bg-white h-2/3 rounded-full px-8 flex items-center justify-center font-semibold cursor-pointer">
                                Log in
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content"> </div>
            </div>
        </div>
    );
}

export default home;