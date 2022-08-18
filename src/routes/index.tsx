import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Login,
    Home,
    Welcome,
} from '../screens';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default Routes;