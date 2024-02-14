import { View, Text, Image, TouchableOpacity } from "react-native";

const Onboarding_1 = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: "4",
      }}
    >
      <TouchableOpacity>
        <Text
          style={{
            left: 170,
            top: 70,
            margin: "20",
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>
      <Image
        style={{ margin: "auto", marginTop: 130 }}
        source={require("./../assets/deliveryMan-removebg-preview.png")}
      />
      <View
        style={{
          marginTop: 30,
          width: "90%",
          height: 100,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 900 }}>
          Quench your craving
        </Text>
        <Text
          style={{
            height: 60,
            marginTop: 15,
            textAlign: "center",
            fontSize: 17,
            fontWeight: 400,
          }}
        >
          Find yoiur favorite meal from your favorite restaurants and we will
          deliver it to your door step
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: 395,
            height: 50,
            padding: 20,
            borderRadius: 10,
            marginTop: 100,
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

export default Onboarding_1;
