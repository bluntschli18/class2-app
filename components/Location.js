import { Text, Image, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Location = () => {
  const Navigation = useNavigation();

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Text
        style={{
          height: "5%",
          fontWeight: 600,
          fontSize: 20,
          alignSelf:'center',
          marginTop: 110,
        }}
      >
        Explore Restaurants Nearby
      </Text>

      <View
        style={{
          width: "100%",
          height: "90%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            alignSelf: "center",
            width: "20%",
            height: "20%",
            marginTop: 205,
          }}
          source={require("./../assets/location-removebg-preview.png")}
        />
        <Text
          style={{
            marginTop: 30,
            textAlign: "center",
            fontWeight: "regular",
            fontSize: 12,
            color: "black",
            // padding: 5,
            alignSelf: "center",
            width: "95%",
          }}
        >
          By granting permission, you can search for restaurants around you and
          recieve more accurate delivery
        </Text>
        <TouchableOpacity
          style={{
            height: 60,
            width: "90%",
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red",
            borderRadius: 10,
            alignSelf: "center",
          }}
          onPress={() => Navigation.navigate("Onboarding-1")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Grant Permission
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Location;
