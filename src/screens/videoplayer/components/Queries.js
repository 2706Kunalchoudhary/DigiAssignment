import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colorConstants } from '../../../utils/constants'

export const Queries = () => {
  return (
    <View style={styles.container1}>
      <TextInput style={styles.txtInp}
      multiline={true}
      />
      <View style={styles.container2}>
        <Pressable style={styles.container3}>
            <Text style={styles.text1}>Submit Query</Text>
        </Pressable>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container1:{
        flex:1
    },
    txtInp:{
        width:responsiveWidth(90),
        height:responsiveHeight(10),
        borderWidth:1,
        borderColor:colorConstants.border,
        borderRadius:4,
        alignSelf:"center",
        marginTop:responsiveHeight(2),
        textAlignVertical:"top",
        paddingHorizontal:10
    },
    container2:{
        width:responsiveWidth(90),
        alignSelf:"center",
        marginTop:responsiveHeight(2),
        justifyContent:"flex-end",
        flexDirection:"row"
    },
    container3:{
        width:responsiveWidth(30),
        height:responsiveHeight(4),
        backgroundColor:colorConstants.blue,
        borderRadius:4,
        justifyContent:"center",
        alignItems:"center"
    },
    text1:{
        fontSize:16,
        color:colorConstants.background,
        fontWeight:"600"
    },
})