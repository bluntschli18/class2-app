import { atom } from "jotai";

export const formDataAtom = atom({
  firstName: "",
  lastName: "",
  email: "",
  //  password: "",
  //  confirmPassword: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  fullName: {
    firstName, 
    lastName,
  },
});

const styles = StyleSheet.create({});
