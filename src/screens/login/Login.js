import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colorConstants, images } from '../../utils/constants'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
import { CustomButton, CustomInput, CustomTC } from '../../customs'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const [check,setCheck] = useState(false)
  const navigation = useNavigation()
  return (
    <View style={styles.main}>
      <Text style={styles.text1}>digi<Text style={styles.text2}>accel</Text></Text>
      <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
      <Image source={images.Mobilelogin} style={styles.image1}/>
      
      <View style={styles.container1}>
        <Text style={styles.text3}>Sign-in</Text>
        <CustomInput
        style={styles.txtInp1}
        placeholder="Enter email or user name"
        />
        <CustomInput
        style={styles.txtInp1}
        placeholder="Password"
        />
        <Text style={styles.text4}>Forgot password?</Text>
        <CustomTC
        check={check}
        onPress={()=>setCheck(!check)}
        />
        <CustomButton
        style={styles.btn}
        onPress={()=>navigation.navigate("Home")}
        />
      </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:colorConstants.background
  },
  text1:{
    fontSize:20,
    fontWeight:"900",
    color:colorConstants.orange,
    width:responsiveWidth(90),
    alignSelf:"center",
    marginTop:responsiveHeight(2)

  },
  text2:{
    color:colorConstants.darkBlue
  },
  image1:{
    width:responsiveWidth(100),
    height:responsiveHeight(30),
    resizeMode:"contain",
    alignSelf:"center",
  },
  container1:{
    // flex:1,
    width:responsiveWidth(100),
    height:responsiveHeight(100),
    backgroundColor:colorConstants.fadeBg,
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  text3:{
    fontSize:30,
    fontWeight:"600",
    color:colorConstants.black1,
    width:responsiveWidth(90),
    alignSelf:"center",
    marginTop:responsiveHeight(2)

  },
  txtInp1:{
    marginTop:responsiveHeight(2)
  },
  text4:{
    fontSize:20,
    fontWeight:"600",
    color:colorConstants.blue,
    width:responsiveWidth(90),
    alignSelf:"center",
    marginTop:responsiveHeight(2),
    textAlign:"right"

  },
  btn:{
    marginTop:responsiveHeight(3)
  }
})