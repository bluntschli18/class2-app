import { Text, TouchableOpacity, View } from "react-native";

const Onboarding_3 = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={{ marginTop: 700, justifyContent: "space-between" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: 395,
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 30,
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Onboarding_3;
