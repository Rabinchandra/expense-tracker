import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const profilePhotos = {
  woman_1: require("../assets/profile/woman_1.png"),
  woman_2: require("../assets/profile/woman_2.png"),
  woman_3: require("../assets/profile/woman_3.png"),
  man_1: require("../assets/profile/man_1.png"),
  man_2: require("../assets/profile/man_2.png"),
  man_3: require("../assets/profile/man_3.png"),
};

const HomeHeaderNav = ({ photoURL }) => {
  console.log("photo", photoURL);
  return (
    <View style={styles.container}>
      <View style={styles.barWrapper}>
        <View style={styles.barLine}></View>
        <View style={[styles.barLine, { width: 25 }]}></View>
      </View>

      <Image source={profilePhotos[photoURL]} style={styles.imgStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 80,
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#eee",
  },
  barWrapper: {
    width: 40,
    // backgroundColor: "red",
  },
  barLine: {
    height: 4,
    marginVertical: 5,
    backgroundColor: "#333",
  },
});

export default HomeHeaderNav;
