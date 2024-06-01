import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colorConstants, images } from '../utils/constants'

export const CustomHeader = (props) => {
  return (
    <View style={[styles.container1,props.style]}>
      <View style={styles.container2}>
        <View style={styles.container3}>
            <Pressable style={styles.container4} >
                <Image source={images.Menu} style={styles.image1}/>
            </Pressable>
            <Text style={styles.text1}>Learning Hub</Text>
        </View>

        <View style={styles.container3}>
        <Pressable style={[styles.container4,{marginRight:responsiveWidth(3)}]}>
                <Image source={images.Notification} style={styles.image1}/>
            </Pressable>
            <Pressable style={styles.container4}>
                <Image source={images.Profile} style={styles.image1}/>
            </Pressable>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container1:{
        width:responsiveWidth(100),
        height:responsiveHeight(7),
        backgroundColor:colorConstants.black1
    },
    container2:{
        width:responsiveWidth(90),
        height:responsiveHeight(7),
        alignSelf:"center",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    container3:{
        flexDirection:"row"
    },
    container4:{
        width:responsiveWidth(6),
        height:responsiveHeight(3),
        justifyContent:"center",
        alignItems:"center"
    },
    image1:{
        width:responsiveWidth(6),
        height:responsiveHeight(3),
        resizeMode:"contain"
    },
    text1:{
        fontSize:20,
        color:colorConstants.background,
        fontWeight:"600",
        marginLeft:responsiveWidth(3)
    }
})