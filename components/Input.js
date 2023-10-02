import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

const Input = ({ Icon, placeholder, setValue }) => {
  return (
    <View style={styles.container}>
      {Icon}
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        autoCapitalize="none"
        spellCheck={false}
        autoCorrect={false}
        onChangeText={(val) => setValue(val)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginLeft: 15,
    borderBottomWidth: 2,
    borderBottomColor: "rgb(220, 220, 220)",
    fontSize: 16,
    paddingBottom: 8,
    textTransform: "lowercase",
  },
});

export default Input;
