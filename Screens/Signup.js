import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Input from "../components/Input";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Button from "../components/Button";
import HeaderText from "../components/HeaderText";
import { addUser, updateUserProfile } from "../firebase/authentication";
import PasswordInput from "../components/PasswordInput";

const Signup = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  const navigateToProfilePic = () => {
    navigation.navigate("profilepic");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  // Function to handle operations when
  const addUserHandler = async () => {
    if (email == "" || password == "" || fullName == "") {
      return;
    }

    // if user is added successfully
    const result = await addUser(email, password);

    if (result.isSuccessful) {
      console.log("User created! with id", result.userId);
      // updateProfile
      updateUserProfile("", fullName, "http://example.com").then(() => {
        // Go to Profile pic screen
        navigateToProfilePic();
        // turn off indicator once sign up is sucessfull
        setIsActivityIndicatorOn(false);
      });
    } else {
      // turn off indicator once sign up is sucessfull
      console.log("Error", result.error);
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={24} color="black" onPress={goBack} />

      <Image
        source={require("../assets/signup_pic.png")}
        style={{ width: 300, height: 200 }}
      />

      <HeaderText>Sign up</HeaderText>

      <Input
        placeholder="Email ID"
        Icon={<MaterialIcons name="alternate-email" size={24} color="#666" />}
        setValue={setEmail}
      />

      <Input
        placeholder="Full Name"
        Icon={<Ionicons name="person-circle-outline" size={24} color="#666" />}
        setValue={setFullName}
      />

      <PasswordInput
        placeholder="Password"
        Icon={<Feather name="lock" size={24} color="#666" />}
        setValue={setPassword}
      />

      <View style={styles.text}>
        <Text>
          By signing up, you're agree to our Terms & Conditions and Privacy
          Policy
        </Text>
      </View>

      <Button title="Continue" onPress={addUserHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 30,
  },
  text: {
    marginVertical: 20,
    padding: 10,
  },
});

export default Signup;
