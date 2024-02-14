import { Text, Image, View, TouchableOpacity } from "react-native";

const Location = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginTop: 100, fontWeight: 600, fontSize: 20 }}>
        Explore Restaurants Nearby
      </Text>
      <Image
        style={{ width: 200, height: 200, marginTop: 200 }}
        source={require("./../assets/location-removebg-preview.png")}
      />
      <Text
        style={{
          marginTop: 150,
          textAlign: "center",
          fontWeight: 600,
          fontSize: 16,
          color: "black",
          padding: 5,
        }}
      >
        By granting permission, you can search for restaurants around you and
        recieve more accurate delivery
      </Text>
      <TouchableOpacity
        style={{
          height: 50,
          width: 395,
          marginTop: 60,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            /*alignItems:'center', justifyContent: 'center',*/
          }}
        >
          Grant Permission
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Location;
