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
            Chelsey. (2013, October 29). Science Activities for Kids: Mirrors and Reflections. Retrieved from Buggy and Buddy:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://buggyandbuddy.com/science-experiments-kids-reflections-mirrors/"
                  )
                }
              >
              https://buggyandbuddy.com/science-experiments-kids-reflections-mirrors/
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Mirrors and Lenses. (n.d.). Retrieved from Learning HCCS :
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://learning.hccs.edu/faculty/murari.regmi/phys1402/class-notes/chapter-23-and-24"
                  )
                }
              >
              https://learning.hccs.edu/faculty/murari.regmi/phys1402/class-notes/chapter-23-and-24
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Reflection and the Ray Model of Light. (n.d.). Retrieved from the Physics Classroom:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.physicsclassroom.com/class/refln"
                  )
                }
              >
             https://www.physicsclassroom.com/class/refln
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
