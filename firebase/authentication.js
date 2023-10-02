import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithCredential,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./config";

export const addUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // return user id if successful
    return {
      isSuccessful: true,
      userId: userCredential.user.uid,
    };
  } catch (error) {
    // return the error if fail
    return {
      isSuccessful: false,
      error: error.message || "Error occured",
    };
  }
};

export const updateUserProfile = async (userId, fullName, photoURL = "") => {
  try {
    const user = auth.currentUser;

    // if user exists
    if (user) {
      await updateProfile(user, {
        displayName: fullName,
        photoURL,
      });

      console.log("%cProfile updated successfully", "color: #4caf50;");
    }
    // User not exists
    else {
      console.log("user does not exist");
    }
  } catch (err) {
    console.log("Fail to update profile");
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return {
      isSuccessful: true,
      userId: userCredential.user.uid,
    };
  } catch (err) {
    console.log("Error");
    return {
      isSuccessful: false,
      error: err.message || "Something went wrong!",
    };
  }
};
