"use client"

import React,{useState} from "react";
import {
    View,
    Text,
} from "react-native";

import Clipboard from "@react-native-clipboard/clipboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home"
import NotHome from "./screens/notHome";

function copyToClipboard(inputString: string){
    console.log("Copied");
   return  Clipboard.setString(inputString)
}

const stack = createNativeStackNavigator();

function MainN() : React.JSX.Element {
    
    

    return (
        <NavigationContainer >
            <stack.Navigator>
                <stack.Screen name="Home" component={Home}/>
                <stack.Screen name="NotHome" component={NotHome}/>
            </stack.Navigator>
            </NavigationContainer>
      );
}
    

export default MainN;