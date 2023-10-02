import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HeaderText = ({ children }) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 15,
  },
});

export default HeaderText;
