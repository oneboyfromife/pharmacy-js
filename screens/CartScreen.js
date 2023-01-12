import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Drug from "../components/drug/Drug";
import { colors } from "../constants/colors";
import SummarySingleList from "../components/lists/SummarySingleList";
import Button from "../components/button/Button";

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Drug price="$30.00" />
        <Drug price="$30.00" />
        <Drug price="$30.00" />
      </ScrollView>
      <View style={styles.summaryContainer}>
        <Text style={styles.summary}>Summary</Text>
        <View style={styles.summaryList}>
          <SummarySingleList title="Subtotal" price="$34.00" />
          <SummarySingleList title="Shipping" price="$64.00" />
          <SummarySingleList title="Total" price="$98.00" />
        </View>
        <Button title="Buy" />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  summary: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  summaryContainer: {
    marginTop: 15,
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  summaryList: {
    paddingHorizontal: 20,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowOffset: { width: 0, height: 4 },
  },
});
