import { Text, View, TextInput } from "react-native";
import IconSet from "react-native-vector-icons/Ionicons";
import { useState, useEffect } from "react";

const phone = () => {
  const [Password, setPassword] = useState();
  const [showPassword, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown(!showPassword);
  };
  return (
    <View>
      {/* Form Section For Phone Number */}
      <View style={{ marginTop: 5 }}>
        <Text style={{ marginTop: 10 }}>
          Full Name <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 50,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 10,
            padding: 5,
          }}
          placeholder= 'Full Name'
        />
        {/* Input */}
        <Text style={{ marginTop: 10 }}>
          Phone Number <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 50,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 10,
            padding: 5,
          }}
          placeholder= 'Email Address'
        />
        {/* Input */}
        <Text style={{ marginTop: 10 }}>
          Password <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 50,
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
        <IconSet
          name={showPassword ? "eye-off" : "eye"}
          style={{left: 330, top: -30}}
          onPress={togglePasswordShown}
        />
        {/* Input */}
        <Text style={{ marginTop: 10 }}>
          Confirm Password <Text>*</Text>
        </Text>
        <TextInput
          style={{
            height: 50,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 10,
            padding: 5,
          }}
          secureTextEntry={!showPassword}
          value={Password}
          onValueChange={setPassword}
          placeholder="Confirm Password"
        />
          <IconSet
          name={showPassword ? "eye-off" : "eye"}
          style={{left: 330, top: -30}}
          onPress={togglePasswordShown}
        />
      </View>
    </View>
  );
};
export default phone;
