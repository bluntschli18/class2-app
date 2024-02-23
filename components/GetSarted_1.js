import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import FormPhone from "./FormPhone";
import FormEmail from "./FormEmail";
import Icon from "react-native-vector-icons/Ionicons";
import Checkbox from "./../node_modules/expo-checkbox/build/Checkbox.d";

const GetStarted_1 = () => {
  const [isSelected, setSelected] = useState(false);
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
    <View style={{ height: "100%", backgroundColor: "red" }}>
      {/* NavBar Section */}
      <Image
        source={require("./../assets/15-1-removebg.png")}
        style={{ height: 80, width: 90, margin: 10, opacity: 90 }}
      />
      {/* Main Section */}
      <View
        style={{
          backgroundColor: "white",
          height: "90%",
          padding: 25,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        {/* Main Input Section */}
        <View style={{}}>
          <Text style={{ fontWeight: 800, fontSize: 24 }}>GET STARTED</Text>
          <Text style={{ fontWeight: 300, fontSize: 17 }}>
            Sign up today and start placing your order
          </Text>
        </View>
        {/* Toggle Section */}
        {/* Input Section */}
        <View
          style={{
            flexDirection: "row",
            height: 50,
            borderRadius: 10,
            borderColor: "red",
            borderWidth: 2,
            marginTop: 15,
            height: 60,
          }}
        >
          {/* Phone Number  */}
          <TouchableOpacity
            style={{
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: 7,
              borderBottomLeftRadius: 7,
              backgroundColor: toggle == "Phone" ? "red" : "white",
              height: 56,
            }}
            onPress={() => toggleHandler("Phone")}
          >
            <Text style={{ color: toggle == "Phone" ? "white" : "red" }}>
              Phone Number
            </Text>
          </TouchableOpacity>

          {/* Email Address */}
          <TouchableOpacity
            style={{
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
              borderColor: "red",
              backgroundColor: "white",
              borderTopRightRadius: 7,
              borderBottomRightRadius: 7,
              backgroundColor: toggle == "Email" ? "red" : "white",
              height: 56,
            }}
            onPress={() => toggleHandler("Email")}
          >
            <Text style={{ color: toggle == "Email" ? "white" : "red" }}>
              Email Address
            </Text>
          </TouchableOpacity>
        </View>

        {/* Toggle Section */}
        {toggle == "Phone" ? <FormPhone /> : <FormEmail />}

        {/* Checkbox View  */}
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
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
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 15, marginHorizontal: 2 }}>
              If you are creating a new account,
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "red", fontSize: 15 }}>
                Terms & Conditions
              </Text>
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 2, fontSize: 15 }}>and</Text>
            <TouchableOpacity>
              <Text style={{ color: "red", fontSize: 15 }}>Privacy Policy</Text>
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 2, fontSize: 15 }}>
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
            height: 70,
            borderRadius: 10,
          }}
          onPress={() => Navigation.navigate("Test")}
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
          <Text style={{ fontSize: 15 }}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={{ color: "red", fontSize: 15 }}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GetStarted_1;
