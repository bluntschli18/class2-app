import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import { createDrawerNavigator } from "@react-navigation/drawer"
import Onboarding_1 from "./components/Onboarding-1";
import Onboarding_3 from "./components/Onboarding_3";
import Onboarding_2 from "./components/Onboarding_2";
import Location from "./components/Location";
import GetStarted from "./components/GetSarted";
import Login from "./components/Login";
import OtpVerification from "./components/OtpVerification";
import Verified from "./components/Verified";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ServicesScreen from "./screens/ServicesScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
// rnfes is a shortcut for creating your react-native application entry point without typing anything
const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "home" : "home"}
                size={25}
                color={focused ? "red" : "grey"}
              />
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "person" : "person"}
                size={25}
                color={focused ? "red" : "grey"}
              />
            )
          }}
        />
        <Tab.Screen
          name="Services"
          component={ServicesScreen}
          options={{
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "services" : "services"}
                size={25}
                color={focused ? "red" : "grey"}
              />
            )
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "about" : "about"}
                size={25}
                color={focused ? "red" : "grey"}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};