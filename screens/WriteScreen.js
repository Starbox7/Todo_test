import React from "react";
import { StyleSheet, View } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from "../components/WriteHeader";
import WriteEditor from "../components/WriteEditor";
import { StatusBar } from "expo-status-bar";

function WriteScreen(){
    return (
    <SafeAreaView style={styles.block}>
        {/* <statusbar style={{backgroundColor: "#ffffff"}}/> */}
        <WriteEditor/>
        <WriteHeader/>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: '#F4F3EF',  //F4F3EF
    },
});

export default WriteScreen;