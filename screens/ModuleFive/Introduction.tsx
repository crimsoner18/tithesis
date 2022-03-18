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
          <Paragraph style={{marginBottom:20, marginLeft:20}}>
            A. Determine the conditions (superposition, path and phase difference, amplitude) for interference
            to occur emphasizing the properties of a laser as a monochromatic and coherent light source;
            and
          </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            B. Relate the geometry of the two-slit experiment set up (slit separation, and screen-to-slit distance)
            and properties of light (wavelength) to the properties of the interference pattern (width, location,
            and intensity).
          </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            C. Relate the geometry of the diffraction experiment setup (slit size, and screen- to-slit distance) and
            properties of light (wavelength) to the properties of the diffraction pattern (width, location, and
            intensity of the fringes)
          </Paragraph>  
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            D. Topics: Two-source interference of light, Intensity in interference patterns, Interference in thin
            films, Diffraction from single-slits.
          </Paragraph>  
          <Card.Title title="What to expect" />
            <Paragraph style={styles.paragraph}>
            After Studying the lesson, learners are expected to:
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            1. Describe Diffraction
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            2. Understand Single Slit and Multi-slit Diffraction
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            3. Formulate Huygen’s Principle
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            3. Calculate the size of objects using Diffraction equations

            </Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Let's Discover" />
          <Card.Content>
            <Card.Title title="“Light can bend around Edge”" />
            <Title>MATERIALS NEEDED:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Two clean new pencils with erasers
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - A piece of transparent tape (any thin tape will do)
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - A Mini Maglite flashlight (do not substitute other flashlights) or a candle with matches or a lighter
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Optional: Pieces of cloth, a feather, plastic diffraction grating, metal screen, a human hair
            </Paragraph>

            <Title>PROCEDURE:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                1. Light the candle or, if you are using a Mini Maglite, unscrew the top of the flashlight. The
                tiny lamp will come on and shine brightly. CAUTION: if you are using an LED Mini Maglite,
                be sure it is set to dim before unscrewing the top of the flashlight. Avoid staring directly at
                the light for a long period of time.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                2. Wrap one layer of tape around the top of one of the pencils, just below the eraser.
            </Paragraph>

            <Title>To do list</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Place the light on a stable surface at least one arm’s length away from you.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Hold up the two pencils, side by side, with the erasers at the top. The tape wrapped around one
                  pencil should keep the pencils slightly apart, forming a thin slit between them, just below the tape.
                  Hold both pencils close to one eye (about 1 inch [2.5 cm] away) and look at the light source
                  through the slit between the pencils. Squeeze the pencils together, making the slit smaller.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Notice that there is a line of light perpendicular to the slit. While looking through the slit, rotate the
                  pencils until they are horizontal, and notice that the line of light becomes vertical.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - If you look closely you may see that the line is composed of tiny blobs of light. As you squeeze
                  the slit together, the blobs of light grow larger and spread apart, moving away from the central
                  light source and becoming easier to see. Notice that the blobs have blue and red edges and that
                  the blue edges are closer to the light source.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Stretch a hair tight and hold it about 1 inch (2.5 cm) from your eye. Move the hair until it is between
                  your eye and the light source, and notice that the light is spread into a line of blobs by the hair,
                  just as it was by the slit. Rotate the hair and watch the line of blobs rotate.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Look at the light through a piece of cloth, a feather, a diffraction grating, or a piece of metal screen.
                  Rotate each object while you look through it.
            </Paragraph>
            <Title>Going Further</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
            In a dimly lit room, look at a Mini Maglite bulb with one eye (a candle will not work). Notice the lines of light
            radiating out from the light source, like the seeds radiating out from the center of a dandelion.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
            How can you find the origin of these lines? Rotate the light source and notice that the lines of light do not
            rotate. Rotate your head and notice that the lines do rotate. Hold your hand or an index card in front of your
            eye so that it doesn’t quite block your view of the light source (click to enlarge diagram below).
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module5/introduction/image1.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
            Notice that you still see a full circle of lines radiating out from the light source. The effect actually happens
            in your eye, as lines of light are spread out onto your retina by imperfections in the tissues of your cornea.
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
