import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { formDataAtom } from "./../theAtom/formAtom";
import { useAtom } from "jotai";

export default ProfileScreen = () => {
  const [formData] = useAtom(formDataAtom);

  return (
    <View style={styles.container}>
      <Text>Welcome {formData.fullName}</Text>
      <Text>Email: {formData.email}</Text>
      <Text>Phone: {formData.phone}</Text>
      <Text>Address: {formData.address}</Text>
      <Text>City: {formData.city}</Text>
      <Text>You told us your Last Name was: {formData.lastName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
