import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";


export default function Details({ navigation }){
    useLayoutEffect(() => {
        navigation.setOptions({ tabBarVisible: false });
    }, [navigation]);
    
    return(
        <SafeAreaView style={styles.conteiner}>
            <Text>Teste</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})