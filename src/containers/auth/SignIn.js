import React, { useReducer, useCallback, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { View, Text, TextInput, StyleSheet, ScrollView, Alert, Keyboard, TouchableOpacity } from 'react-native'
import Button from 'components/Button';
import Input from 'components/Input'
import Container from 'components/Container';

import { sign_in_rizer } from 'store/actions/AuthActions'

import Color from 'themes/Color';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'
const FORM_STATE_CLEAR = 'FORM_STATE_CLEAR'

const formReducer = (state, action) => {
    switch (action.type) {
        case FORM_INPUT_UPDATE:
            const updatedValues = {
                ...state.inputValues,
                [action.input]: action.value,
            };
            const updatedValidities = {
                ...state.inputValidities,
                [action.input]: action.isValid,
            };
            let updatedFormIsValid = true;
            for (const key in updatedValidities) {
                updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
            }
            return {
                formIsValid: updatedFormIsValid,
                inputValues: updatedValues,
                inputValidities: updatedValidities,
            }
        case FORM_STATE_CLEAR:
            return {
                inputValues: {
                    email: '',
                    password: '',
                    institute_url: '',
                },
                inputValidities: {
                    email: false,
                    password: false,
                    institute_url: false,
                },
                formIsValid: false
            }
        default:
            return state;

    }
}

export default function Sign_In(props) {
    const dispatch = useDispatch();
    const [_loading, set_loading] = useState(false);
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',//development@rizer.in
            password: '',//123456
            institute_url: '',//development.rizer.in
        },
        inputValidities: {
            email: false,
            password: false,
            institute_url: false,
        },
        formIsValid: false
    });

    const auth_state = useSelector(state => state.AuthReducer.loading);
    useEffect(() => {
        set_loading(auth_state);
    }, [auth_state]);

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            })
        }, [dispatchFormState]);

    const submitHandler = useCallback(
        () => {
            if (!formState.formIsValid) {
                Alert.alert('Error!', 'Please enter all the fields!');
                return;
            }
            dispatch(sign_in_rizer({
                "user": {
                    "email": formState.inputValues.email,
                    "password": formState.inputValues.password,
                    "institute_url": formState.inputValues.institute_url
                }
            }, clearStateAndNavigate ));
        },
    )
    clearStateAndNavigate = async () => {
        await dispatchFormState({type: FORM_STATE_CLEAR })
        props.navigation.replace('Courses')
    }
    return (
        <Container isLoading={_loading}>
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <ScrollView style={{ width: '100%', }}>

                        <Text style={styles.headerText}>Welcome</Text>

                        <Input
                            id='email'
                            errorText='Please Enter your Email'
                            placeholder={'Email'}
                            keyboardType={'email-address'}
                            initialValue={formState.inputValues.email}
                            initialValid={formState.inputValidities.email}
                            onInputChange={inputChangeHandler}
                            required
                            email={true}
                        />
                        <Input
                            id='password'
                            errorText='Please Enter your password'
                            placeholder={'Password'}
                            secureTextEntry={true}
                            initialValue={formState.inputValues.password}
                            initialValid={formState.inputValidities.password}
                            onInputChange={inputChangeHandler}
                            required
                            minLength={6}

                        />
                        <Input
                            id='institute_url'
                            errorText='Please Enter your Institute URL'
                            placeholder={'Institute URL'}
                            keyboardType={'url'}
                            initialValue={formState.inputValues.institute_url}
                            initialValid={formState.inputValidities.institute_url}
                            onInputChange={inputChangeHandler}
                            required
                        />
                        
                        <Button
                            title={'SIGN IN'}
                            backcolor={Color.primary}
                            fontcolor={formState.formIsValid ? Color.white : Color.gray}
                            onButtonPress={submitHandler}
                        />
                        <Text
                            onPress={() => props.navigation.replace('SignUp')}
                            style={styles.navigatorText}>create an Account ?
                        </Text>

                    </ScrollView>
                </View>
            </View>
        </Container>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        maxHeight: 500,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontFamily: 'Raleway-Bold',
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 30,
        color: 'black'
    },
    navigatorText: {
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 14,
        color: 'gray',
    }

});



/**
 *   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{ fontFamily: 'Raleway-Bold',fontSize:26,color:'purple'}}>GYMCRAFT</Text>
            <Text style={{ fontFamily: 'Poppins-Italic',fontSize:12,color:'gray'}}>The GYM Management app</Text>
        </View>
 */

/**
 *
 */