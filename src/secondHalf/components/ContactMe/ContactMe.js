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
    const [formValid, setFormValid] = useState(false);
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
    const ClearButton = async event => {
        event.preventDefault();
        //sending req done;
        for(const prop in formState) {
            if (!formState[prop].isValid) {
                setFormValid(true);
                return;
            }
        }
        try{
        const response = await fetch('https://porfolioapi.onrender.com/api/contactMe/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                personName: formState.personName.value,
                organisationName: formState.organisationName.value,
                roleOffering: formState.roleOffering.value,
                contactNumber: formState.contactNumber.value,
                emailAddress: formState.emailAddress.value
            })
        });
        const responseData = await response.json();
        console.log(responseData);
        }catch(e){
            console.log(e);
        }
        setSent(true);
    }
    return (<>
        <Header heading="Contact Me" />
        <div className="wrapper-contact">
            <div className="panel">
                {!sent ? <><form className="form" onSubmit={ClearButton} style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                    <InputField id="personName" label="Name" name="personName" type="text" validators={[VALIDATOR_REQUIRE()]} onInput={inputChangeHandler} errorMessage="Please Enter A Name" />
                    <InputField id="organisationName" label="Organisation" type="text" name="organisationName" validators={[VALIDATOR_REQUIRE()]} onInput={inputChangeHandler} errorMessage="Please Enter A Organisation Name" />
                    <InputField id="roleOffering" label="Role Offering" type="text" name="roleOffering" validators={[VALIDATOR_REQUIRE()]} onInput={inputChangeHandler} errorMessage="If you don't want to disclose. Fill 'n/a' ;)" />
                    <InputField id="contactNumber" label="Contact Number" type="number" name="contactNumber" validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(10), VALIDATOR_PHONENUMBER()]} onInput={inputChangeHandler} errorMessage="Please Enter A Contact Number" />
                    <InputField id="emailAddress" label="Email Address" type="text" name="emailAddress" validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]} onInput={inputChangeHandler} errorMessage="Please Enter Valid Email Address" />
                    <button className="button-33" type="submit"> <i className="fa-solid fa-paper-plane"></i> Send Me</button>
                    {formValid && <p className="text-danger" style={{ marginBottom: "0px", marginTop: "10px" }}>It seems you have not entered all details correctly.</p>}
                </form>
                    <button className="button-linked" onClick={GoToLinkedIn}> <i className="fa-brands fa-linkedin"></i> LinkedIn</button>
                    <button className="button-github" style={{ marginLeft: "30px", marginBottom: "20px" }} onClick={GoToGitHub}> <i className="fa-brands fa-github fa-xl"></i> GitHub</button>
                    <button className="button-resume" style={{ marginLeft: "30px", marginBottom: "20px" }} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-circle-user fa-xl"></i> Resume</button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div className="modal-dialog  modal-xl modal-dialog-centered modal-dialog-scrollable">
                            <div style={{ minHeight: '70vh' }} className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title display-6" style={{ color: 'black' }}  id="ModalLabel">Resume</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                <iframe src="https://drive.google.com/file/d/1phkcfmLa-1pG-EQ_Y9qQCwfS5mrGfgmv/preview" width="1000" height="900" allow="autoplay"></iframe>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="button-24" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                    : <p>Request is send</p>}
            </div>
        </div>
    </>)
}

export default ContactMe;