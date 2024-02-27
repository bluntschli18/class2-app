import { View, Text } from "react-native";


const Greet = ({greeting, name, }) =>{

    return (
        <View>
            <Text style={{fontSize: 60, fontWeight: 'bold'}}>{greeting} </Text>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>{name}</Text> 
        </View>
    );
}

export default Greet;