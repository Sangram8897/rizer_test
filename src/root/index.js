import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from '../store/store/configureStore';
import SignIn from '../containers/auth/SignIn';
import SignUp from '../containers/auth/SignUp';
import Courses from '../containers/courses';
import Auth from '../containers/auth';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Color from '../themes/Color';
import Loading from '../containers/start/Loading';
import ViewCourse from '../containers/courses/ViewCourse';


const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: Color.primary,
                        },
                        headerTintColor: '#FFFFFF',
                        headerTitleStyle: {
                            fontSize: 18,
                            fontFamily: 'Poppins-Medium',
                        },
                        headerShown: true,
                        gestureEnabled: false
                    }}
                >
                    <>

                        <Stack.Screen
                            name="Loading"
                            options={{ title: 'Loading' }}
                            component={Loading}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="SignIn"
                            options={{ title: 'Rizer' }}
                            component={SignIn}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name="Auth"
                            options={{ title: 'Auth' }}
                            component={Auth}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name="SignUp"
                            options={{ title: 'Sign Up' }}
                            component={SignUp}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name="Courses"
                            options={{ title: 'All Courses' }}
                            component={Courses}
                            //options={{ headerShown: true }}
                        />
                            <Stack.Screen
                            name="ViewCourse"
                            options={{ title: 'View Course Details' }}
                            component={ViewCourse}
                            //options={{ headerShown: true }}
                        />
                    </>

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
