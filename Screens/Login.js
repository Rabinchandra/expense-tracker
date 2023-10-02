import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Input from "../components/Input";
import { Feather } from "@expo/vector-icons";
import Button from "../components/Button";
import HeaderText from "../components/HeaderText";
import PasswordInput from "../components/PasswordInput";
import { loginUser } from "../firebase/authentication";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const goToSignup = () => {
    navigation.navigate("signup");
  };

  const goToHome = () => {
    navigation.navigate("home");
  };

  useEffect(() => {
    if (user) {
      goToHome();
    }
  }, [user]);

  const loginHandler = async () => {
    const res = await loginUser(email, password);

    if (res.isSuccessful) {
      console.log("Sucessfully login!");
      setUser(res.userId);
    } else {
      console.log(res.error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/login_pic.png")}
        style={{ width: 350, height: 250 }}
      />

      <HeaderText>Login</HeaderText>

      <Input
        placeholder="Email ID"
        Icon={<MaterialIcons name="alternate-email" size={24} color="#666" />}
        setValue={setEmail}
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

      <Button title="Login" onPress={loginHandler} />

      <View style={styles.newUserTextWrapper}>
        <Text style={{ color: "#555" }}>New to Expense Tracker?</Text>
        <Text style={styles.registerText} onPress={goToSignup}>
          Register
        </Text>
      </View>
    </ScrollView>
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
  newUserTextWrapper: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "center",
  },
  registerText: {
    color: "rgb(34, 97, 224)",
    marginLeft: 7,
  },
});

export default Login;
