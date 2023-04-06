import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";

export default function Special({ navigation }){
/*     const [favorites, setFavorites] = useState([]);

    const loadFavorites = async () => {
        const favorites = await AsyncStorage.getItem('favorites');
        if (favorites) {
            setFavorites(JSON.parse(favorites));
        }
    };
    
    useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        loadFavorites();
    });
    
    return unsubscribe;
    }, [navigation]);
    
    // Renderiza a lista de favoritos */
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