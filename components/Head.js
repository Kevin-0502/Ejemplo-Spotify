import { StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native'
import React from 'react'

const {width,height}=Dimensions.get("window")
const vocales=[{name:"a"},{name:"e"},{name:"i"},{name:"o"},{name:"u"}]

export default function Head() {
  return (
    <ScrollView 
    horizontal={true}
    style={styles.scroll}>
        {
            vocales.map((vocal,i)=>(
                <View key={i}>
                    <Text style={{fontSize:height*0.45}}>{vocal.name}</Text>
                </View>
            ))
        }
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    scroll:{
        backgroundColor:'lightblue',
        width:width,
    }
})