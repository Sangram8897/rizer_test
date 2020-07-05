import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import Color from '../../themes/Color'
// import AsyncStorage from '@react-native-community/async-storage';
// import IsEmpty from '../../utils/IsEmpty';
export default function Loading(props) {
    useEffect(() => {
        authenticateUser()
    }, [])

    authenticateUser = async () => {
        //let userData = await AsyncStorage.getItem('@userData');
        //props.navigation.replace(IsEmpty(userData) ? 'SignIn' : 'Courses')
        props.navigation.replace('SignIn');
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={Color.primary} />
        </View>
    )
}
