import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import ProfilePhoto from "../components/ProfilePhoto";
import Button from "../components/Button";
import { auth } from "../firebase/config";
import { updateProfile } from "firebase/auth";

const ProfilePic = ({ navigation }) => {
  const [selectedPic, setSelectedPic] = useState("");

  const selectHandler = (type) => {
    setSelectedPic(type);
  };
  // To update the profile pic URL of the user
  const setProfilePic = async () => {
    const user = auth.currentUser;

    if (user) {
      updateProfile(user, {
        photoURL: selectedPic,
      })
        .then(() => navigation.navigate("home"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.picWrapper}>
        <ProfilePhoto
          type={"woman_1"}
          bgColor="orange"
          selectHandler={selectHandler}
          selectedPic={selectedPic}
        />
        <ProfilePhoto
          type={"woman_2"}
          bgColor="rgb(151, 12, 194)"
          selectHandler={selectHandler}
          selectedPic={selectedPic}
        />
        <ProfilePhoto
          type={"woman_3"}
          bgColor="#4caf50"
          selectHandler={selectHandler}
          selectedPic={selectedPic}
        />
      </View>
      <View style={styles.picWrapper}>
        <ProfilePhoto
          type={"man_1"}
          bgColor="#ddd"
          selectHandler={selectHandler}
          selectedPic={selectedPic}
        />
        <ProfilePhoto
          type={"man_2"}
          bgColor="rgb(8, 207, 177)"
          selectHandler={selectHandler}
          selectedPic={selectedPic}
        />
        <ProfilePhoto
          type={"man_3"}
          bgColor="rgb(16, 169, 230)"
          selectHandler={selectHandler}
          selectedPic={selectedPic}
        />
      </View>

      <View style={styles.buttonWrapper}>
        {selectedPic == "" ? (
          ""
        ) : (
          <Button title={"Select picture"} onPress={setProfilePic} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  picWrapper: {
    flexDirection: "row",
  },
  buttonWrapper: {
    marginTop: 50,
    height: 100,
  },
});

export default ProfilePic;
