import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import IconSet from "react-native-vector-icons/Ionicons";
import { useState, useEffect } from "react";

const Email = () => {
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
      <View style={{ marginTop: 5 }}>
        <Text style={{ marginTop: 5, fontWeight: "bold" }}>
          Full Name <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 60,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 5,
            // padding: 5,
            paddingHorizontal: 15,
          }}
          placeholder="Full Name"
          keyboardType="ascii-capable"
        />
        {/* Input */}
        <Text style={{ marginTop: 5, fontWeight: "bold" }}>
          Email Address <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 60,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 5,
            // padding: 5,
            paddingHorizontal: 15,
          }}
          placeholder="Email Address"
          keyboardType="email-address"
        />
        {/* Password Input */}
        <Text style={{ marginTop: 5, fontWeight: "bold" }}>
          Password <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 60,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 5,
            // padding: 5,
            paddingHorizontal: 15,
          }}
          keyboardType="ascii-capable-number-pad"
          secureTextEntry={!showPassword}
          value={Password}
          onValueChange={setPassword}
          placeholder="Enter Password"
        />
        <IconSet
          name={showPassword ? "eye" : "eye-off"}
          onPress={togglePasswordShown}
          style={{
            position: "absolute",
            top: "65%",
            left: "85%",
            fontSize: 20,
          }}
        />
        {/* Confirm Password Input */}
        <Text style={{ marginTop: 5, fontWeight: "bold" }}>
          Confirm Password <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 60,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 5,
            // padding: 5,
            paddingHorizontal: 15,
          }}
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onValueChange={setConfirmPassword}
          placeholder="Confirm Password"
          keyboardType="ascii-capable-number-pad"
        />
        <IconSet
          name={showConfirmPassword ? "eye" : "eye-off"}
          onPress={toggleConfirmPasswordShown}
          style={{
            fontSize: 20,
            top: "90%",
            left: "85%",
            position: "absolute",
          }}
        />
      </View>
  );
};

export default Email;
