import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Button = ({ title, backcolor, fontcolor, onButtonPress }) => {
    return (
        <TouchableOpacity
            onPress={onButtonPress}
            style={[styles.button, { backgroundColor: backcolor, }]}>
            <Text style={[styles.buttonText,{ color: fontcolor,}]}>{title}</Text>
        </TouchableOpacity>
    )
}
export default Button;

const styles = StyleSheet.create({
    button: {
        height: 60,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 15,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 22
    }
})