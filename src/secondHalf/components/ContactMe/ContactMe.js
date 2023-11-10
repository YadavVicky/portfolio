import React, { useCallback, useState } from "react";
import InputField from "./Components/InputField";
import Header from "../../../shared/UIElements/Header";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from "../../../shared/validators";
import './ContactMe.css';

let ContactMe = () => {
    const [sent, setSent] = useState(false);
    const nameChangeHandler = useCallback((id, value, isValid) => {

    }, []);
    const organisationNameChangeHandler = useCallback((id, value, isValid) => {

    }, []);
    const contactNumberChangeHandler = useCallback((id, value, isValid) => {

    }, []);
    const emailAddressChangeHandler = useCallback((id, value, isValid) => {

    }, []);
    let GoToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/vinay-kumar-yadav-14b87b192/', "_blank");
    }
    let GoToGitHub = () => {
        window.open('https://github.com/YadavVicky/', "_blank");
    }
    const ClearButton = event => {
        event.preventDefault();
        //sending req done;
        setSent(true);
    }
    return (<>
        <Header heading="Contact Me" />
        <div className="wrapper-contact">
            <div class="panel">
                {!sent ? <><form className="form" onSubmit={ClearButton} style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                    <InputField id="personName" label="Name" name="personName" validators={[VALIDATOR_REQUIRE()]} onInput={nameChangeHandler} errorMessage="Please Enter A Name" />
                    <InputField id="organisationName" label="Organisation" name="organisationName" validators={[VALIDATOR_REQUIRE()]} onInput={organisationNameChangeHandler} errorMessage="Please Enter A Organisation Name" />
                    <InputField id="contactNumber" label="Contact Number" name="contactNumber" validators={[VALIDATOR_REQUIRE()]} onInput={contactNumberChangeHandler} errorMessage="Please Enter A Contact Number" />
                    <InputField id="emailAddress" label="Email Address" name="emailAddress" validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]} onInput={emailAddressChangeHandler} errorMessage="Please Enter Valid Email Address" />
                    <button className="button-33" type="submit"> <i class="fa-solid fa-paper-plane"></i> Send</button>
                </form>
                    <button className="button-linked" onClick={GoToLinkedIn}> <i class="fa-brands fa-linkedin"></i> LinkedIn</button>
                    <button className="button-github" style={{marginLeft: "30px", marginBottom: "20px"}}onClick={GoToGitHub}> <i className="fa-brands fa-github fa-xl"></i> GitHub</button>
                    </> :
                    <div className="form">
                        <p>Your Request Has been sent. Please Wait Until I Call Back You, which will be soon. Feel free to take a look.</p>
                    </div>
                }
            </div>
        </div>
    </>)
}

export default ContactMe;