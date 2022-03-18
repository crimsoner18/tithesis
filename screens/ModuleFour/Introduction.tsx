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
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Card style={styles.card}>
          <Card.Title title="LEARNING COMPETENCY" />
          <Card.Content>
          <Paragraph style={styles.paragraph}>
            A. Explain the phenomenon of dispersion by relating to Snell’s Law{"\n"}
            B. Explain image formation as an application of reflection, refraction, and paraxial approximation{"\n"}
            C. Relate properties of mirrors and lenses (radii of curvature, focal length, index of
            refraction [for lenses]) to image and object distance and sizes{"\n"}
            D. Determine graphically and mathematically the type (virtual/real), magnification,
          location/ apparent depth, and orientation of image of a point and extended object
          produced by a lens or series of lenses
            </Paragraph> 
          <Card.Title title="What to expect" />
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            - Give an explanation of refraction using examples.
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            - Explain what refractive index is and how it relates to the law of refraction.
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            - Explain the differences between convex and concave lenses.
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            - Describe how light passes through convex and concave lenses and why this is so.
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            - Predict the types of images produced by convex and concave lenses based on the information you have.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="What is Refraction?" />
          <Card.Content>
            <Paragraph style={styles.paragraph}>
            Refraction is the change in direction of a wave passing through a medium
            caused by its speed. For example, deep water waves travel faster. Warm air has faster
            sound waves than cold air. Images are formed by a lens' shape. Parallel rays of light
            enter a concave lens and refract outward. Light rays refract twice: entering and exiting
            the lens. Some well-known refraction effects include the apparent bending of an object
            partially submerged in water and the mirages seen in a hot, sandy desert. Lenses use
            visible light refraction to focus a beam of light onto a single point.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Let's Discover" />
          <Card.Content>
            <Card.Title title="“Broken Pencil”" />
            <Paragraph style={styles.paragraph}>
            "Refraction" is the term used to describe the
            change in direction or bending of a light wave as it travels through
            a transparent medium and is caused by a change in the speed of
            the wave. There are many different ways that light can be
            refracted, but the science activity that bends a pencil makes it
            easier to understand this concept.
            In a pinch for time but still want a science lesson? You can do
            this simple science project. Learning about light refraction can
            take a long time, but this activity is a great place to start learning about it.
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module4/introduction/image1.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>

            <Title>MATERIALS NEEDED:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Clear, round drinking glass
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Pencil
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Tap water
            </Paragraph>

            <Title>PROCEDURE:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                1. Approximately two-thirds of the way full, the glass should be filled with water.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                2. Place the pencil on the rim of the glass by tilting it inside the glass.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                3. Lower your body so that your gaze is parallel to the surface of the water, then
                look up. The pencil should appear to be split in half.
            </Paragraph>

            <Title>QUESTIONS:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Why do you think the pencil look bent?
            </Paragraph>
            
            <Title>CONCLUSION</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
            The speed at which light travels through different materials, or mediums, varies. As part
            of the test, light travels first through the air before slowing down and then stopping
            altogether in the water. Changing the pencil's speed causes the light to bend, or refract,
            resulting in a shift in the pencil's water-bound portion.
            </Paragraph>
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
});
