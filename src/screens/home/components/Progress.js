import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colorConstants, images } from '../../../utils/constants'
import { useNavigation } from '@react-navigation/native'

const data = [{},{}]
export const Progress = () => {
    const navigation = useNavigation()
    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={styles.container3}>
                <Pressable style={styles.container4} onPress={()=>navigation.navigate("VideoPlayer")}>
                    <View style={styles.container5}>
                        <Image source={images.Screenshot} style={styles.image1}/>
                    </View>
                    <View style={styles.container6}>
                        <Text style={styles.text2}>Digital Shopper Journey</Text>
                        <Text style={styles.text3}>4 Learning hours left</Text>
                        <View style={styles.container7}></View>
                        <Text style={styles.text4}>0%</Text>
                    </View>
                </Pressable>
            </View>
        )
    }
    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                <Text style={styles.text1}>In Progress</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        width: responsiveWidth(100),
        marginTop: responsiveHeight(2),
    },
    container2: {
        width: responsiveWidth(90),
        alignSelf: "center"
    },
    text1: {
        width: responsiveWidth(20),
        height: responsiveHeight(4),
        backgroundColor: "#226EEA40",
        borderRadius: 8,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 14,
        color: colorConstants.blue,
        fontWeight: "600"
    },
    container3: {
        // backgroundColor:"red",
        marginVertical:responsiveHeight(1),
        marginHorizontal:responsiveWidth(2)
    },
    container4: {
        width: responsiveWidth(60),
        height: responsiveHeight(17),
        backgroundColor: colorConstants.background,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        borderRadius:8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.58,
        shadowRadius: 4,
        elevation: 2,
    },
    container5:{
        width:responsiveWidth(15),
        height:responsiveHeight(13),
        borderRadius:8
    },
    image1:{
        width:responsiveWidth(15),
        height:responsiveHeight(13),
        resizeMode:"cover",
        borderRadius:8
    },
    container6:{
        width:responsiveWidth(35),
        height:responsiveHeight(13),
        borderRadius:8,
    },
    text2:{
        fontSize:16,
        color:colorConstants.black1,
        fontWeight:"600"
    },
    text3:{
        fontSize:12,
        color:colorConstants.blue,
        fontWeight:"400",
        marginTop:responsiveHeight(1)
    },
    container7:{
        width:responsiveWidth(35),
        height:responsiveHeight(1),
        borderRadius:8,
        backgroundColor:colorConstants.border,
        marginTop:responsiveHeight(2)
    },
    text4:{
        fontSize:16,
        color:colorConstants.black1,
        fontWeight:"600",
    },
})