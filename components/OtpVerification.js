import React, { useState, useRef  } from "react";
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import OTPInputView from "react-native-text-input-otp";
// import HiddenTextInput, {handleOnBlur, useRef, useState, handleOnPress} from "./HiddenTextInput"
import IconSet from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default OtpVerification = () => {
  const Navigation = useNavigation();
  const [OTP, setOTP] = useState('');
  const [pinReady, setPINReady] = useState(false);
  const MAX_CODE_LENGTH = 1;
  const textInputRef = useRef(null);
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingView}
        behavior="padding"
      >
        <View style={styles.IconView}>
          <IconSet
            style={styles.IconSet}
            name={"arrow-back"}
            // name={"arrow-up"}
            onPress={() => Navigation.goBack()}
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>OTP Verification</Text>
          <Text style={styles.headerSubText}>
            Thank you for signing up, Enter the 4-digit code we sent via the
            phone number {}
          </Text>
          <View style={styles.body}>
            <TextInput
              maxLength={MAX_CODE_LENGTH}
              code={OTP}
              setCode={setOTP}
              setPINReady={setPINReady}
              keyboardType="numeric"
              style={styles.TextInput}
              // onPress={}
            />
            <TextInput
              maxLength={MAX_CODE_LENGTH}
              code={OTP}
              setCode={setOTP}
              setPINReady={setPINReady}
              keyboardType="numeric"
              style={styles.TextInput}
              // onPress={}
            />
            <TextInput
              maxLength={MAX_CODE_LENGTH}
              code={OTP}
              setCode={setOTP}
              setPINReady={setPINReady}
              keyboardType="numeric"
              style={styles.TextInput}
              // onPress={}
            />
            <TextInput
              maxLength={MAX_CODE_LENGTH}
              code={OTP}
              setCode={setOTP}
              setPINReady={setPINReady}
              keyboardType="numeric"
              style={styles.TextInput}
              // onPress={}
            />
          </View>
          <View style={styles.beforeVerify}>
            <Text style={styles.bFText}>00:30</Text>
          </View>
          <View style={styles.verify}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => Navigation.navigate("Verified")}
            >
              <Text style={styles.verifyText}>Verify my account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={styles.end}>
              <Text style={styles.firstEndText}>Didn't recieve a code?</Text>
              <TouchableOpacity
                styles={styles.touchableOpacity}
                onPress={() => {}}
              >
                <Text style={styles.endText}>Resend code</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  IconView:{
    alignSelf: "flex-start",
    width: 50,
    margin: 15,
    // height: 50,
    // justifyContent: "center",
    // alignItems: "center",
    // borderRadius: 25,
  },
  KeyboardAvoidingView: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    padding: 20,
  },
  IconSet: {
    fontSize: 30,
    fontWeight: "bold",
    width: 45,
    marginTop: "5%",
    // marginBottom: 16,
    alignSelf: "flex-start",
  },
  header: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  headerSubText: {
    fontSize: 18,
    fontWeight: "regular",
    marginVertical: 10,
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    gap: 12,
    paddingVertical: 15,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  TextInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
  },
  onPress: {
    borderColor: "red",
  },
  touch: {
    backgroundColor: "red",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderRadius: 10,
  },
  beforeVerify: {
    marginVertical: 10,
  },
  bFText: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#000",
    textAlign: "center",
  },
  verify: {
    alignItems: "center",
  },
  verifyText: {
    fontSize: 20,
    fontWeight: "regular",
    color: "#fff",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  end: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 10,
    padding: 10,
  },
  firstEndText: {
    fontSize: 18,
    fontWeight: "regular",
    color: "#000",
  },
  endText: { color: "red", fontSize: 18, fontWeight: "bold" },
});
