import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colorConstants } from '../utils/constants'

export const CustomInput = (props) => {
  return (
    <View style={[styles.container1,props.style]}>
      <TextInput
      style={[styles.txtInp1]}
      placeholder={props.placeholder}
      placeholderTextColor={colorConstants.border}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container1:{
    width:responsiveWidth(90),
    height:responsiveHeight(7),
    backgroundColor:colorConstants.background,
    borderRadius:8,
    alignSelf:"center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.58,
    shadowRadius: 4,
    elevation: 2
  },
  txtInp1:{
    width:responsiveWidth(90),
    height:responsiveHeight(7),
    borderRadius:8,
    paddingHorizontal:10,
    fontSize:18,
    color:colorConstants.black
  }
})