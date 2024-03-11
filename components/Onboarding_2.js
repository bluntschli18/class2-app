import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Onboarding_2 = () => {
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
          width: "20%",
          alignSelf: "flex-end",
        }}
        onPress={() => Navigation.navigate("GetStarted")}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: 600,
            top: 5,
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>

      <View
        style={{
          alignItems: "center",
          marginTop: "5%",
          height: "90%",
          width: "100%",
        }}
      >
        <Image
          style={{
            marginTop: 80,
            height: 300,
            width: 300,
          }}
          source={require("./../assets/cuizines-removebg-preview.png")}
        />
        <View style={{width:'100%'}}>
          <Text
            style={{
              marginTop: 100,
              textAlign: "center",
              fontSize: 20,
              fontWeight: 900,
            }}
          >
            Discover New Cuisines
          </Text>

          <Text
            style={{
              marginTop: 20,
              fontSize: 12,
              width: "90%",
              fontWeight: 400,
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            From local favourite to global delight, find the perfect dish for
            every taste
          </Text>
        </View>
        
        <TouchableOpacity
            style={{
              backgroundColor: "red",
              width: "90%",
              alignSelf: "center",
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              marginTop: 45,
            }}
            onPress={() => Navigation.navigate("Onboarding-3")}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
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

export default Onboarding_2;
