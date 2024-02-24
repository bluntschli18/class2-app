import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import LoginEmail from "./LoginEmail";
import LoginPhone from "./LoginPhone";

export default Login = () => {
  const Navigation = useNavigation();

  const [toggle, setToggle] = useState("Email");

  const toggleHandler = (next) => {
    setToggle(next);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("./../assets/15-1-removebg.png")}
        style={{ height: "10%", width: 90, margin: 10, opacity: 90 }}
      />
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Login</Text>
        <Text style={styles.welcomeSubText}>
          Welcome back, Login to place your order today
        </Text>
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
        {/* Toggle Section */}
        {toggle == "Phone" ? <LoginPhone /> : <LoginEmail />}
        {/* Toggle Section */}
        {/* The Login Botton Section */}
        <View
          style={{
            marginTop: 30,
          }}
        >
          {/* Login Button */}
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              height: 60,
              borderRadius: 10,
            }}
            onPress={() => Navigation.navigate("Test")}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Login</Text>
          </TouchableOpacity>
          {/* The Login Botton Section Ends Here */}
          {/* Don't Have an account section */}
          <View style={styles.dontHave}>
            <Text style={{ fontSize: 15 }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => Navigation.navigate("GetStarted")}>
              <Text style={{ color: "red", fontSize: 15 }}> SignUp </Text>
            </TouchableOpacity>
          </View>
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
    marginVertical: 10,
    fontWeight: "bold",
  },
  welcomeSubText: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: "300",
  },

  dontHave: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
