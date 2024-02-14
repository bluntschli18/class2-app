import { Text, View, Image, TouchableOpacity, Button } from "react-native";
import Location from "./components/Location";
import Duolingo from "./components/duolingo";
const App = () => {
  return (
    <View>
      <Duolingo/>
      <Location />
    </View>
  );
};

export default App;
