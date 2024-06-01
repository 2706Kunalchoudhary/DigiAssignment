import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colorConstants } from '../utils/constants'

export const CustomTC = (props) => {
  return (
    <View style={[styles.container1]}>
      <Pressable style={styles.container2} onPress={props.onPress}>
        {
          props.check
          &&
          <View style={styles.container3}/>
        }
      </Pressable>
      <Text style={styles.text1}>By signing up, you agree to our <Text style={styles.text2}>terms of{"\n"}services</Text> and <Text style={styles.text2}> privacy policy</Text>.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container1:{
        width:responsiveWidth(90),
        alignSelf:"center",
        flexDirection:"row",
        alignItems:"center",
        marginTop:responsiveHeight(10)
    },
    container2:{
        width:30,
        height:30,
        borderWidth:1,
        borderColor:colorConstants.blue,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center"
    },
    text1:{
        fontSize:16,
        color:colorConstants.black1,
        marginLeft:responsiveWidth(2),
        fontWeight:"500"
    },
    text2:{
        color:colorConstants.blue
    },
    container3:{
      width:20,
      height:20,
      backgroundColor:colorConstants.blue,
      borderRadius:5
    }
})