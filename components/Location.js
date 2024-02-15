import { Text, Image, View, TouchableOpacity } from "react-native";

const Location = () => {
  return (
    <View style={{height:'100%', width:'100%',  padding: 0, justifyContent: "center", alignItems: "center" }}>
      <Text style={{height:'10%', marginTop: "45%", fontWeight: 600, fontSize: 20 }}>
        Explore Restaurants Nearby
      </Text>

      <View style = {{width:'100%', height:'90%', justifyContent:'center', alignItems:'center',}}>
        <Image
          style={{alignSelf:'center', width: "20%", height: "20%", marginTop: "36%" }}
          source={require("./../assets/location-removebg-preview.png")}
        />
        <Text
          style={{
            marginTop: "10%",
            textAlign: "center",
            fontWeight: 700,
            fontSize: 16,
            color: "black",
            padding: 5,
            alignSelf: "center",
          }}
        >
          By granting permission, you can search for restaurants around you and
          recieve more accurate delivery
        </Text>
        <TouchableOpacity
          style={{
            height: '10%',
            width: "95%",
            marginTop: "7%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red",
            borderRadius: 10,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "white",
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
