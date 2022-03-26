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
          <Card.Title title="Activity: “Polarized Sunglasses”" />
          <Card.Content>
            <Paragraph style={styles.paragraph}>
            Polarized light can be produced from the common physical processes that deviate light
            beams, including absorption, refraction, reflection, diffraction. Common examples of
            surfaces that reflect polarized light are undisturbed water, glass, sheet plastics, and
            highways.
            </Paragraph>
            <Paragraph style={{marginLeft:30, fontWeight:'bold'}}>
            Materials:
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            • One clear lightbulb with socket and cord{"\n"}
            • One piece of shiny opaque plastic, such as a black plastic party plate{"\n"}
            • One or two pieces of polarizing material (such as old lenses from polarizing sunglasses)
            </Paragraph>
            <Paragraph style={{marginLeft:30, fontWeight:'bold'}}>
            Procedure:
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            1. Place the lit bulb upright and the plastic plate on a flat surface nearby (see diagram).
            Orient the bulb and your eye so you can see the reflection of the bulb in the plastic.
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module2/conclusion/image1.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
            <Paragraph style={{marginLeft:20}}>
            2. Look at the reflection through a piece of the polarizer. Rotate the polarizer and vary the angle at
            which you look at the plastic until you get the dimmest reflection. You’ll probably get the best
            results when there’s about a 35-degree angle between your eyes and the piece of plastic. Rotate
            the polarizer 90 degrees as you watch the reflection. The reflection should become notably brighter.
            </Paragraph>
            <Paragraph style={{marginLeft:20,  marginBottom:20}}>
            3. Observe reflections elsewhere around you. Rotate the polarizer and change the angle
            of viewing to vary the brightness. Try looking at a reflection from a metallic surface, such
            as an ordinary mirror. There should be no difference in the brightness of an image
            reflected in the mirror as you rotate the polarizer or vary the angle of viewing. Look at the
            sky through the polarizing lens. Notice that in some places the brightness of the blue-sky
            changes as you rotate the polarizer. That’s because the light in the sky is polarized.
            </Paragraph>
            <Paragraph style={{marginLeft:10, fontSize: 20, fontWeight:'bold'}}>
            Conclusion:
            </Paragraph>
            <Paragraph style={{marginBottom:20}}>
            The lightbulb produces unpolarized light—each photon is vibrating in its different direction.
            </Paragraph>
            <Paragraph style={{marginBottom:20}}>
            Nonmetallic surfaces, such as black plastic, tend to reflect light that is vibrating parallel to
            the surface and transmit or absorb light vibrating in all other directions. If the black plastic
            is horizontal, then it reflects light that is vibrating horizontally, creating horizontally
            polarized light. The horizontal black plastic reflects less light that is vibrating vertically.
            </Paragraph>
            <Paragraph style={{marginBottom:20}}>
            The polarizer lets through light vibrating in one direction and absorbs light vibrating in all
            other directions. When the black surface is horizontal, the reflection looks dimmest when
            you hold the filter so it lets through just vertically vibrating light. The reflection looks
            brightest when you hold the filter so it lets through just horizontally vibrating light.
            </Paragraph>
            <Paragraph style={{marginLeft:10, fontWeight:'bold',fontSize: 20}}>
            What to remember?
            </Paragraph>
            <Paragraph style={{marginBottom:20}}>
            Light is composed of different colors which have different wavelengths. Dispersion,
            scattering, and interference of light cause incredible color phenomena. The additive
            and subtractive model was explained to describe the nature of color mixing. Some
            colors have negative effects for instance those on a bright light wave that reflect more
            light. They may cause eye irritation or cause headaches for instance the bright yellows
            on surfaces or computer washouts. The bright colors are thus able to reflect more light
            waves into the eye and cause irritation or straining. Light is a form of EM radiation;
            visible light is a small range in the EM spectrum. The wavelength, frequency, and
            energy of light are intimately connected, how light interacts with matter depends on its
            energy and the complexity of its target's structure.
            </Paragraph>
            <Paragraph>
            Understanding and manipulating the polarization of light is crucial for many optical
            applications. Optical design frequently focuses on the wavelength and intensity of
            light, while neglecting its polarization. Polarization, however, is an important property
            of light that affects even those optical systems that do not explicitly measure it. The
            polarization of light affects the focus of laser beams, influences the cut-off
            wavelengths of filters, and can be important to prevent unwanted back reflections. It
            is essential for many metrology applications such as stress analysis in glass or plastic,
            pharmaceutical ingredient analysis, and biological microscopy. Different polarization
            of light can also be absorbed to different degrees by materials, an essential property
            for LCD screens, 3D movies, and glare-reducing sunglasses.
            </Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Answer Keys" />
          <Card.Content>
            <Text style={{fontWeight:'bold'}}> Self-Test 1 </Text>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module2/conclusion/image2.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module2/conclusion/image3.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module2/conclusion/image4.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>

            <Text style={{fontWeight:'bold', marginTop:20}}> Self-Test 2 </Text>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module2/conclusion/image5.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft:30
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});
