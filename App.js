import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import Onboarding_1 from "./components/Onboarding-1";
import Onboarding_3 from "./components/Onboarding_3";
import Onboarding_2 from "./components/Onboarding_2";
import Location from "./components/Location";
import Duolingo from "./components/Duolingo";
import GetStarted_1 from "./components/GetSarted_1";

// rnfes is a shortcut for creating your react-native application entry point without typing anything

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Location" component={Location} options={{headerShown: false}}/>
        <Stack.Screen name="Onboarding-1" component={Onboarding_1}  options={{headerShown: false}} />
        <Stack.Screen name="Onboarding-2" component={Onboarding_2} options={{headerShown: false}}/>
        <Stack.Screen name="Onboarding-3" component={Onboarding_3} options={{headerShown: false}}/>
        <Stack.Screen name="GetStarted_1" component={GetStarted_1} options={{headerShown: false}}/>
        <Stack.Screen name="Duolingo" component={Duolingo} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;