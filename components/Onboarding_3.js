import { Text, TouchableOpacity, View } from "react-native";

const Onboarding_3 = () => {
  return (
    <View
      style={{ height: "100%", alignItems: "center", justifyContent: "center" }}
    >
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: '95%',
            alignItems: "center",
            justifyContent: "center",
            height: 70,
            borderRadius: 10,
            marginTop:'150%',
          }}
        >
          <Text style={{ fontSize: 20 }}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: '5%',
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            height: 70,
            width: '95%',
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
    </View>
  );
};
export default Onboarding_3;
