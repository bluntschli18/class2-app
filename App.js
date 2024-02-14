import { Text, View, Image, TouchableOpacity, Button } from "react-native";
import Location from "./components/Location";
import Dolingo from "./components/Dolingo";
const App = () => {
  return (
    <View>
      <Dolingo/>
      <Location />
    </View>
  );
};

export default App;
