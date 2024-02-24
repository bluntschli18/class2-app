import { React, useState } from "react";
import IconSet from "react-native-vector-icons/Ionicons";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default LoginEmail = () => {
  const [Password, setPassword] = useState();
  const [showPassword, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown(!showPassword);
  };
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
            top: 150,
            left: "86%",
            padding: 15,
            width: 40,
            justifyContent: "center, ",
            alignItems: "center",
          }}
        >
          <Text style={{ justifyContent: "center, ", alignItems: "center" }}>
            <IconSet
              name={showPassword ? "eye-off" : "eye"}
              onPress={togglePasswordShown}
              height={50}
            />
          </Text>
        </TouchableOpacity>
        
    </View>
  );
};
