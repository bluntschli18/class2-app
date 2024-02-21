import { Text, View, TextInput } from "react-native";

const Email = () => {
  return (
    <View>
      {/* Form Section For Email */}
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
          Email Address <Text>*</Text>
        </Text>
        <TextInput
        keyboardType="email-address"
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

export default Email;
