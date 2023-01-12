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

const ProductScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/product-bg.png")}
        style={{ resizeMode: "cover" }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Ionicons name="chevron-back" size={20} color={colors.primaryGreen} />
          <View>
            <Image
              style={{ width: 36, height: 34 }}
              source={require("../assets/logo.png")}
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <View>
            <Image />
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
      </ImageBackground>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
