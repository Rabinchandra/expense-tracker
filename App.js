import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import ProfilePic from "./Screens/ProfilePic";
import { auth } from "./firebase/config";
import { useEffect } from "react";
import Home from "./Screens/Home";

const Stack = createStackNavigator();

export default function App() {
  const user = auth.currentUser;

  useEffect(() => {
    console.log("user id", user?.uid);
  }, [user]);

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Login} name="login" />
        <Stack.Screen component={Signup} name="signup" />
        <Stack.Screen component={ProfilePic} name="profilepic" />
        <Stack.Screen component={Home} name="home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
