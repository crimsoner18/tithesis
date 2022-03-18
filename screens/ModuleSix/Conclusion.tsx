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
          <Title style={{fontWeight:"bold",marginBottom:20,marginLeft:20}}>"Activity: “Experiencing Nearsightedness”" </Title>
          <Card.Content>
            <Paragraph style={{marginLeft:10, textDecorationLine: 'underline'}}>
            Introduction
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            The Human Eye is the most interesting optical instrument as it enables
            us in seeing and perceiving things around us in a more detailed manner. However,
            there are instances that our eyes experiences difficulties. These are called eye defects
            which were discussed on the lessons in the module.
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            In this follow-up activity, we are going to experience one of the two most common
            eye defects called nearsightedness.
            </Paragraph>
           

            <Paragraph style={{fontWeight:"bold",marginBottom:20,marginLeft:20}}>
            Objectives:
            </Paragraph>
            <Paragraph style={{marginBottom:20,marginLeft:20}}>
            In this activity you will be able to describe nearsightedness through experience.
            </Paragraph>
            <Paragraph style={{fontWeight:"bold",marginBottom:20,marginLeft:20}}>
            Materials:
            </Paragraph>
            <Paragraph style={{marginBottom:20,marginLeft:20}}>
            • Several convex lenses
            </Paragraph>
            <Paragraph style={{fontWeight:"bold",marginBottom:20,marginLeft:10}}>
            Procedure:
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            1. Look through a convex lens into the distance. (If you wear glasses, leave them on) What did you see?
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            2. Look at some of the close objects with the lens. What do you observe?
            </Paragraph>
            <Paragraph style={{marginLeft:20,marginBottom:20}}>     
            3. Repeat this with a convex lens of different focal lengths.
            </Paragraph>
            <Paragraph style={{marginLeft:30, marginTop:20, fontWeight:"bold"}}>
            Guided Questions:
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            a. Relate what you observe in Steps 1 and 2
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            b. You have just experienced nearsightedness. Describe a nearsighted person.
            </Paragraph>     
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Paragraph style={{marginLeft:30, fontWeight:'bold'}}>
            What to remember?
            </Paragraph>
            <Paragraph style={{marginBottom:20}}>
            Optical Instruments are tools or devices that process light wave used in
            seeing things in a more detailed and clear manner.
            Our eyes serve as the most interesting optical instruments. Its major parts
            include cornea, retina, optic nerve, pupils, and iris. These components have their
            different functions to enable us in seeing our surroundings. Our eyes perform a
            vast number of functions, such as sense direction, movement, sophisticated
            colors, and distance.
            </Paragraph>
            <Paragraph style={{marginBottom:20}}>
            The difference between mirror and lenses lies on their construction and
            working principle. A mirror is a device that reflects the light falling on them, while
            lenses manipulate the light. Mirrors are tools that implies a glass surface,
            producing image through reflection. Meanwhile, a lens pertains to a transparent
            substance, producing image through refraction in any one of the two surfaces.
            </Paragraph>
            <Paragraph style={{marginBottom:20}}>
            Optics refers to the study of visible light by which it is used for extending
            human vision and other related tasks. The knowledge regarding light and concepts
            are essential for the invention of optical instruments such as microscopes,
            telescopes, and cameras, in addition to optical fibers. These instruments use
            mirrors and lenses to reflect and refract light and form images. When computing
            for the magnification of optical instruments, the equations are held true for all tools.
            </Paragraph>
            <Paragraph>
            Refractive Errors are type of vision problems wherein the person
            experiences blurry visions due to the inability of the eye to focus images sharply
            on the retina. There are four (4) errors of refraction which include myopia or
            nearsightedness, and hyperopia or farsightedness, emmetropia, and astigmatism.
            The refractive conditions can be corrected through using prescribed eyeglasses or
            surgeries.
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft:30
  },
});
