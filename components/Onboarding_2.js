import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Onboarding_2 = () => {
  const Navigation = useNavigation();
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: "auto",
        marginRight: 10,
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
        onPress={() => Navigation.navigate('Onboarding-3')}
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
          justifyContent: "center",
          height: "90%",
          width: "100%",
        }}
      >
        <Image
          style={{
            marginTop: '6%',
            height: "35%",
            width: "68%",
          }}
          source={require("./../assets/cuizines-removebg-preview.png")}
        />

        <Text
          style={{
            marginTop: 70,
            textAlign: "center",
            fontSize: 20,
            fontWeight: 900,
          }}
        >
          Discover New Cuisines
        </Text>

        <Text
          style={{
            marginTop: "3%",
            fontSize: 18,
            textAlign: "center",
            alignSelf: "center",
            height: 90,
            justifyContent: "space-evenly",
          }}
        >
          From local favourite to global delight, find the perfect dish for
          every taste
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: "95%",
            alignSelf: "center",
            height: 70,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
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

export default Onboarding_2;
