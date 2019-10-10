import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";

const MainNavigator = createStackNavigator({
    HomeScreen: {screen: HomeScreen},
    SecondScreen: {screen: SecondScreen}
});

export default createAppContainer(MainNavigator);
