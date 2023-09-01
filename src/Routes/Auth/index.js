import React from 'react';
import {
    Authloading,
    Intro,
    DueDate,
    FirstName,
    SignIn,
    SignUp,
    Success,
    WorkoutFrequency
} from '../../Screens';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();
const AuthApp = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={'Authloading'}>
            <AuthStack.Screen name={'Authloading'} component={Authloading} />
            <AuthStack.Screen name={'Intro'} component={Intro} />
            <AuthStack.Screen name={'DueDate'} component={DueDate} />
            <AuthStack.Screen name={'FirstName'} component={FirstName} />
            <AuthStack.Screen name={'SignIn'} component={SignIn} />
            <AuthStack.Screen name={'SignUp'} component={SignUp} />
            <AuthStack.Screen name={'Success'} component={Success} />
            <AuthStack.Screen name={'WorkoutFrequency'} component={WorkoutFrequency} />
        </AuthStack.Navigator>
    );
};

export default AuthApp;
