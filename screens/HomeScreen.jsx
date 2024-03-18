import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useAtom } from "jotai";
import React from "react";
import formDataAtom from "../theAtom/formAtom";
import { useNavigation } from "@react-navigation/native";

export default HomeScreen = () => {
  const Navigation = useNavigation();
  const [form, setForm] = useAtom(formAtom);
  const handleChange = (field, value) => {
    setForm((prevData) => ({ ...prevData, [field]: value }));
  };
  const handleSubmit = () => {
    Navigation.navigate("Profile");
    console.log("The Data is: " + form);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        value={form.firstName}
        onChangeText={(text) => handleChange("firstName", text)}
      />
      <TextInput
        placeholder="Last Name"
        value={form.lastName}
        onChangeText={(text) => handleChange("lastName", text)}
      />
      <TextInput
        placeholder="Email Adress"
        value={form.email}
        onChangeText={(text) => handleChange("email", text)}
      />
      <TextInput
        placeholder="Adress"
        value={form.address}
        onChangeText={(text) => handleChange("address", text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", flex: 1 },
});
