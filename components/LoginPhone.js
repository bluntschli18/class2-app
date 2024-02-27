import { React, useState } from "react";
import IconSet from "react-native-vector-icons/Ionicons";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default LoginPhone = () => {
  const [Password, setPassword] = useState();
  const [showPassword, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown(!showPassword);
  };
  const [number, onChangeNumber] = useState();
  return (
    <View>
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
          padding: 10,
        }}
        placeholder="Phone Number"
        keyboardType="numeric"
        value={number}
        onValueChange={onChangeNumber}
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
