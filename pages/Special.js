import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function Special({ navigation }){

    return(
        <SafeAreaView>
            <Text>teste</Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    conteiner: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
})