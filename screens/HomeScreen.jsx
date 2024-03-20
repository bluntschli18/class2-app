import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useAtom } from "jotai";
import React from "react";
import { formDataAtom } from "../theAtom/formAtom";
import { useNavigation } from "@react-navigation/native";

export default HomeScreen = () => {
  const Navigation = useNavigation(true);
  const [formData, setFormData] = useAtom(formDataAtom);
  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };
  const handleSubmit = () => {
    Navigation.navigate("Profile");
    console.log("The Data is: " + formData);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(text) => handleChange("firstName", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(text) => handleChange("lastName", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email Adress"
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Adress"
        value={formData.address}
        onChangeText={(text) => handleChange("address", text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", flex: 1 },

  textInput: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    marginVertical: 10,
    padding: 10,
    color:"black",
    borderWidth: 1,
  },
});
