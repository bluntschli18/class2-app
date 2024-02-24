import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Onboarding_1 = () => {
const Navigation = useNavigation();

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <TouchableOpacity
        style={{
          marginTop: "40%",
          height: "4%",
          // backgroundColor: "blue",
          width: "20%",
          alignSelf: "flex-end",
        }}
        onPress={() => Navigation.navigate("Onboarding-2")}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: 600,
            textAlign: "center",
            top: 5,
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
            marginTop: "18%",
          }}
          source={require("./../assets/deliveryMan-removebg-preview.png")}
        />
        <Text style={{ marginTop: 95, fontSize: 20, fontWeight: 900 }}>
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
            marginTop: "10%",
            alignItems: "center",
            justifyContent: "center",
            height: 70,
          }}
          onPress={() => Navigation.navigate("Onboarding-2")}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 16,
              fontWeight: 600,
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
