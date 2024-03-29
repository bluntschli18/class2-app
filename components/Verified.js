import { Text, StyleSheet, View, Image, TouchableOpacity, Alert } from "react-native";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";



export default verified = () => {

  const Navigation = useNavigation();
  return (
    <View style={styles.vContainer}>
      <Image
        style={styles.Image}
        source={require("./../assets/Male Memojis.png")}
      />
      <Text style={styles.ContText}>You Are doing well</Text>
      <Text style={styles.SubText}>
        Congratulations! Your account has been successfully created. You're
        now ready to embark on a delicious journey with foodie delight
      </Text>

      <TouchableOpacity
        style={styles.touch}
        // onPress={() => Navigation.navigate("HomeScreen")}
      onPress={() => Alert.alert("Coming Soon! Dev team is on their way")}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: 'bold', textAlign: "center" }}>Add Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  vContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  Image: {
    height: 200,
    width: 200,
    margin: 20,
  },
  ContText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 15,

  },
  SubText: {
    fontSize: 12,
    fontWeight: "regular",
    width: "80%",
    textAlign: "center",
    justifyContent: "space-evenly",
  },
  touch: {
    backgroundColor: "red",
    width: "90%",
    alignSelf: "center",
    height: 60,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 20,
  },
});
