import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import VideoPlayer from '../screens/videoplayer/VideoPlayer';
import Home from '../screens/home/Home';



const Stack = createNativeStackNavigator();
const MainStack = (props) => {

  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
      <Stack.Screen name="Login" component={Login} options={{orientation:"portrait"}}/>
      <Stack.Screen name="Home" component={Home} options={{orientation:"portrait"}}/>
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
    </Stack.Navigator>

  )
}

export default MainStack