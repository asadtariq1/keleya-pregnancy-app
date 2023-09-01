import React from 'react';
import {
   Home
} from '../../Screens';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();
const App = () => {
    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={'Home'}>
            <AppStack.Screen name={'Home'} component={Home} />
        </AppStack.Navigator>
    );
};

export default App;
