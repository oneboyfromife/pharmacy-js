import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import Button from "../components/button/Button";

const ProductScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/product-bg.png")}
        style={{
          resizeMode: "cover",
          padding: 10,
          justifyContent: "space-between",
        }}
      >
        <View>
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Ionicons
              name="chevron-back"
              size={20}
              color={colors.primaryGreen}
            />
            <View>
              <Image
                style={{ width: 36, height: 34 }}
                source={require("../assets/logo.png")}
              />
            </View>
          </View>

          <View
            style={{ flexDirection: "row", marginTop: 15, marginBottom: 10 }}
          >
            <View>
              <Image source={require("../assets/Aspirin.png")} />
            </View>
            <View>
              <Text>Aspirin</Text>
              <View style={{ flexDirection: "row" }}>
                <Text>$200.60</Text>
                <Text style={{ color: colors.gray }}>/</Text>
                <Text style={{ color: colors.gray }}>1kg</Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  backgroundColor: colors.lightGreen,
                }}
              >
                <Text>-</Text>
                <Text>2</Text>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity>
              <Text>Pain relief</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.lightGreen,
                paddingHorizontal: 5,
                paddingVertical: 10,
              }}
            >
              <Text>Discount 10%</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 312 }}>
            <Button title="Add Therapy" />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button title="Add to cart" />
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: colors.primaryGreen,
                  padding: 5,
                }}
              >
                <Ionicons
                  name="cart-outline"
                  size={21}
                  color={colors.primaryGreen}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
