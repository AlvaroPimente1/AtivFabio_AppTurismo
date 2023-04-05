import React from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import { CheckBox } from "react-native-elements";
import { useState } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from 'react';
import { Icon } from 'react-native-elements';

export default function Home({ navigation }){

    const [data, setData] = useState([
        { key: '1', name: 'Salinas', regiao: 'Norte', diferencial: "Praia", favorito: false, image: require('../images/salinas.png')},
        { key: '2', name: 'Mosqueiro', regiao: 'Norte', diferencial: "Praia", favorito: false, image: require('../images/mosqueiro.jpg')},
        { key: '3', name: 'Marudá', regiao: 'Norte',  diferencial: "Praia", favorito: false, image: require('../images/maruda.jpg')},
        { key: '4', name: 'Gramado', regiao: 'Sul',  diferencial: "Cidade", favorito: false, image: require('../images/gramado.jpg')},
        { key: '5', name: 'Búzios', regiao: 'Sudeste',  diferencial: "Praia", favorito: false, image: require('../images/buzios.jpg')},
        { key: '6', name: 'Recife', regiao: 'Nordeste',  diferencial: "Praia", favorito: false, image: require('../images/recife.jpg')},
        { key: '7', name: 'Brasília', regiao: 'Centro-Oeste',  diferencial: "Cidade", favorito: false, image: require('../images/brasilia.jpg')},
        { key: '8', name: 'São Paulo', regiao: 'Sudeste',  diferencial: "Cidade", favorito: false, image: require('../images/saoPaulo.jpg')},
]);

    const [text, setText] = useState('')
    const [list, setList] = useState('')
    const [items, setItems] = useState('')   
    const [isSelected, setSelection] = useState(false);
    
    const toggleFavorite = (index) => {
        const newData = [...data];
        newData[index].favorito = !newData[index].favorito;
        setData(newData);
}

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
                    <Image source={item.image} style={{ width: 45, height: 45, borderRadius: 10}}/>
                    <Text style={{fontSize: 18, color: '#000', marginLeft: 10, paddingVertical: 9}}>{item.name}</Text>
                    <TouchableOpacity onPress={() => toggleFavorite(item.key)}><Text>Favoritar</Text></TouchableOpacity>
                    <Icon
                        name={item.favorito ? 'star' : 'star-o'}
                        type="font-awesome"
                        color={item.favorito ? 'yellow' : 'gray'}
                    />
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
            styles={styles.checkbox}
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
    },
});