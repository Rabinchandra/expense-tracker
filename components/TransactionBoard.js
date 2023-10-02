import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import TransactionTime from "./TransactionTime";
import TransactionList from "./TransactionList";
import {
  addTransaction,
  getTransanctions,
  updateTransaction,
} from "../firebase/firestore";
import { auth } from "../firebase/config";
import AddTransactionModal from "./modals/AddTransactionModal";

const TransactionBoard = () => {
  const user = auth.currentUser;

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={[styles.container]}>
      <TransactionTime />
      <TransactionList />
      <Button title="Add Transaction" onPress={toggleModal} />
      <Button
        title="Update"
        onPress={() =>
          updateTransaction(user.uid + "-" + user.displayName, { amount: 200 })
        }
      />
      <Button
        title="Fetch data"
        onPress={() => getTransanctions(user.uid + "-" + user.displayName)}
      />

      <AddTransactionModal
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    marginTop: 40,
    padding: 20,
    paddingTop: 20,
    borderRadius: 10,
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default TransactionBoard;
