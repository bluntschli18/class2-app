import { Text, View, TouchableOpacity, Image } from "react-native";

const Onboarding_2 = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity style={{}}>
        <Text
          style={{
            height: 40,
            left: 170,
            top: 70,
            margin: "20",
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 40 }}>
        <Image
          style={{height:200, width:200, alignSelf: "center", marginTop: 100, left: -6 }}
          source={require("./../assets/cuizines-removebg-preview.png")}
        />

        <Text
          style={{
            marginTop: 40,
            textAlign: "center",
            fontSize: 20,
            fontWeight: 900,
          }}
        >
          Discover New Cuisines
        </Text>

        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          From local favourite to global delight, find the perfect dish for
          every taste
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: 395,
            alignSelf: "center",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 40,
          }}
        >
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding_2;
