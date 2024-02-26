import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import FormPhone from "./FormPhone";
import FormEmail from "./FormEmail";
import Checkbox from "expo-checkbox";

const GetStarted_1 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [toggle, setToggle] = useState("Email");

  const toggleHandler = (next) => {
    setToggle(next);
  };

  // useEffect(() => {
  //   Alert.alert(`Toggle has changed to ${toggle}`);
  // });

  const Navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={{ height: "100%", backgroundColor: "red" }}>
      {/* NavBar Section */}
      <Image
        source={require("./../assets/15-1-removebg.png")}
        style={{ height: "7%", width: 90, margin: 10, opacity: 90 }}
      />
      {/* Main Section */}
      <View
        style={{
          backgroundColor: "white",
          height: "93%",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        {/* Main Input Section */}
        <View style={{}}>
          <Text style={{ fontWeight: 700, fontSize: 24 }}>Get Started</Text>
          <Text style={{ fontWeight: 400, fontSize: 12 }}>
            Sign up today to start placing your order
          </Text>
        </View>
        {/* Toggle Section */}
        {/* Input Section */}
        <View
          style={{
            flexDirection: "row",
            borderRadius: 10,
            borderColor: "red",
            borderWidth: 2,
            marginTop: 15,
            height: 60,
          }}
        >
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
              height: "100%",
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
              height: "100%",
            }}
            onPress={() => toggleHandler("Phone")}
          >
            <Text style={{ color: toggle == "Phone" ? "white" : "red" }}>
              Phone Number
            </Text>
          </TouchableOpacity>
        </View>

        {/* Toggle Section */}
        <KeyboardAvoidingView>
          {toggle == "Phone" ? <FormPhone /> : <FormEmail />}
        </KeyboardAvoidingView>

        {/* Checkbox View  */}
        <View
          style={{
            flexDirection: "row",
            marginVertical: 0,
            flexWrap: "nowrap",
            width: "100%",
            paddingVertical: 10,
            // alignItems: 'center',
          }}
        >
          <Checkbox
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? "red" : "red"}
            background={isChecked ? "white" : "red"}
          />

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              //justifyContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 12, marginLeft: 2 }}>
              If you are creating a new account,
            </Text>
            <TouchableOpacity style={{ flexWrap: "wrap" }}>
              <Text style={{ color: "red", fontSize: 12, flexWrap: "wrap" }}>
                Terms & Conditions
              </Text>
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 2, fontSize: 12 }}>and</Text>
            <TouchableOpacity>
              <Text style={{ color: "red", fontSize: 12 }}>Privacy Policy</Text>
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 2, fontSize: 12 }}>
              will apply
            </Text>
          </View>
        </View>
        {/* Get Started Button */}
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: 60,
            borderRadius: 10,
          }}
          onPress={() => Navigation.navigate("OtpVerification")}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Get Started</Text>
        </TouchableOpacity>

        {/* Already Have an account section */}
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 12 }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => Navigation.navigate("Login")}>
            <Text style={{ color: "red", fontSize: 12 }}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default GetStarted_1;
