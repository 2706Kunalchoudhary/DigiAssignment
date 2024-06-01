import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colorConstants } from '../utils/constants'

export const CustomButton = (props) => {
  return (
    <Pressable style={[styles.container1,props.style]} onPress={props.onPress}>
      <Text style={styles.text1}>Sign-in</Text>
      </Pressable>
  )
}


const styles = StyleSheet.create({
    container1:{
        width:responsiveWidth(90),
        height:responsiveHeight(6),
        backgroundColor:colorConstants.blue,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
    },
    text1:{
        fontSize:18,
        color:colorConstants.background,
        fontWeight:"700"
    }
})