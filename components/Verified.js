import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";

export default class Verified extends Component {
  render() {
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
          onPress={() => this.props.navigation.navigate("")}
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: 'bold' }}>Add Address</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  vContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    // backgroundColor: "black",
  },
  Image: {
    height: "25%",
    width: "70%",
    margin: 20,
    // alignSelf: "center",
    // marginTop: 100,
  },
  ContText: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15,
    // alignSelf: "center",
    // marginTop: 100,
  },
  SubText: {
    fontSize: 20,
    fontWeight: "regular",
    // alignSelf: "center",
    // marginTop: 100,
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
