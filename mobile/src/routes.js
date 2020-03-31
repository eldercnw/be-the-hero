import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
const AppStack = createStackNavigator();

import Incident from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <AppStack.Screen name="incidents" component={Incident}></AppStack.Screen>
                <AppStack.Screen name="details" component={Detail}></AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}