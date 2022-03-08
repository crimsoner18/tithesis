import React from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Card } from "react-native-paper";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
const { width, height } = Dimensions.get("window");
const vw = width - 10;
const vh = height;
export default function ModuleFourScreen({
  navigation,
}: RootTabScreenProps<"ModuleFour">) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollview}
        scrollEnabled={true}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ModuleFourLessonOne")}
        >
          <Card style={styles.card}>
            <Card.Title title="The Refraction And Lenses" subtitle="Lesson 1" />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ModuleFourLessonTwo")}
        >
          <Card style={styles.card}>
            <Card.Title title="Lenses and Refraction of Light" subtitle="Lesson 2" />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ModuleFourLessonThree")}
        >
          <Card style={styles.card}>
            <Card.Title title="Drawing Ray Diagrams for Convex Lenses" subtitle="Lesson 3" />
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flexGrow: 1,
  },
  title: {
    alignItems: "center",
  },
  scrollview: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    flexGrow: 1,
    marginTop: -80,
  },
  card: {
    marginLeft: 5,
    marginRight: 5,
    width: vw,
    marginBottom: 5,
  },
  text: {
    alignItems: "center",
  },
});
