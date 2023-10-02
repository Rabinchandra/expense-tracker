import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const PasswordInput = ({ Icon, placeholder, setValue }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const toggleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <View style={styles.container}>
      {Icon}

      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        secureTextEntry={visiblePassword ? false : true}
        onChangeText={(val) => setValue(val)}
      />

      {!visiblePassword ? (
        <AntDesign
          name="eyeo"
          size={24}
          color="black"
          style={styles.eyeIconStyle}
          onPress={toggleVisiblePassword}
        />
      ) : (
        <Feather
          name="eye-off"
          size={24}
          color="black"
          onPress={toggleVisiblePassword}
          style={styles.eyeIconStyle}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 25,
    alignitems: "center",
  },
  textInput: {
    flex: 1,
    marginLeft: 15,
    borderBottomWidth: 2,
    borderBottomColor: "rgb(220, 220, 220)",
    fontSize: 16,
    paddingBottom: 8,
  },
  eyeIconStyle: {
    position: "absolute",
    right: 0,
  },
});

export default PasswordInput;
