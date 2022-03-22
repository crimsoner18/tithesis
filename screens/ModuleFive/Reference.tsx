import React, { useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { Card, List, Paragraph, Title } from "react-native-paper";
import { RootTabScreenProps } from "../../types";
import { Video } from "expo-av";
const { width, height } = Dimensions.get("window");
const vw = width - 10;
const vh = height;

export default function LessonOneScreen({
  navigation,
}: RootTabScreenProps<"ModuleOne">) {
  const video = React.useRef(null);

  const [status, setStatus] = React.useState({});
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA']}
        style={styles.background}
      />
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Card style={styles.card}>
          <Card.Title title="REFERENCE" />
          <Card.Content>
            <Paragraph style={{fontWeight:'bold'}}>
            Diffraction. Exploratorium. (2020, October 2). Retrieved December 20, 2021, from
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.exploratorium.edu/snacks/diffraction"
                  )
                }
              >
              https://www.exploratorium.edu/snacks/diffraction
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Diffraction and Interference. (n.d.). Retrieved from
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.citationmachine.net/apa/cite-a-website/new"
                  )
                }
              >
              https://www.citationmachine.net/apa/cite-a-website/new
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Lesson 6 - Interference of Waves. (n.d.). WillowWood Lessons. Retrieved December 20, 2021, from
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "http://willowwoodlessons.weebly.com/lesson-6---interference-of-waves.html"
                  )
                }
              >
             http://willowwoodlessons.weebly.com/lesson-6---interference-of-waves.html
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Alberding, N. (2010). Chapter 21 - Superposition. Retrieved December 20, 2021, from
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "http://www.sfu.ca/phys/121/1101/notes/lecnotes4-141.pdf"
                  )
                }
              >
              http://www.sfu.ca/phys/121/1101/notes/lecnotes4-141.pdf
            </Text>

          </Card.Content>
        </Card>
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
    fontSize: 20,
    fontWeight: "bold",
  },
  parent: {
    height: vh,
    marginBottom: -50,
  },
  scrollview: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    flexGrow: 1,
  },
  card: {
    margin: 5,
    width: vw,
  },
  sourceText: {
    marginLeft: 10,
    fontSize: 10,
    color: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  imageHolder: {
    margin: 5,
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 10,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});
