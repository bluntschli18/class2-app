import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Onboarding_3 = () => {
  const Navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "column",
        height: "100%",
        padding: 20,
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          width: "95%",
          alignItems: "center",
          justifyContent: "center",
          height: 60,
          borderRadius: 10,
        }}
        onPress={() => Navigation.navigate("GetStarted")}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: "5%",
          marginBottom: "10%",
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          height: 60,
          width: "95%",
          borderRadius: 10,
        }}
        onPress={() => Navigation.navigate("Login")}
      >
        <Text style={{ fontSize: 20 }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Onboarding_3;
