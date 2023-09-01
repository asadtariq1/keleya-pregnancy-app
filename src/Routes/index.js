import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthApp from './Auth';
import App from './App';

const AppStack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name={'Auth'} component={AuthApp} />
                <AppStack.Screen name={'App'} component={App} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
