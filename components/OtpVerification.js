import React, { useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
// import OTPInputView from "react-native-text-input-otp";
import Octicons from "@expo/vector-icons";

export default OtpVerification = () => {
  const [OTP, setOTP] = useState();
  const [pinReady, setPINReady] = useState(false);
  const MAX_CODE_LENGTH = 1;
  const textInputRef = useRef(null);
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingView}
        behavior="padding"
        // enabled
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>OTP Verification</Text>
          <Text style={styles.headerSubText}>
            Thank you for signing up, Enter the 4-digit code we sent via the
            phone number {}
          </Text>
          <View style={styles.body}>
            <TextInput
              maxLength = {MAX_CODE_LENGTH}
              code={OTP}
              setCode ={setOTP}
              setPINReady = {setPINReady}
              keyboardType="numeric"
              style={styles.TextInput}
            ></TextInput>
            <TextInput
              maxLength = {MAX_CODE_LENGTH}
              code={OTP}
              setCode ={setOTP}
              setPINReady = {setPINReady}
              keyboardType="numeric"
              style={styles.TextInput}
            ></TextInput>
            <TextInput
              maxLength = {MAX_CODE_LENGTH}
              code={OTP}
              setCode ={setOTP}
              setPINReady = {setPINReady}
              keyboardType="numeric"
              style={styles.TextInput}
            ></TextInput>
            <TextInput
              maxLength = {MAX_CODE_LENGTH}
              code={OTP}
              setCode ={setOTP}
              setPINReady = {setPINReady}
              keyboardType="numeric"
              style={styles.TextInput}
            ></TextInput>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  KeyboardAvoidingView: {
    height: "100%",
    width: "100%",
    padding: 20,
  },
  header: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  headerSubText: {
    fontSize: 18,
    fontWeight: "regular",
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 12,
    padding: 10,
  },
  TextInput: {
    width: "15%",
    height: 60,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
  },
});
