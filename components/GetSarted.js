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
  const Navigation = useNavigation();
  return (
    <View style={{ height: "100%", backgroundColor: "red" }}>
      {/* NavBar Section */}
      <Image
        source={require("./../assets/15-1-removebg.png")}
        style={{ height: "10%", width: 90, margin: 10 }}
      />
      {/* Main Section */}
      <View
        style={{
          backgroundColor: "white",
          height: "90%",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        {/* Main Input Section */}
        <Text style={{ fontWeight: 800, fontSize: 20 }}>Get Started</Text>
        <Text style={{ fontWeight: 400, fontSize: 10 }}>
          Sign up today to start placing your order
        </Text>
        {/* Toggle Section */}
        {/* Input Section */}
        <View
          style={{
            flexDirection: "row",
            borderRadius: 10,
            borderColor: "red",
            borderWidth: 2,
            marginTop: 10,
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
            onPress={() => setToggle("Email")}
          >
            <Text
              style={{
                color: toggle == "Email" ? "white" : "red",
                fontWeight: "bold",
              }}
            >
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
            onPress={() => setToggle("Phone")}
          >
            <Text
              style={{
                color: toggle == "Phone" ? "white" : "red",
                fontWeight: "bold",
              }}
            >
              Phone Number
            </Text>
          </TouchableOpacity>
        </View>

        {/* Toggle Section */}
        {toggle == "Phone" ? <FormPhone /> : <FormEmail />}

        {/* Checkbox View  */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingVertical: 10,
            gap: 6,
          }}
        >
          <Checkbox
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? "red" : "red"}
          />

          <Text
            style={{
              flexDirection: "row",
              fontSize: 12,
              justifyContent: "space-evenly",
              gap: 8,
            }}
          >
            If you are creating a new account, {""}
            <Text
              onPress={() =>
                Alert.alert(
                  "Coming Soon, We are updating our Terms & Conditions"
                )
              }
              style={{
                color: "red",
                fontSize: 12,
              }}
            >
              Terms & Conditions
            </Text>
            {""} and {""}
            <Text
              onPress={() =>
                Alert.alert("Coming Soon, We are updating our Privacy Policy")
              }
              style={{ color: "red", fontSize: 12, marginHorizontal: 3 }}
            >
              Privacy Policy {""}
            </Text>
            will apply
          </Text>
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
        <Text
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 10,
            textAlign: "center",
            gap: 10,
          }}
        >
          <Text style={{ fontSize: 12, marginLeft: 2 }}>
            Already have an account? {""}
          </Text>
          <Text
            onPress={() => Navigation.navigate("Login")}
            style={{
              textAlign: "center",
              color: "red",
              fontSize: 12,
              marginLeft: 2,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default GetStarted_1;
