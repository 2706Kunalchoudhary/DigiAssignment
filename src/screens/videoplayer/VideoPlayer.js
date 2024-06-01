import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Video from 'react-native-video'
import { CustomHeader } from '../../customs/CustomHeader'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colorConstants, images } from '../../utils/constants'
import { Tab } from './components'
import { useNavigation } from '@react-navigation/native'

const data = [{},{},{}]
const VideoPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0);
  const [active,setActive] = useState(false)
  const videoRef = useRef()
  const navigation = useNavigation()



  const onLoadEnd = data => {
    setDuration(data.duration);
    setCurrentTime(data.currentTime);
  };

  const onProgress = data => {
    setCurrentTime(data.currentTime);
  };


  const onEnd = () => {
    setPlay(false);
    videoRef.current.seek(0);
  };

  const renderItem = ({item,index})=>{
    return(
      <View key={index} >
        <View style={styles.container8}>
          <View style={styles.container9}>
            <Image source={images.Lock} style={styles.image3}/>
          </View>
          <Text style={styles.text5}>Digital Journey Explainer</Text>
        </View>
        {
          index!==data.length-1
          &&
          <View style={{width:responsiveWidth(90),alignSelf:"center"}}>
        <View style={styles.divider}/>
        </View>
  }
      </View>
    )
  }
  return (
    <View style={styles.main}>
      <CustomHeader
      style={styles.header}
      />
      <View style={styles.container1}>
        <Pressable style={styles.container2} onPress={()=>navigation.goBack()}>
          <Image source={images.Arrow} style={styles.image1}/>
        </Pressable>
        <Text style={styles.text1}>Back</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.text2}>Digital Shopper Journey</Text>
        <View style={{flexDirection:"row"}}>
          <Text style={[styles.text3,{marginRight:responsiveWidth(3)}]}>Previous</Text>
          <Text style={styles.text3}>Next</Text>
        </View>
      </View>
      <Video
        source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }}
        style={styles.backgroundVideo}
        controls={true}
        volume={10}
        ref={videoRef}
        onLoad={onLoadEnd}
        onProgress={onProgress}
        onEnd={onEnd}
      />
      <View style={{flex:1,position:"absolute",top:responsiveHeight(46)}}>
        <ScrollView>
      <View style={[styles.container4]}>
        <View style={styles.container5}>
        <View style={{flexDirection:"row"}}>
          <Pressable>
            <Image source={images.Content}/>
          </Pressable>
          <Text style={styles.text4}>Content List</Text>
        </View>
        <Pressable style={styles.container6} onPress={()=>setActive(!active)}>
        <Image source={images.Down} style={[styles.image2,active===true && {transform: [{rotate: '180deg'}]}]}/>
        </Pressable>
        </View>
        {
          active===true
          &&
          <ScrollView horizontal style={{marginLeft:responsiveWidth(4)}}>
          <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item=>item.id}
          />
          </ScrollView>
        }
      </View>
      <Tab style={styles.tab}/>
      </ScrollView>
      </View>
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header:{
    position:"absolute",
    top:0
  },
  container1:{
    width:responsiveWidth(90),
    alignSelf:"center",
    flexDirection:"row",
    alignItems:"center",
    position:"absolute",
    top:responsiveHeight(8)
  },
  container2:{
    width:responsiveWidth(7),
    height:responsiveHeight(3),
    justifyContent:"center",
    alignItems:"center",
  },
  image1:{
    width:responsiveWidth(7),
    height:responsiveHeight(3),
    resizeMode:"contain"
  },
  text1:{
    fontSize:20,
    color:colorConstants.black1,
    fontWeight:"500",
    marginLeft:responsiveWidth(2),
  },
  container3:{
    width:responsiveWidth(90),
    alignSelf:"center",
    position:"absolute",
    top:responsiveHeight(12),
    flexDirection:"row",
    justifyContent:"space-between"
  },
  text2:{
    fontSize:18,
    color:colorConstants.black1,
    fontWeight:"500",
  },
  backgroundVideo: {
    position: 'absolute',
    top: responsiveHeight(16),
    left: 0,
    bottom: 0,
    right: 0,
    height: responsiveHeight(30),
  },
  text3:{
    fontSize:18,
    color:colorConstants.blue,
    fontWeight:"500",
  },
  container4:{
    width:responsiveWidth(100),
    minHeight:responsiveHeight(5),
    backgroundColor:"#226EEA30",
    // position:"absolute",
    // top:responsiveHeight(46)
  },
  container5:{
    width:responsiveWidth(90),
    height:responsiveHeight(5),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    alignSelf:"center"
  },
  text4:{
    fontSize:16,
    color:colorConstants.blue,
    fontWeight:"700",
    marginLeft:responsiveWidth(2)
  },
  container6:{
    width:responsiveWidth(10),
    height:responsiveHeight(3),
  },
  image2:{
    width:responsiveWidth(10),
    height:responsiveHeight(3),
    resizeMode:"contain"
  },
  container7:{
    width:responsiveWidth(90),
    flexDirection:"row",
    alignSelf:"center"
  },
  container8:{
    width:responsiveWidth(90),
    flexDirection:"row",
    alignSelf:"center",
    alignItems:"center"
  },
  container9:{
    width:36,
    height:36,
    borderRadius:18,
    backgroundColor:colorConstants.border,
    justifyContent:"center",
    alignItems:"center"
  },
  image3:{
    width:responsiveWidth(5),
    height:responsiveHeight(3),
    resizeMode:"contain"
  },
  text5:{
    fontSize:16,
    color:colorConstants.black1,
    fontWeight:"700",
    marginLeft:responsiveWidth(3)
  },
  divider:{
    height:responsiveHeight(5),
    width:responsiveWidth(1),
    backgroundColor:colorConstants.border,
    marginLeft:responsiveWidth(3.5)
  },
})