import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import TopArticleCard from "../components/cards/TopArticleCard";
import ArticleCard from "../components/cards/ArticleCard";

const ArticleScreen = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column", paddingHorizontal: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ionicons name="menu" size={34} color={colors.primaryGreen} />
        <Text style={{ fontSize: 20, color: colors.primaryGreen }}>
          Articles
        </Text>
        <Ionicons name="search" size={22} color={colors.borderGray} />
      </View>

      <View>
        <View style={{ marginBottom: 5 }}>
          <Text style={{ color: colors.primaryGreen, fontSize: 20 }}>
            Top Articles
          </Text>
        </View>

        <ScrollView>
          <TopArticleCard />
          <TopArticleCard />
          <TopArticleCard />
          <TopArticleCard />
        </ScrollView>
      </View>

      <View>
        <View style={{ marginBottom: 5 }}>
          <Text style={{ color: colors.primaryGreen, fontSize: 20 }}>
            Recent Articles
          </Text>
        </View>

        <ScrollView>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default ArticleScreen;

const styles = StyleSheet.create({});
