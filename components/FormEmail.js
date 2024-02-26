import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
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
    <View>
      {/* Form Section For Email */}
      <KeyboardAvoidingView style={{ marginTop: 5 }}>
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
          keyboardType="ascii-capable"
        />
        {/* Input */}
        <Text style={{ marginTop: 10 }}>
          Email Address <Text>*</Text>
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
          placeholder="Email Address"
          keyboardType="email-address"
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
          keyboardType="ascii-capable-number-pad"
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
            top: '63%',
            left: "85%",
            padding: 15,
            width: 50,
            alignItems: "center",
          }}
        >
          <IconSet
            name={showPassword ? "eye-off" : "eye"}
            onPress={togglePasswordShown}
            height={50}
          />
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
          keyboardType="ascii-capable-number-pad"
        />
        <TouchableOpacity
          onPress={toggleConfirmPasswordShown}
          style={{
            height: 40,
            position: "absolute",
            top: '87%',
            left: "85%",
            padding: 15,
            width: 50,
            alignItems: "center",
          }}
        >
          <IconSet
            name={showConfirmPassword ? "eye-off" : "eye"}
            onPress={toggleConfirmPasswordShown}
            height={50}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Email;
