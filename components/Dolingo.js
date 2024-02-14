import { Text, View, Image, Button, TouchableOpacity } from "react-native";

const Dolingo = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("./../assets/Duolingo.png")}
        style={{ width: 180, height: 190 }}
      />
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          color: "#2BD800",
          marginTop: 20,
        }}
      >
        duolingo
      </Text>
      <Text
        style={{
          color: "white",
          width: 255,
          fontSize: 18,
          textAlign: "center",
        }}
      >
        The free, fun, and effective way to learn a language!
      </Text>

      <View style={{ marginTop: 150 }}>
        {/* Get Started */}
        <TouchableOpacity
          style={{
            borderRadius: 16,
            backgroundColor: "#2BD800",
            padding: 24,
            width: 312,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "600",
              color: "#191920",
              textAlign: "center",
            }}
          >
            GET STARTED
          </Text>
        </TouchableOpacity>
        {/* I have an account */}
        <TouchableOpacity
          style={{
            borderRadius: 16,
            backgroundColor: "#191920",
            padding: 24,
            width: 312,
            borderWidth: 2,
            borderColor: "3525D70",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "600",
              color: "#2BD800",
              textAlign: "center",
            }}
          >
            I ALREADY HAVE AN ACCOUNT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dolingo;
