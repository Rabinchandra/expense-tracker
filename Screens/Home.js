import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import HomeHeaderNav from "../components/HomeHeaderNav";
import Budget from "../components/Budget";
import TransactionBoard from "../components/TransactionBoard";
import AddTransactionModal from "../components/modals/AddTransactionModal";

const Home = () => {
  const user = auth.currentUser;

  return (
    <View style={styles.container}>
      <HomeHeaderNav photoURL={user.photoURL} />
      <Budget />
      <TransactionBoard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(33, 204, 147)",
    flex: 1,
  },
});

export default Home;
