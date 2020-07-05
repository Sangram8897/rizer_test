import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/Button'

export default function Auth(props) {
    return (
        <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'space-around' }}>
            <Text style={{ fontFamily: 'Raleway-Bold', marginVertical: 20, fontSize: 35, color: 'black' }}>Rizer</Text>
            <View style={{ width: '100%' }}>
                <Button title={'SIGN IN'} onButtonPress={()=>{props.navigation.navigate('SignIn')}}/>
                <Button title={'SIGN UP'} onButtonPress={()=>{props.navigation.navigate('SignUp')}}/>
            </View>
        </View>
    )
}
