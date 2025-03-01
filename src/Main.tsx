import { SafeAreaView, View, Text, StyleSheet, TextInput, Clipboard, Pressable } from "react-native";
import React, { useState } from 'react';
import StartForm from './components/StartForm'
function Main(): React.JSX.Element {
    
    return (
        <SafeAreaView>
            <StartForm></StartForm>
        </SafeAreaView>
    );
}

export default Main;

const styles = StyleSheet.create(

    {
    outer: {
        height:50,
        width:150,
        backgroundColor: "white",
        justifyContent:"center"
     } ,
    OverView:{
        alignItems: 'center',
        justifyContent:'center',
        height: "100%",
        backgroundColor:"grey"
    },
    bar:{
        height:30,
        alignItems: 'flex-start',

    },
});