import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Onboarding_1 = () => {
  const Navigation = useNavigation();

  return (
    <View
      style={{
        height: "100%",
        
      }}
    >
      <TouchableOpacity
        style={{
          marginTop: "15%",
          height: "4%",
          // backgroundColor: "blue",
          width: "20%",
          alignSelf: "flex-end",
        }}
        onPress={() => Navigation.navigate("GetStarted")}
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
            margin: "15%",
          }}
          source={require("./../assets/deliveryMan-removebg-preview.png")}
        />

        <View style={{ margin: 10, alignItems: "center", justifyContent:'center', width: "90%", }}>
          <Text style={{ marginTop: 55, fontSize: 20, fontWeight: 900 }}>
            Quench your craving
          </Text>
          <Text
            style={{
              marginTop: "3%",
              textAlign: "center",
              fontSize: 12,
              fontWeight: 400,
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Find your favorite meal from your favorite restaurants and we will
            deliver it to your door step
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: "85%",
            borderRadius: 10,
            marginTop: "5%",
            alignItems: "center",
            justifyContent: "center",
            height: 60,
          }}
          onPress={() => Navigation.navigate("Onboarding-2")}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
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
