import React, { useRef, useState } from "react";
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
import { LinearGradient } from "expo-linear-gradient";
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
            What Affects the Swing Rate Of a Pendulum?
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://sciencing.com/affects-swing-rate-pendulum-8113160.html"
                  )
                }
              >
              https://sciencing.com/affects-swing-rate-pendulum-8113160.html
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Wave Energy: What Are the Benefits Of Wave Energy?
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://justenergy.com/blog/wave-energy-what-are-the-benefits-of-wave-energy/"
                  )
                }
              >
              https://justenergy.com/blog/wave-energy-what-are-the-benefits-of-wave-energy/
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Physics Tutorial: Vibrations and Waves
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.physicsclassroom.com/class/waves"
                  )
                }
              >
             https://www.physicsclassroom.com/class/waves
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Physics Tutorial: Vibrational Motion
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.physicsclassroom.com/class/waves/Lesson-0/Vibrational-Motion"
                  )
                }
              >
              https://www.physicsclassroom.com/class/waves/Lesson-0/Vibrational-Motion
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Physics Tutorial: Waves and Wavelike Motion. (2020). Physicsclassroom.com.
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.physicsclassroom.com/class/waves/Lesson-1/Waves-and-Wavelike-Motion"
                  )
                }
              >
              https://www.physicsclassroom.com/class/waves/Lesson-1/Waves-and-Wavelike-Motion
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            The Anatomy of a Wave. (2019). Physicsclassroom.com.
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.physicsclassroom.com/class/waves/Lesson-2/The-Anatomy-of-a-Wave"
                  )
                }
              >
              https://www.physicsclassroom.com/class/waves/Lesson-2/The-Anatomy-of-a-Wave
            </Text>

          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
