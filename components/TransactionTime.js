import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

const TransactionTime = () => {
  const [time, setTime] = useState("day");

  const pressHandler = (t) => {
    setTime(t);
  };

  return (
    <View style={styles.container}>
      <View
        style={[styles.textWrapper, time == "day" ? styles.activeView : {}]}
      >
        <Text
          style={[styles.text, time == "day" ? styles.activeText : {}]}
          onPress={() => pressHandler("day")}
        >
          Day
        </Text>
      </View>
      <View
        style={[styles.textWrapper, time == "month" ? styles.activeView : {}]}
      >
        <Text
          style={[styles.text, time == "month" ? styles.activeText : {}]}
          onPress={() => pressHandler("month")}
        >
          Month
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    alignSelf: "center",
    backgroundColor: "#eee",
    borderRadius: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 8,
    textAlign: "center",
  },
  textWrapper: {
    flex: 1,
  },
  activeView: {
    backgroundColor: "#333",
    borderRadius: 50,
  },
  activeText: {
    color: "#fff",
  },
});

export default TransactionTime;
