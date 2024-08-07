import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions,Button,TextInput,Image} from 'react-native';
import React, { useState } from 'react'

const {width,height}=Dimensions.get("window")
const endpoint="https://pokeapi.co/api/v2/pokemon/"




export default function Home({navigation}) {

    function searchPokemon(pokemon){
        pokemon=pokemon.toLowerCase()
        fetch(endpoint+pokemon).then((res)=>{res.json().then((resjson)=>{setResponse(resjson)})})
    }

    const [pokemon,setPokemon]=useState("") 
    const [response,setResponse]=useState({})

    return (
        <View style={styles.container}>
            <TextInput style={styles.txt} 
            placeholder='Buscar Pokemon'
            value={pokemon}
            onChangeText={(value)=>{setPokemon(value)}}/>
            <Button title='Buscar' onPress={()=>{searchPokemon(pokemon),setPokemon("")}}/>
            
        </View>
        )

        
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        marginVertical: 30,
        width: width,
        height: height
    },
    txt:{
        fontSize:24,
        paddingHorizontal:10,
        paddingVertical:5,
        textAlign: 'center',
        width: width/1.5,
        borderColor:'#000',
        borderWidth:3,
        borderRadius:15,
    },
    img:{
        width: width/1.5,
        height: width/1.5,
    }
})