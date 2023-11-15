import React from "react";
import { Icon } from '@iconify/react';
import Spotify_logo from "../assets/images/spotify_logo.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";

const focusCardData = [
    {
        title: "Peaceful Piano",
        description: "Soothing Piano tunes with melody and pop.",
        imageUrl: "https://harthouse.ca/assets/images/uploads/spaces/piano.jpg",
    },
    {
        title: "Deep Focus",
        description: "Soothing Piano tunes with melody and pop.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpbJF0sJAWyrOu2mvwVij0m8aexayvFohjg&usqp=CAU"

    },
    {
        title: "Instrumental Study",
        description: "Soothing Piano tunes with melody and pop.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwY3kBfTZFkWInTgzU0trCyR_wuIwctOvz-Q&usqp=CAU"
    },
    {
        title: "Focus Flow",
        description: "Up beat instrumental to help you focus.",
        imageUrl: "https://t4.ftcdn.net/jpg/05/48/86/57/360_F_548865785_5je14mp9oO6KiOAnphkcTaiFMqOqHqAl.jpg"
    },
    {
        title: "Beats to think to",
        description: "Soothing Piano tunes with melody and pop.",
        imageUrl: "https://img.freepik.com/premium-photo/concept-eternal-theme-about-eternity-music-musical-instruments-good-mood-ascended-aspiration-action-treble-clef-sheet-music_771426-4115.jpg"
    },
];

const spotifyPlaylistCardData = [
    {
        title: "This is one",
        description: "Soothing Piano tunes with melody and pop.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpbJF0sJAWyrOu2mvwVij0m8aexayvFohjg&usqp=CAU"
    },
    {
        title: "Deep Focus",
        description: "Soothing Piano tunes with melody and pop.",
        imageUrl: "https://harthouse.ca/assets/images/uploads/spaces/piano.jpg",

    },
    {
        title: "Instrumental Study",
        description: "Soothing Piano tunes with melody and pop.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwY3kBfTZFkWInTgzU0trCyR_wuIwctOvz-Q&usqp=CAU"
    },
    {
        title: "Focus Flow",
        description: "Up beat instrumental to help you focus.",
        imageUrl: "https://t4.ftcdn.net/jpg/05/48/86/57/360_F_548865785_5je14mp9oO6KiOAnphkcTaiFMqOqHqAl.jpg"
    },
    {
        title: "Beats to think to",
        description: "Soothing Piano tunes with melody and pop.",
        imageUrl: "https://img.freepik.com/premium-photo/concept-eternal-theme-about-eternity-music-musical-instruments-good-mood-ascended-aspiration-action-treble-clef-sheet-music_771426-4115.jpg"
    },
];

const songsOfIndiaCardData = [
    {
        title: "this is second",
        description: "Soothing Piano tunes with melody and pop.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwY3kBfTZFkWInTgzU0trCyR_wuIwctOvz-Q&usqp=CAU"
    },
    {
        title: "Deep Focus",
        description: "Soothing Piano tunes with melody and pop.",
        imageUrl: "https://harthouse.ca/assets/images/uploads/spaces/piano.jpg",

    },
    {
        title: "Instrumental Study",
        description: "Soothing Piano tunes with melody and pop.",
        imageUrl: "https://img.freepik.com/premium-photo/concept-eternal-theme-about-eternity-music-musical-instruments-good-mood-ascended-aspiration-action-treble-clef-sheet-music_771426-4115.jpg"
    },
    {
        title: "Focus Flow",
        description: "Up beat instrumental to help you focus.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpbJF0sJAWyrOu2mvwVij0m8aexayvFohjg&usqp=CAU"
    },
    {
        title: "Beats to think to",
        description: "Soothing Piano tunes with melody and pop.",
        imageUrl: "https://t4.ftcdn.net/jpg/05/48/86/57/360_F_548865785_5je14mp9oO6KiOAnphkcTaiFMqOqHqAl.jpg"
    },
];


const Home = () => {
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
            <div className="h-full w-4/5 bg-app-black overflow-auto">
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
                <div className="content p-8 pt-0overflow-auto">
                    <PlaylistView
                        titleText="Focus"
                        cardsData={focusCardData}
                    />
                    <PlaylistView
                        titleText="Spotify Playlists"
                        cardsData={spotifyPlaylistCardData}
                    />
                    <PlaylistView
                        titleText="Sounds of India"
                        cardsData={songsOfIndiaCardData}
                    />
                </div>
            </div>
        </div>
    );
};


const PlaylistView = ({ titleText, cardsData }) => {
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5 ">{titleText}</div>
            <div className="w-full flex justify-between space-x-4">
                {
                    cardsData.map((cardData) => {
                        return <Card
                            title={cardData.title}
                            description={cardData.description}
                            imageUrl={cardData.imageUrl}
                        />;
                    })

                }

                {/* <div>
                    <Card
                        title="Peaceful Piano"
                        description="Soothing Piano tunes with melody and pop."
                        imageUrl="https://harthouse.ca/assets/images/uploads/spaces/piano.jpg"

                    />
                    <Card
                        title="Deep Focus"
                        description="Soothing Piano tunes with melody and pop."
                        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpbJF0sJAWyrOu2mvwVij0m8aexayvFohjg&usqp=CAU"
                    />
                    <Card
                        title="Instrumental Study"
                        description="Soothing Piano tunes with melody and pop."
                        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwY3kBfTZFkWInTgzU0trCyR_wuIwctOvz-Q&usqp=CAU"
                    />
                    <Card
                        title="Focus Flow"
                        description="Up beat instrumental to help you focus."
                        imageUrl="https://t4.ftcdn.net/jpg/05/48/86/57/360_F_548865785_5je14mp9oO6KiOAnphkcTaiFMqOqHqAl.jpg"
                    />
                    <Card
                        title="Beats to think to"
                        description="Soothing Piano tunes with melody and pop."
                        imageUrl="https://img.freepik.com/premium-photo/concept-eternal-theme-about-eternity-music-musical-instruments-good-mood-ascended-aspiration-action-treble-clef-sheet-music_771426-4115.jpg"
                    />
                </div> */}

            </div>
        </div>
    );
};

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
            <div className="pb-4 pt-2">
                <img
                    className="w-full rounded-md h-50"
                    src={imageUrl}
                    alt="label"
                />
            </div>
            <div className="text-white  font-semibold">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};

export default Home;