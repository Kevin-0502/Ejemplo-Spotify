import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Dimensions,Button} from 'react-native';
import React from 'react'

const {width,height}=Dimensions.get("window")

export default function Profile({navigation}) {
return (
        <View style={styles.container}>
            <Text style={styles.txt}>Profile</Text>
            <Button title="Go to Login" onPress={()=>{navigation.navigate("Login")}}/>
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