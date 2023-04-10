import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";

export default function Special({ route }){
    
    return (
        <SafeAreaView style={styles.conteiner}>
            <Text>Teste</Text>
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