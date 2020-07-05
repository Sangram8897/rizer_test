import React, { useReducer, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/Input'
import { ScrollView } from 'react-native-gesture-handler';
import { sign_up_rizer } from '../../store/actions/AuthActions'
import Color from '../../themes/Color';
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
                    password_confirmation: '',
                    institute_url: '',
                },
                inputValidities: {
                    email: false,
                    password: false,
                    password_confirmation: false,
                    institute_url: false,
                },
                formIsValid: false
            }
        default:
            return state;

    }
}

export default function SignUp(props) {
    const dispatch = useDispatch();
    const [value, onChangeText] = React.useState('');
    const [_signup_formState, dispatch_signup_FormState] = useReducer(formReducer, {
        inputValues: {
            email: '',//development@rizer.in
            password: '',//123456
            password_confirmation: '',//123456
            institute_url: '',//development.rizer.in
        },
        inputValidities: {
            email: false,
            password: false,
            password_confirmation: false,
            institute_url: false,
        },
        formIsValid: false
    });
    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatch_signup_FormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            })
        }, [dispatch_signup_FormState]);

    const submitHandler = useCallback(
        () => {
            if (!_signup_formState.formIsValid) {
                Alert.alert('Error!','Please enter all the fields!');
                return;
            }
            dispatch(sign_up_rizer({
                "user": {
                    "email": _signup_formState.inputValues.email,
                    "password": _signup_formState.inputValues.password,
                    "password_confirmation": _signup_formState.inputValues.password_confirmation,
                    "institute_url": _signup_formState.inputValues.institute_url
                  }
            }, clearStateAndNavigate));
        },
    )
    clearStateAndNavigate = async () => {
        await dispatch_signup_FormState({type: FORM_STATE_CLEAR })
        props.navigation.replace('SignIn')
    }
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <ScrollView style={{ width: '100%', }}>
                    <Text style={styles.headerText}>Create Account</Text>

                    <Input
                        id='email'
                        errorText='Please Enter your Email'
                        placeholder={'Email'}
                        keyboardType={'email-address'}
                        initialValue={_signup_formState.inputValues.email}
                        initialValid={_signup_formState.inputValidities.email}
                        onInputChange={inputChangeHandler}
                        required
                        email={true}
                    />
                    <Input
                        id='password'
                        errorText='Please Enter your password'
                        placeholder={'Password'}
                        secureTextEntry={true}
                        initialValue={_signup_formState.inputValues.password}
                        initialValid={_signup_formState.inputValidities.password}
                        onInputChange={inputChangeHandler}
                        required
                        minLength={6}
                    />
                    <Input
                        id='password_confirmation'
                        errorText='Please Confirm your password'
                        placeholder={'Confirm Password'}
                        secureTextEntry={true}
                        initialValue={_signup_formState.inputValues.password_confirmation}
                        initialValid={_signup_formState.inputValidities.password_confirmation}
                        onInputChange={inputChangeHandler}
                        required
                        minLength={6}
                    />
                    <Input
                        id='institute_url'
                        errorText='Please Enter your Institute URL'
                        placeholder={'Institute URL'}
                        keyboardType={'url'}
                        initialValue={_signup_formState.inputValues.institute_url}
                        initialValid={_signup_formState.inputValidities.institute_url}
                        onInputChange={inputChangeHandler}
                        required

                    />
                    <Button
                        title={'SIGN UP'}
                        backcolor={Color.primary}
                        fontcolor={_signup_formState.formIsValid ? Color.white : Color.gray}
                        onButtonPress={submitHandler}
                    />
                    <Text
                        onPress={() => props.navigation.replace('SignIn')}
                        style={styles.navigatorText}>Already have an Account ?
                        </Text>

                </ScrollView>
            </View>
        </View>
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
        maxHeight: 600,
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