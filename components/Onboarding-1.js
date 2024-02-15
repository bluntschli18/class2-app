import { View, Text, Image, TouchableOpacity } from "react-native";

const Onboarding_1 = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <TouchableOpacity style={{ marginTop: "40%", height: "10%" }}>
        <Text
          style={{
            left: 150,
            fontSize: 17,
            fontWeight: 600,
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>

      <View
        style={{
          height: "90%",
          marginTop: "5%",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            height: "40%",
            width: "75%",
            margin: "auto",
            marginTop: "10%",
          }}
          source={require("./../assets/deliveryMan-removebg-preview.png")}
        />
        <Text style={{ fontSize: 20, fontWeight: 900 }}>
          Quench your craving
        </Text>
        <Text
          style={{
            marginTop: "3%",
            textAlign: "center",
            fontSize: 17,
            fontWeight: 400,
            width: "90%",
          }}
        >
          Find yoiur favorite meal from your favorite restaurants and we will
          deliver it to your door step
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: "95%",
            borderRadius: 10,
            marginTop: "20%",
            alignItems: "center",
            justifyContent: "center",
            height: "10%",
          }}
        >
          <Text
            style={{
              color: "white",
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
