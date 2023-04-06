import React from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import 'react-native-vector-icons/Fonts/MaterialIcons.ttf'
import { useState } from "react";
import { useEffect } from "react";
import { data } from '../data/data';


export default function Home({ navigation }){
    const [text, setText] = useState('')
    const [list, setList] = useState('')
    const [items, setItems] = useState('') 
    const [isImageOne, setIsImageOne] = useState(true);

    const handleImageToggle = () => {
        setIsImageOne(!isImageOne);
    };

    function handleCityPress(item) {
        navigation.navigate('Detalhes', { city: item });
    }


    useEffect(()=>{
        setList(data)
        setItems(data)    
    },[])  



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
                <TouchableOpacity style={{ flexDirection: 'row' }}
                    onPress={() => handleCityPress(item)}
                >
                    <Image source={item.image} style={styles.imagemCidade}/>
                    <Text style={styles.textLista}>{item.name}</Text>
                    <TouchableOpacity
                        style={styles.estrela}
                        onPress={handleImageToggle}
                    >
                        <Image
                        style={styles.estrela}
                            source={isImageOne ? require('../images/baseline_star_outline_black_18dp.png') : require('../images/baseline_star_rate_black_18dp.png')}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        );
    }


    return(
        <SafeAreaView style={styles.conteiner}>
        <Text style={styles.titulo}>Turismo app</Text>
        <TextInput
            style={styles.inputText}
            placeholder={'Pesquise a cidade que quiser'}
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
        paddingHorizontal: 10,
        borderWidth: 1.5,
        borderColor: "#000",
        backgroundColor: '#F5F5F5',
        borderRadius: 5, 
        marginVertical: 3,
        marginHorizontal: 10
    },

    textLista: {
        fontSize: 18,
        color: '#000', 
        marginLeft: 10, 
        paddingVertical: 9, 
        flex: 1
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

    estrela: {
        width: 20,
        height: 20, 
        alignItems: 'flex-end',
        paddingVertical: 12,
        marginEnd: 10
    },

    imagemCidade: {
        width: 45, 
        height: 45, 
        borderRadius: 10
    }
});