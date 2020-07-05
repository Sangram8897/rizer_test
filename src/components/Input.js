import React, { useReducer, useEffect,useState } from 'react'
import { View, Text, TextInput } from 'react-native'

const INPUT_BLUR = 'INPUT_BLUR';
const INPUT_CHANGE = 'INPUT_CHANGE';

const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value: action.value,
                isValid: action.isValid,
            }
        case INPUT_BLUR:
            return {
                ...state,
                touched: true,
            }
        default:
            return state;
    }
}

const Input = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : '',
        isValid: props.initialValid,
        touched: false,
    });
    
    const [_errorText,set_errorText]=useState(props.errorText);

    const { onInputChange, id } = props;
    useEffect(() => {
        // if(inputState.touched){
        onInputChange(id, inputState.value, inputState.isValid);

    }, [inputState, onInputChange])

    const textChangeHandler = text => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // const passwordRegex =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/
        let isValid = true;
        if (props.required && text.trim().length === 0) {
            isValid = false;
            set_errorText(props.errorText);
        }
        if (props.email && !emailRegex.test(text.toLowerCase())) {
            isValid = false;
            set_errorText('Please enter valid email Address ')
        }
        if (props.password && !passwordRegex.test(text.toLowerCase())) {
            isValid = false;
            set_errorText('Please enter valid Password ')
        }
        if (props.min != null && +text < props.min) {
            isValid = false;
            set_errorText(`${props.placeholder} contain  minimum ${props.min} value`)
        }
        if (props.max != null && +text > props.max) {
            isValid = false;
            set_errorText(`${props.placeholder} contain  maximum ${props.max} value`)
        }
        if (props.minLength != null && text.length < props.minLength) {
            isValid = false;
            set_errorText(`${props.placeholder} contain  minimum ${props.minLength} characters`)
        }
        dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid })
    }
    const lostFocusHandler = () => {
        dispatch({ type: INPUT_BLUR })
    }
    return (
        <View style={{ marginTop: 15 }}>
            <TextInput
                {...props}
                placeholderTextColor="#BDB9C2"
                style={{ fontFamily: 'Poppins-Regular',paddingHorizontal:10, height: 50, width: '100%',borderRadius:5,borderColor:'#DCD7E4', borderWidth: 1 }}
                value={inputState.value}
                onChangeText={(text) => textChangeHandler(text)}
                onBlur={lostFocusHandler}
            />
            {!inputState.isValid && inputState.touched &&
                <Text style={{ fontFamily: 'Raleway-Medium', marginTop: 5, fontSize: 10, color: 'red' }}>{_errorText}</Text>}
        </View>
    )
}

export default Input;
/**
 * /^
  (?=.*\d)          // should contain at least one digit
  (?=.*[a-z])       // should contain at least one lower case
  (?=.*[A-Z])       // should contain at least one upper case
  [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
$/
 */