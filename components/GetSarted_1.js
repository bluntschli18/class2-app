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

const GetStarted_1 = () => {
  const [isSelected, setSelection] = useState(false);

  const [toggle, setToggle] = useState("Email");

  const toggleHandler = (next) => {
    setToggle(next);
  };

  useEffect(()=>{
    Alert.alert(`Toggle has changed to ${toggle}`)
  })

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
        <View style={{  }}>
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
              backgroundColor: toggle == "Phone" ? "white" : "red",
            }}
            onPress={() => toggleHandler("Phone")}
          >
            <Text style={{ color: toggle == "Phone" ? "red" : "white" }}>
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
              backgroundColor: toggle == "Email" ? "white" : "red",
            }}
            onPress={() => toggleHandler("Email")}
          >
            <Text style={{ color: toggle == "Email" ? "red" : "white" }}>
              Email Address
            </Text>
          </TouchableOpacity>
        </View>
        {toggle == "Phone" ? <FormPhone /> : <FormEmail />}
        <View
          style={{ flexDirection: "row", backgroundColor: "yellow" }}
        ></View>
      </View>
    </View>
  );
};

export default GetStarted_1;
