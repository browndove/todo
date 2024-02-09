import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Tasks = (props) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemleft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
      <Text style={styles.itemText}>{props.text}</Text>
     </View>
     <View style={styles.circle}>

     </View>
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },

    itemleft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.6,
        borderRadius: 5,
        marginRight: 15
    },
    itemText:{
        maxWidth: '80%',
    },
    circle:{
        width: 12,
        height: 12,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#55BCF6',
    }
})