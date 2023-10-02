import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const images = {
  electricity: require("../assets/transaction_category/electricity-bill.png"),
  home: require("../assets/transaction_category/home.png"),
  pet: require("../assets/transaction_category/pet.png"),
  food: require("../assets/transaction_category/food.png"),
};

const TransactionList = () => {
  const data = [
    { id: 1, name: "Grocery", imgSource: images.electricity },
    { id: 2, name: "Home", imgSource: images.home },
    { id: 3, name: "Pet", imgSource: images.pet },
    { id: 4, name: "Food", imgSource: images.food },
  ];
  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
              <View style={styles.imgContainer}>
                <Image source={item.imgSource} style={styles.img} />
              </View>
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.amountText}>6000</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgContainer: {
    backgroundColor: "pink",
    marginRight: 12,
    padding: 12,
    borderRadius: 50,
  },
  img: {
    width: 30,
    height: 30,
  },
  categoryText: {
    fontSize: 20,
  },
  amountText: {
    color: "orange",
  },
});

export default TransactionList;
