import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const images = {
  woman_1: require("../assets/profile/woman_1.png"),
  woman_2: require("../assets/profile/woman_2.png"),
  woman_3: require("../assets/profile/woman_3.png"),
  man_1: require("../assets/profile/man_1.png"),
  man_2: require("../assets/profile/man_2.png"),
  man_3: require("../assets/profile/man_3.png"),
};

const ProfilePhoto = ({ type, bgColor = "", selectedPic, selectHandler }) => {
  return (
    <TouchableOpacity
      onPress={() => selectHandler(type)}
      style={[
        styles.container,
        { backgroundColor: bgColor },
        type == selectedPic ? styles.selectedStyle : {},
      ]}
    >
      <Image source={images[type]} style={{ width: 60, height: 60 }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingTop: 15,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "transparent",
    opacity: 0.7,
  },
  selectedStyle: {
    borderColor: "rgb(34, 97, 224)",
    opacity: 1,
  },
});

export default ProfilePhoto;
