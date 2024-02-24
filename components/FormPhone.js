import { Text, View, TextInput, TouchableOpacity } from "react-native";
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
    <View>
      {/* Form Section For Phone Number */}
      <View style={{ marginTop: 5 }}>
        {/* Full Name Input */}
        <Text style={{ marginTop: 10 }}>
          Full Name <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 60,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 10,
            padding: 5,
          }}
          placeholder="Full Name"
        />
        {/* Phone Number Input */}
        <Text style={{ marginTop: 10 }}>
          Phone Number <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 60,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 10,
            padding: 5,
          }}
          placeholder="Phone Number"
          keyboardType="numeric"
        />
        {/* Password Input */}
        <Text style={{ marginTop: 10 }}>
          Password <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 60,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 10,
            padding: 5,
          }}
          secureTextEntry={!showPassword}
          value={Password}
          onValueChange={setPassword}
          placeholder="Enter Password"
        />
        <TouchableOpacity
          onPress={togglePasswordShown}
          style={{
            height: 40,
            position: "absolute",
            top: 237,
            left: "86%",
            padding: 15,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ justifyContent: "center", alignItems: "center" }}>
            <IconSet
              name={showPassword ? "eye-off" : "eye"}
              onPress={togglePasswordShown}
              height={50}
            />
          </Text>
        </TouchableOpacity>
        {/* Confirm Password Input */}
        <Text style={{ marginTop: 10 }}>
          Confirm Password <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 60,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 10,
            padding: 5,
          }}
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onValueChange={setConfirmPassword}
          placeholder="Confirm Password"
          right={{}}
        />
        <TouchableOpacity
          onPress={toggleConfirmPasswordShown}
          style={{
            height: 40,
            position: "absolute",
            top: 333,
            left: "86%",
            padding: 15,
            width: 40,
            alignItems: "center",
          }}
        >
          <Text style={{ justifyContent: "center, ", alignItems: "center" }}>
            <IconSet
              name={showConfirmPassword ? "eye-off" : "eye"}
              onPress={toggleConfirmPasswordShown}
              height={50}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default phone;
