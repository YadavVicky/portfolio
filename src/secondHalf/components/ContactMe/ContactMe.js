import React, { useCallback, useState, useReducer } from "react";
import InputField from "./Components/InputField";
import Header from "../../../shared/UIElements/Header";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_PHONENUMBER } from "../../../shared/validators";
import './ContactMe.css';

const INITIAL_NEW_PLACE_FORM = {
    personName: {
        value: '',
        isValid: false,
    },
    organisationName: {
        value: '',
        isValid: false,
    },
    roleOffering: {
        value: '',
        isValid: false,
    },
    contactNumber: {
        value: '',
        isValid: false,
    },
    emailAddress: {
        value: '',
        isValid: false,
    }
}
let ContactMe = () => {
    const [sent, setSent] = useState(false);
    const [formState, setFormState] = useState(INITIAL_NEW_PLACE_FORM);
    const inputChangeHandler = useCallback((id, value, isValid) => {
        setFormState(prevForm => {
            return {
                ...prevForm,
                [id]: {
                    value,
                    isValid,
                }
            }
        });
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
                    <InputField id="personName" label="Name" name="personName" type="text" validators={[VALIDATOR_REQUIRE()]} onInput={inputChangeHandler} errorMessage="Please Enter A Name" />
                    <InputField id="organisationName" label="Organisation" type="text" name="organisationName" validators={[VALIDATOR_REQUIRE()]} onInput={inputChangeHandler} errorMessage="Please Enter A Organisation Name" />
                    <InputField id="roleOffering" label="Role Offering" type="text" name="roleOffering" validators={[VALIDATOR_REQUIRE()]} onInput={inputChangeHandler} errorMessage="If you don't want to disclose. Fill 'n/a' ;)" />
                    <InputField id="contactNumber" label="Contact Number" type="number" name="contactNumber" validators={[VALIDATOR_MINLENGTH(10),VALIDATOR_MAXLENGTH(10)]} onInput={inputChangeHandler} errorMessage="Please Enter A Contact Number" />
                    <InputField id="emailAddress" label="Email Address" type="text" name="emailAddress" validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]} onInput={inputChangeHandler} errorMessage="Please Enter Valid Email Address" />
                    <button className="button-33" type="submit"> <i class="fa-solid fa-paper-plane"></i> Send Me</button>
                </form>
                    <button className="button-linked" onClick={GoToLinkedIn}> <i class="fa-brands fa-linkedin"></i> LinkedIn</button>
                    <button className="button-github" style={{ marginLeft: "30px", marginBottom: "20px" }} onClick={GoToGitHub}> <i className="fa-brands fa-github fa-xl"></i> GitHub</button>
                </>
                    : <p>Request is send</p>}
            </div>
        </div>
    </>)
}

export default ContactMe;