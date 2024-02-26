import React, { useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
              maxLength={MAX_CODE_LENGTH}
              code={OTP}
              setCode={setOTP}
              setPINReady={setPINReady}
              keyboardType="numeric"
              style={styles.TextInput}
            ></TextInput>
            <TextInput
              maxLength={MAX_CODE_LENGTH}
              code={OTP}
              setCode={setOTP}
              setPINReady={setPINReady}
              keyboardType="numeric"
              style={styles.TextInput}
            ></TextInput>
            <TextInput
              maxLength={MAX_CODE_LENGTH}
              code={OTP}
              setCode={setOTP}
              setPINReady={setPINReady}
              keyboardType="numeric"
              style={styles.TextInput}
            ></TextInput>
            <TextInput
              maxLength={MAX_CODE_LENGTH}
              code={OTP}
              setCode={setOTP}
              setPINReady={setPINReady}
              keyboardType="numeric"
              style={styles.TextInput}
            ></TextInput>
          </View>
          <View style={styles.beforeVerify}>
            <Text></Text>
          </View>
          <View style={styles.verify}>
            <TouchableOpacity style={styles.touch} >
              <Text style={styles.verifyText}>Verify my account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={styles.end}>
              <Text style={styles.firstEndText}>Didn't recieve a cod?</Text>
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
    fontSize: 12,
    fontWeight: "regular",
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 12,
    padding: 15,
  },
  TextInput: {
    width: "25%",
    height: 60,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
  },
  beforeVerify: {},
  touch:{
    backgroundColor: "red",
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderRadius: 10,
  },
  verifyText:{
    fontSize: 14,
    fontWeight: "regular",
    color: "#fff",
  },
  footer: { marginTop: 20 },
  end: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 12,
    padding: 10,
  },
  endText: { color: "red" },
  touchableOpacity: {},
});
