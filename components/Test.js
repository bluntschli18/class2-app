import { View, Text } from "react-native";
import React from "react";

export default Test = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        width: "80%",
        height: 450,
        borderRadius: 20,
        borderWidth: 5,
        borderStyle: "solid",
        borderColor: "black",
        margin: 40,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/* Container 1 */}
      <View
        style={{ width: "50%", height: 200, backgroundColor: "white" }}
      ></View>
      {/* Cont. 1 ends here */}

      {/* Container 2 */}
      <View
        style={{ width: "50%", height: 200, backgroundColor: "purple" }}
      ></View>
      {/* Cont. 2 ends here */}
    </View>
  );
};
