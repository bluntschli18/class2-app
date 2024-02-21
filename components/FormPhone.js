import { Text, View, TextInput } from "react-native";

const phone = () => {
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
        />
        {/* Input */}
        <Text style={{ marginTop: 10 }}>
          Phone Number <Text>*</Text>
        </Text>
        <TextInput
        keyboardType="nemeric"
          style={{
            height: 50,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "gray",
            marginTop: 10,
            padding: 5,
          }}
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
        />
      </View>
    </View>
  );
};
export default phone;
