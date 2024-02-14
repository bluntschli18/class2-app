import { Text, View, Image, TouchableOpacity, Button } from "react-native";
import Onboarding_1 from "./components/Onboarding-1";
// import Onboarding_2 from "./components/Onboarding_2";
import Location from "./components/Location";
import Duolingo from "./components/Duolingo";
const App = () => {
  return (
    <View>
      <Duolingo />
      {/* <Location /> */}
      {/* <Onboarding_2/> */}
      {/* <Onboarding_1/> */}
    </View>
  );
};

export default App;
