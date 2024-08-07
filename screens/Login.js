import { StyleSheet, Text, View,Dimensions,Button } from 'react-native'
import React from 'react'

const {width,height}=Dimensions.get("window")


export default function Login({navigation}) {
return (
        <View style={styles.container}>
            <Text style={styles.txt}>Login</Text>
            <Button title="Go to Home" onPress={()=>{navigation.navigate("Drawer")}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        width: width,
        height: height
    },
    txt:{
        fontSize:28,
        fontWeight:'bold'
    }
})