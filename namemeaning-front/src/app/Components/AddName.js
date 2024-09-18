import React, { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { BsQuestion } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import TextInput from "./TextInput";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import { useRef } from "react";
const AddName = ({ close }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [customValue, setCustomValue] = useState("");
    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };
    const nameRef = useRef(null);
    const originRef = useRef(null);
    const descriptionRef = useRef(null);
    const origins = [
        {
          id: 1,
          origins: "King Arthur"
        },
        {
          id: 2,
          origins: "George Everest"
        },
        {
          id: 3,
          origins: "Internet Phone"
        }
      ];
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        // setData("origin", option.origins);
        setIsOpen(false);
    };
    const handleInputChange = (e) => {
        setCustomValue(e.target.value);
    };


    return (
        <div className="newnamecontainer">
            <div>
                <span className="backToHome" onClick={close}>
                    <IoArrowBack />
                </span>
            </div>
            <form>
                <div className="newNameAdd">
                    <div className="nameandorigin">
                        <div class="cont">
                            <TextInput
                                ref={nameRef}
                                type="input"
                                className="namefield"
                                placeholder="Name"
                                name="name"
                                // value={data.name}
                                id="name"
                                // onChange={(e) =>
                                //     // setData("name", e.target.value)
                                // }
                                // required
                            />
                            <InputLabel htmlFor="name" className="formlabel">
                                Name <BsQuestion data-tooltip-id="name" />
                            </InputLabel>
                            <ReactTooltip
                                id="name"
                                place="left"
                                variant="info"
                                content="Enter a single name in this field. This can be your own first name or the name of your business."
                                style={{
                                    backgroundColor: "#033177",
                                    color: "white",
                                    fontSize: "12px",
                                    width: "100%",
                                }}
                            />
                            {/* <InputError
                                message={errors.name}
                                className="mt-2"
                            /> */}
                        </div>
                        <div className="cont">
                            <div
                                className={`dropdown-toggle namefield ${
                                    isOpen ? "open" : ""
                                }`}
                                onClick={handleDropdownToggle}
                            >
                                {selectedOption
                                    ? selectedOption.origins
                                    : "Select an option"}
                            </div>
                            <div
                                className={`dropdown-menu ${
                                    isOpen ? "" : "notdisplay"
                                }`}
                            >
                                {origins.map((origin) => (
                                    <div
                                        key={origin.origins}
                                        className={`dropdown-option ${
                                            selectedOption === origin
                                                ? "selected"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleOptionSelect(origin)
                                        }
                                    >
                                        {origin.origins}
                                    </div>
                                ))}
                                <div className="dropdown-option custom-option">
                                    <input
                                        type="text"
                                        id="input"
                                        ref={originRef}
                                        value={customValue}
                                        required
                                        onChange={handleInputChange}
                                        placeholder="Enter origin"
                                    />
                                    <button
                                        type="button"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                            <label htmlFor="origin" className="formlabel">
                                Origin <BsQuestion data-tooltip-id="origin" />
                            </label>
                            <ReactTooltip
                                id="origin"
                                place="right"
                                variant="info"
                                content="Choose the origin language, culture, or region associated with the name. You can also enter a custom origin not listed here."
                                style={{
                                    backgroundColor: "#033177",
                                    color: "white",
                                    fontSize: "12px",
                                    width: "100%",
                                }}
                            />
                            {/* <InputError
                                message={errors.origins}
                                className="mt-2"
                            /> */}
                        </div>
                    </div>
                    <div className="cont">
                        <textarea
                            type="input"
                            ref={descriptionRef}
                            // className="namefield "
                            placeholder="Name"
                            name="description"
                            id="description"
                            // value={data.description}
                            // onChange={(e) =>
                                // setData("description", e.target.value)
                            // }
                            rows={1}
                            // required
                        />
                        <label htmlFor="description" className="formlabel">
                            Description{" "}
                            <BsQuestion data-tooltip-id="description" />
                        </label>
                        <ReactTooltip
                            id="description"
                            place="left"
                            variant="info"
                            content="Share any personal stories, memories, or interesting facts related to the name. Did it have a special meaning?"
                            style={{
                                backgroundColor: "#033177",
                                color: "white",
                                fontSize: "12px",
                                width: "100%",
                            }}
                        />
                        {/* <InputError
                            message={errors.description}
                            className="mt-2"
                        /> */}
                    </div>
                </div>
                <div className="button">
                    <button>Save</button>
                </div>
            </form>
        </div>
    );
};

export default AddName;
