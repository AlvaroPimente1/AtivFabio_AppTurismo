import React from "react";
import { View, SafeAreaView, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native-elements";

export default function Details({ route }){
    const city = route.params.city;

    return(
        <SafeAreaView style={styles.conteiner}>
            <View style={styles.imagemConteiner}>
                <Image style={styles.image} source={city.image}/>
            </View>
            <ScrollView>
                <Text style={styles.name}>{city.name}</Text>
                    <Text style={styles.subTitulo}>Região {city.regiao}</Text>
                    <View style={styles.descriptionConteiner}>
                    <Text style={styles.description}>{city.descricao}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#7c9999'
    }, 
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#7c9999"
    },
    name: {
        fontSize: 29,
        fontWeight: 'bold',
        color: "#fff",
        paddingTop: 10,
        textAlign: 'center'
    },
    description: {
        fontSize: 18,
        textAlign: 'justify',
        paddingHorizontal: 10,
        color: '#fff',
    },

    subTitulo: {
        fontSize: 15,
        marginBottom: 10,
        color: "#fff",
        textAlign: 'center'
    },

    imagemConteiner: {
        paddingVertical: 20,
        backgroundColor: "#fff",
        paddingHorizontal: 100,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3'
    }, 

    descriptionConteiner: {
        paddingHorizontal: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        paddingVertical: 8,
        marginHorizontal: 10,
        borderRadius: 5,
        marginBottom: 20,
        paddingBottom: 0
    }
})