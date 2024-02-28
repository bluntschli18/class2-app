import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import IconSet from "react-native-vector-icons/Ionicons";
import { useState, useEffect } from "react";

const phone = () => {
  // Code lin for Password
  const [Password, setPassword] = useState();
  const [showPassword, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown(!showPassword);
  };

  // Code lin for Confirm Password
  const [confirmPassword, setConfirmPassword] = useState();
  const [showConfirmPassword, setConfirmPasswordShown] = useState(false);
  const toggleConfirmPasswordShown = () => {
    setConfirmPasswordShown(!showConfirmPassword);
  };
  return (
    <View style={{}}>
      {/* Form Section For Phone Number */}
      <KeyboardAvoidingView style={{ marginTop: 5 }}>
        {/* Full Name Input */}
        <Text style={{ marginTop: 10, fontWeight: "bold" }}>
          Full Name <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 60,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 10,
            // padding: 5,
            paddingHorizontal: 15,
          }}
          placeholder="Full Name"
        />
        {/* Phone Number Input */}
        <Text style={{ marginTop: 10, fontWeight: "bold" }}>
          Phone Number <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 60,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 10,
            // padding: 5,
            paddingHorizontal: 15,
          }}
          placeholder="Phone Number"
          keyboardType="numeric"
        />
        {/* Password Input */}
        <Text style={{ marginTop: 10, fontWeight: "bold" }}>
          Password <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 60,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 10,
            // padding: 5,
            paddingHorizontal: 15,
          }}
          secureTextEntry={!showPassword}
          value={Password}
          onValueChange={setPassword}
          placeholder="Enter Password"
        />

        <IconSet
          name={showPassword ? "eye-off" : "eye"}
          onPress={togglePasswordShown}
          style={{
            position: "absolute",
            top: "65%",
            left: "85%",
            fontSize: 20,
          }}
        />

        {/* Confirm Password Input */}
        <Text style={{ marginTop: 10, fontWeight: "bold" }}>
          Confirm Password <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 60,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 10,
            // padding: 5,
            paddingHorizontal: 15,
          }}
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onValueChange={setConfirmPassword}
          placeholder="Confirm Password"
          right={{}}
        />

        <IconSet
          name={showConfirmPassword ? "eye-off" : "eye"}
          onPress={toggleConfirmPasswordShown}
          style={{
            fontSize: 20,
            top: "90%",
            left: "85%",
            position: "absolute",
          }}
        />
      </KeyboardAvoidingView>
    </View>
  );
};
export default phone;
