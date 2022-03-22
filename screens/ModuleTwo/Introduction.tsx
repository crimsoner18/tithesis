import React, { useRef, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
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
            A. Determine the properties of light (wavelength){"\n"}
            B. Explain the photoelectric effect using the idea of light quanta or photons.{"\n"}
            C. Calculate kinetic energy, rest energy, momentum, and speed of objects
            moving with speeds comparable to the speed of light.{"\n"}
            D. Determine the conditions of polarization for interference to occur
            emphasizing the properties of a laser.{"\n"}
            E. Calculate the intensity of the transmitted light after passing through a series
            of polarizers applying Malus’s Law.
            </Paragraph> 
          <Card.Title title="What to expect" />
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            - State the different theories and define what is Light;
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            - Identify the basic properties of light and color;
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            - Analyze the colors of objects with light;
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            - Calculate the speed of light, wavelength, and frequency;
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            -  Know the basics of polarization.
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            - Apply Malus’s law in intensity in polarization.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="What is Light and Color?" />
          <Card.Content>
            <Paragraph style={styles.paragraph}>
            Light is a kind of energy called electromagnetic radiation. This form of energy is also
            used in x-ray machines, microwave ovens, and radios. The electromagnetic radiation
            that we can see is called visible light.
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module2/introduction/image1.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
            <Paragraph style={styles.paragraph}>
            Color is associated specifically with electromagnetic
            radiation of a certain range of wavelengths visible to
            the human eye.
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module2/introduction/image2.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Let's Discover" />
          <Card.Content>
            <Card.Title title="“Colored Light Experiment”" />
            <Paragraph style={styles.paragraph}>
            The sense of sight is extremely important to us that provides us with a large
            part of our information and knowledge about the world. How do we see? What is
            something called “light” that enters our eyes and causes the sensation of sight? How does
            light behave so that we can see everything that we do?
            </Paragraph>
            <Title>MATERIALS NEEDED:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - 3 flashlights
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - red, blue, and green cellophane
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - rubber bands
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - a darkroom
            </Paragraph>

            <Title>PROCEDURE:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                1. Start by covering each flashlight with a sheet
                of red, blue, or green cellophane and secure it
                with a rubber band.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                2. In a darkened room, stand about one foot from
                the wall and shine one of the flashlights at the
                wall.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                3. Turn it off then turn on the other two.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                3. Then turn on all the flashlights at once.
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module2/introduction/image3.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>

            <Title>QUESTIONS:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - On the first one, what color do you see?
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - On the second flashlight, what color do you see now?
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - And on the last one, what color do you see?
            </Paragraph>
            
            <Title>CONCLUSION</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
            The three primary colors of light are red, blue, and green. This is different than the three
            primary colors of pigment which are red, yellow, and blue These three colors of light can
            combine to make all other colors of light. When all three primary colors of light combine
            at the same time, they create the color white.
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
