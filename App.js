import { Text, View, Image, TouchableOpacity, Button } from "react-native";

const App = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        height: `100%`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      {/* <Text style={{ color: "white", fontSize: 40, textAlign: `center`, justifyContent: `center` }}>DUOLINGO</Text> */}
      <Image
        source={require("./assets/Duolingo.png")}
        style={{ width: 153, height: 170 }}
      />

      <Text
        style={{
          color: "white",
          fontSize: 40,
          fontWeight: `bold`,
          color: `#2BD800`,
          marginTop: 30,
        }}
      >
        duolingo
      </Text>

      <Text
        style={{
          color: "white",
          width: 255,
          height: 44,
          fontSize: 18,
          textAlign: `center`,
        }}
      >
        The free, fun, and effective way to learn a language!
      </Text>

      {/*  */}
      <View style={{ marginTop: 120 }}>
        {/* Button for GET STARTED */}
        <TouchableOpacity
          style={{
            borderRadius: 16,
            backgroundColor: `#2BD800`,
            padding: 24,
            width: 312,
            margin: 10,
          }}
        >
          <Text
            style={{
              color: `#191920`,
              fontSize: 17,
              fontWeight: 600,
              textAlign: `center`,
            }}
          >
            GET STARTED
          </Text>
        </TouchableOpacity>

        {/* Button for I HAVE AN ACCOUNT */}
        <TouchableOpacity
          style={{
            borderRadius: 16,
            backgroundColor: `#191920`,
            padding: 24,
            width: 312,
            marginTop: 20,
            borderWidth: 2,
            borderColor: `#525D70`,
          }}
        >
          <Text
            style={{
              color: `white`,
              fontSize: 15,
              fontWeight: `bold`,
              textAlign: `center`,
            }}
          >
            I ALREADY HAVE AN ACCOUNT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
