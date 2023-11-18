import React, { useReducer, useEffect } from "react";
import { validate } from "../../../../shared/validators";

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        default:
            return state;
    }
}


let InputField = props => {
    const [inputState, dispatch] = useReducer(inputReducer, { value: '', isValid: false, isTouched: false });
    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    }
    const touchHandler = () => {
        dispatch({
            type: 'TOUCH',
        });
    }
    const { id, onInput } = props;
    const { value, isValid } = inputState;
    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);
    let element = (
        <div className="mt-2">
            <input
                type={props.type}
                id={props.id}
                placeholder={props.label}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
                style={{color: "blanchedalmond"}}
                maxLength="50"
            ></input>
            {!inputState.isValid && inputState.isTouched && <p className="text-danger">{props.errorMessage}</p>}
        </div>
    )

    return element;
}

export default InputField;