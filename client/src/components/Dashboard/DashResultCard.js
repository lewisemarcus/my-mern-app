import React from "react"
import shakeygraves from "../../assets/shakeygraves.jpg"
import { PlayCircleTwoTone } from "@ant-design/icons"

const DashResultCard = ({
    dashSearchResults,
    setOneSongClick,
    currentPlayer,
    setCurrentSong,
    setIsPlaying,
}) => {
    let searchResults =
        dashSearchResults || JSON.parse(localStorage.getItem("searchResults"))

    const handleSearchClick = (event) => {
        event.preventDefault()
        setIsPlaying(true)
        if (setOneSongClick !== undefined) {
            setOneSongClick(true)
            currentPlayer.current.src =
                event.currentTarget.attributes.name.value
            setCurrentSong(event.currentTarget.attributes.name.value)
        }
    }
    return (
        <div
            style={{
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "wrap",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    backgroundColor: "#f1eee9",
                    width: "100%",
                    padding: "1rem",
                }}
            >
                <div
                    style={{
                        background:
                            "linear-gradient(315deg, hsla(29, 81%, 61%, 1) 0%, hsla(0, 0%, 0%, 1) 86%)",
                        display: "flex",
                        flexWrap: "wrap",
                        width: "70%",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            zIndex: 1000,
                            margin: 20,
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <img src={shakeygraves} alt="Album Cover" />
                        <PlayCircleTwoTone
                            name={searchResults.link}
                            onClick={handleSearchClick}
                            style={{
                                fontSize: "3rem",
                                marginLeft: "3rem",
                            }}
                        />
                        <div
                            style={{
                                marginLeft: "3rem",
                            }}
                        >
                            <h1
                                style={{
                                    color: "white",
                                    fontFamily: "Poppins",
                                }}
                            >
                                {searchResults.title}
                            </h1>
                            <h3
                                style={{
                                    color: "white",
                                    opacity: "0.7",
                                    fontFamily: "Poppins",
                                }}
                            >
                                By {searchResults.artist}
                            </h3>
                        </div>
                    </div>
                    <div
                        style={{
                            marginTop: -50,
                            position: "relative",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default DashResultCard
