import React from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from 'react';

export default function Home({ navigation }){

    const data = [
        { key: '1', name: 'Salinas', regiao: 'Norte', diferencial: "Praia", favorito: false},
        { key: '2', name: 'Mosqueiro', regiao: 'Norte', diferencial: "Praia", favorito: false},
        { key: '3', name: 'Marudá', regiao: 'Norte',  diferencial: "Praia", favorito: false},
        { key: '4', name: 'Gramado', regiao: 'Sul',  diferencial: "Cidade", favorito: false},
        { key: '5', name: 'Búzios', regiao: 'Sudeste',  diferencial: "Praia", favorito: false},
        { key: '6', name: 'Poço de Caldas', regiao: 'Centro-Oeste',  diferencial: "Cidade", favorito: false},
        { key: '7', name: 'Brasília', regiao: 'Centro-Oeste',  diferencial: "Cidade", favorito: false},
        { key: '8', name: 'São Paulo', regiao: 'Sudeste',  diferencial: "Cidade", favorito: false},
    ];

    const [text, setText] = useState('')
    const [list, setList] = useState('')
    const [items, setItems] = useState('')    
    const [isSelected, setSelection] = useState(false);

    useEffect(()=>{
        setList(data)
        setItems(data)    
    },[])  

    useLayoutEffect(() => {
        navigation.setOptions({ tabBarVisible: true });
    }, [navigation]);

function FiltroBusca(text) {
    const filterList = items.filter((item) => {  
        const itemFilter = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const regionFilter = item.regiao ? item.regiao.toUpperCase() : ''.toUpperCase();
        const diffFilter = item.diferencial ? item.diferencial.toUpperCase() : ''.toUpperCase();
        const newText = text.toUpperCase();
        return itemFilter.indexOf(newText) > -1 || regionFilter.indexOf(newText) > -1 || diffFilter.indexOf(newText) > -1;
    });
        setList(filterList)
        setText(text)
    }    

    const renderItem = ({item}) =>{
        return(
            <View style={styles.lista}>
                <TouchableOpacity style={{flexDirection: 'row'}}
                    onPress={() => navigation.navigate('Detalhes')}
                >
                    <Image source={item.image} style={{ width: 40, height: 40, borderRadius: 15}}></Image>
                    <Text style={{fontSize: 18, color: '#000', marginLeft: 10, paddingVertical: 9}}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        );
    }


    return(
        <SafeAreaView style={styles.conteiner}>
        <Text style={styles.titulo}>Lista de receitas</Text>
        <TextInput
            style={styles.inputText}
            placeholder={'Pesquise a receita que quiser'}
            onChangeText={(t)=>FiltroBusca(t)} value={text}
        />

        <FlatList
            data={list}
            renderItem={renderItem}
        />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "#2F4F4F"
    },

    inputText: {
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderColor: '#000',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15,
        marginBottom: 5,
        backgroundColor: '#dcdcdc',
        color: '#000'
    },

    titulo: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 10
    },

    lista: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderWidth: 1.5,
        borderColor: "#000",
        backgroundColor: '#F5F5F5',
        borderRadius: 5, 
        marginVertical: 3,
    },

    Text: {
        fontSize: 18,
        color: '#000',
        
    },
    image: {
        resizeMode: "contain"
    },

    checkbox: {
        backgroundColor: "#000"
    }
});