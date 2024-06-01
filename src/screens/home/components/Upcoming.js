import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colorConstants, images } from '../../../utils/constants'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const data = [{},{},{}]

export const Upcoming = () => {

    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={styles.container3}>
                <Pressable style={styles.container4}>
                    <View style={styles.container5}>
                        <Image source={images.Screenshot} style={styles.image1}/>
                    </View>
                    <View style={styles.container6}>
                        <Text style={styles.text2}>Digital Shopper Journey</Text>
                        <Text style={styles.text3}>Locked</Text>
                    </View>
                </Pressable>
            </View>
        )
    }
    return (
        <View style={styles.container1}>
            <Text style={styles.text1}>Upcoming Modules</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: colorConstants.background,
        marginTop: responsiveHeight(2),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    text1: {
        width: responsiveWidth(90),
        color: colorConstants.black1,
        fontSize: 20,
        fontWeight: "700",
        alignSelf: "center",
        marginTop: responsiveHeight(2)
    },
    container3: {
        // backgroundColor:"red",
        marginVertical:responsiveHeight(1),
        alignSelf:"center"
    },
    container4: {
        width: responsiveWidth(90),
        height: responsiveHeight(12),
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
        height:responsiveHeight(8),
        borderRadius:8
    },
    image1:{
        width:responsiveWidth(15),
        height:responsiveHeight(8),
        resizeMode:"cover",
        borderRadius:8
    },
    container6:{
        width:responsiveWidth(65),
        height:responsiveHeight(8),
        borderRadius:8,
    },
    text2:{
        fontSize:16,
        color:colorConstants.black1,
        fontWeight:"600"
    },
    text3:{
        fontSize:12,
        color:colorConstants.border,
        fontWeight:"400",
        marginTop:responsiveHeight(1),
        backgroundColor:colorConstants.textGrey,
        width:responsiveWidth(15),
        height:responsiveHeight(3),
        textAlign:"center",
        textAlignVertical:"center",
        borderRadius:6
    },
})