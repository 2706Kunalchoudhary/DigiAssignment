import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colorConstants, images } from '../../utils/constants'
import { CustomHeader } from '../../customs/CustomHeader'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Progress, RecentlyCompleted, Upcoming } from './components'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.main}>
      <CustomHeader/>
      <View style={styles.container1}>
        <Pressable style={styles.container2} onPress={()=>navigation.goBack()}>
          <Image source={images.Arrow} style={styles.image1}/>
        </Pressable>
        <Text style={styles.text1}>Back to Dashboard</Text>
      </View>
      <Progress/>
      <RecentlyCompleted/>
      <Upcoming/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:colorConstants.fadeBg
  },
  container1:{
    width:responsiveWidth(90),
    alignSelf:"center",
    marginTop:responsiveHeight(1),
    flexDirection:"row",
    alignItems:"center"
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
  }
})