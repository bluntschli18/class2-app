import { React, useState } from "react";
import IconSet from "react-native-vector-icons/Ionicons";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default LoginEmail = () => {
  const [Password, setPassword] = useState();
  const [showPassword, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown(!showPassword);
  };
  const [email, onChangeEmail] = useState();
  return (
    <View>
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
          padding: 10,
        }}
        placeholder="Email Address"
        keyboardType="email-address"
        value={email}
        onChangeEmail={onChangeEmail}
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
          padding: 10,
        }}
        keyboardType="ascii-capable-number-pad"
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
          fontSize: 20,
          top: "80%",
          left: "85%",
        }}
      />
    </View>
  );
};
