import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { React, useState } from "react";

export default Login = () => {
  const [toggle, setToggle] = useState("Email");

  const toggleHandler = (next) => {
    setToggle(next);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("./../assets/15-1-removebg.png")}
        style={{ height: '10%', width: 90, margin: 10, opacity: 90 }}
      />
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Login</Text>
        <Text style={styles.welcomeSubText}>Welcome back, Login to place your order today</Text>
        <View style={styles.instructions}>
          {/* Email Address */}
          <TouchableOpacity
            style={{
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
              borderColor: "red",
              backgroundColor: "white",
              borderTopLeftRadius: 7,
              borderBottomLeftRadius: 7,
              backgroundColor: toggle == "Email" ? "red" : "white",
              height: 56,
            }}
            onPress={() => toggleHandler("Email")}
          >
            <Text style={{ color: toggle == "Email" ? "white" : "red" }}>
              Email Address
            </Text>
          </TouchableOpacity>

          {/* Phone Number  */}
          <TouchableOpacity
            style={{
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
              borderTopRightRadius: 7,
              borderBottomRightRadius: 7,
              backgroundColor: toggle == "Phone" ? "red" : "white",
              height: 56,
            }}
            onPress={() => toggleHandler("Phone")}
          >
            <Text style={{ color: toggle == "Phone" ? "white" : "red" }}>
              Phone Number
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "red",
  },
  welcome: {
    height: "90%",
    padding: 25,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  instructions: {
    flexDirection: "row",
  },
  welcomeText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
  welcomeSubText: {
    fontSize: 17,
    margin: 10,
    fontWeight: "300",
  },
});
