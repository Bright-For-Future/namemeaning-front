"use client"; 
import React, { useState, useRef } from "react";
import List from "./Components/List";
import TextField from "@mui/material/TextField";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { Divider, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./style/style.css";
import AddName from "./Components/AddName";
// import AddName from "./AddName";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Tooltip as ReactTooltip } from "react-tooltip";
const theme = createTheme({
    palette: {
        primary: {
            main: "#007bff",
        },
        secondary: {
            main: "#ffc1df07",
        },
    },
});
const Welcome = () => {
    const searchinputRef = useRef(null);
    const [inputText, setInputText] = useState("");
    const [showOverlay, setShowOverlay] = useState(false);
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    const handleActionClick = () => {
        setShowOverlay(!showOverlay);
    };
    return (
        <section className="topcontainer">
            <div className="background"></div>
            <div className="uppercontainer">
                <div className="container">
                    <div className="twosides left">
                        <ReactTooltip
                            id="language"
                            place="left"
                            variant="info"
                            content="Change Language"
                            style={{
                                backgroundColor: "#033177",
                                color: "white",
                                fontSize: "12px",
                                width: "10%",
                            }}
                        />
                        <div className="leftcontainer">
                            {showOverlay ? (
                                <AddName
                                    // origins={origins}
                                    close={handleActionClick}
                                    // language= {addToggle}
                                />
                            ) : (
                                <div className="search">
                                    <ThemeProvider theme={theme}>
                                        <TextField
                                            type="text"
                                            id="test"
                                            onChange={inputHandler}
                                            inputRef={searchinputRef}
                                            InputProps={{
                                                style: {
                                                    color: "white",
                                                    border: "1px solid white",
                                                    borderRadius: "30px",
                                                },
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <SearchIcon
                                                            style={{
                                                                color: "white",
                                                                cursor: "pointer",
                                                            }}
                                                        />
                                                        <Divider
                                                            style={{
                                                                color: "white",
                                                            }}
                                                            orientation="vertical"
                                                        />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="outlined"
                                            fullWidth
                                            placeholder="Search"
                                        />
                                    </ThemeProvider>
                                    <span className="span">
                                        {/* Can't find your name? */}
                                        <span onClick={handleActionClick}>
                                            {" "}
                                            Add
                                        </span>{" "}
                                        it now!
                                    </span>
                                </div>
                            )}
                            <div className="bottomcontent">
                                <div className="bottomleft">
                                    <div className="developer">
                                        <h4>Developed by: Birhane Gebriel</h4>
                                    </div>
                                </div>
                                <div className="bottomright">
                                    <div className="sociamedia">
                                        Follow me:
                                        <a href="https://github.com/Birhane-G">
                                            <BsGithub className="icon" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/birhane-gebrial/">
                                            <BsLinkedin className="icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="twosides right">
                        <div className="rightcontainer">
                            <div className="cardcontainer">
                                <div className="cards">
                                    <List input={inputText} />
                                </div>
                            </div>
                            <div
                                className="addnewbtn"
                                onClick={handleActionClick}
                            >
                                <IoMdAdd className="addicon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
