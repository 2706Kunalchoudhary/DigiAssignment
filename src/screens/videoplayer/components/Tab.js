import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colorConstants } from '../../../utils/constants'
import { Queries } from './Queries'

const tabList = [
    {
        tab:"Queries"
    },
    {
        tab:"Notes"
    },
]
export const Tab = (props) => {
    const [active,setActive] = useState("Queries")
  return (
    <View style={[styles.container,props.style]}>
      <View style={styles.container1}>
        {
            tabList.map((item,index)=>{
                return(
                    <>
                    <Pressable key={index} style={styles.container2} onPress={()=>setActive(item.tab)}>
                        <Text style={[styles.text1,active===item.tab&&styles.activeText]}>{item.tab}</Text>
                        {
                        active===item.tab
                        &&
                    <View style={styles.divider}/>
            }
                    </Pressable>
                    
                    </>
                )
            })
        }
      </View>
      {active==="Queries" && <Queries/>}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    container1:{
        width:responsiveWidth(90),
        alignSelf:"center",
        flexDirection:"row",
        marginTop:responsiveHeight(2)
    },
    container2:{
        marginHorizontal:responsiveWidth(5),
        width:responsiveWidth(25),
        alignItems:"center"
    },
    text1:{
        fontSize:20,
        color:colorConstants.border,
        fontWeight:"600",
        textAlign:"center"
    },
    activeText:{
        color:colorConstants.black1
    },
    divider:{
        width:responsiveWidth(20),
        height:responsiveHeight(0.5),
        backgroundColor:colorConstants.blue
    }
})