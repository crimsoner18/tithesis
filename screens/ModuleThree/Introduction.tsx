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
          <Card.Title title="LEARNING COMPETENCY" />
          <Card.Content>
          <Paragraph style={styles.paragraph}>
            A. Explain the conditions for total internal reflection{"\n"}
            B. solve problems involving reflection, refraction, dispersion, and
            polarization in contexts such as, but not limited to, (polarizing)
            sunglasses, atmospheric haloes, and rainbows;{"\n"}
            C. determine graphically and mathematically the type (virtual/real),
            magnification, location, and orientation of image of a point and
            extended object produced by a plane or spherical mirror;
            </Paragraph> 
          <Card.Title title="What to expect" />
            <Paragraph style={styles.paragraph}>
            At the end of this module, you are expected to...
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            1. To understand the laws of reflection, types of mirrors, and their
            importance in everyday life.
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            2. To apply the concepts of reflection in predicting image positions
            formed by objects in front of a planar or spherical mirror.
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            3. To illustrate the laws of reflection through diagrams and equations.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="What is reflection?" />
          <Card.Content>
            <Paragraph style={styles.paragraph}>
            You might be hearing about the term “Reflection” since grade school. When you
            are looking at a mirror to see your face, your image is being reflected. But what is
            “reflection”? It is the occurrence of a wave or ray of light that hits a smooth polished
            surface and the light ray bounces back. The light ray that bounces back is known as
            reflected ray (Reflection of Light, n.d.). Reflection is not only happening when you look
            at the mirror, but it also occurs when you are looking at the water or a polished metal.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Let's Discover" />
          <Card.Content>
            <Card.Title title="“Mirrors and Reflections”" />
            <Paragraph style={styles.paragraph}>
            Reflection of light is either specular (mirror-like) or diffuse (retaining the
            energy, but losing the image) depending on the nature of the interface. A mirror
            provides the most common model for specular light reflection and typically consists of a
            glass sheet with a metallic coating where the reflection occurs. Reflection is enhanced
            in metals by suppression of wave propagation beyond their skin depths. Reflection also
            occurs at the surface of transparent media, such as water or glass.
            </Paragraph>

            <Title>MATERIALS NEEDED:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - At least 2 mirrors (Preferably one on a wall and one you can hold)
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Some words and letters to study in the mirror
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Pencil, paper, and any small objects available at your home
            </Paragraph>

            <Title>PROCEDURE:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                1. Start by exploring what happens with two mirrors facing each other. You
                must see the object in a mirror, hits the mirror, and then reflects into your eyes.
                Then you add another mirror into the equation.
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module3/introduction/image1.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                2. Hold up some letters or words in front of one mirror and see what happens.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                3. You will notice that the word appears to be backward.
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module3/introduction/image2.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>

            <Title>QUESTIONS:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - What can you conclude about the first task?
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Why do you think the word “AMBULANCE” in an ambulance is reverse?
            </Paragraph>
            
            <Title>CONCLUSION</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
            The first task gives infinite reflections because the two mirrors are facing each
            other, you’re getting a reflection of a reflection, and so on and so on. The second task
            was that reflection represents the photons of light, bouncing back in the same direction
            from which they came.
            </Paragraph>

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
