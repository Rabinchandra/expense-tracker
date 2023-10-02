import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Budget = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.budgetText}>My Budget</Text>
      <Text style={styles.amountText}>$5430,60</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 15,
  },
  budgetText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  amountText: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default Budget;
