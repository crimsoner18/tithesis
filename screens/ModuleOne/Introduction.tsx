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
          <Card.Title title="LEARNING COMPETENCY" />
          <Card.Content>
            <Paragraph style={styles.paragraph}>
            Relate the properties of EM wave (wavelength, frequency, speed) and the
            properties of vacuum and optical medium (permittivity, permeability, and index of
            refraction)
            </Paragraph>
          <Card.Title title="What to expect" />
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            - Students should be able to describe simple harmonic motion and describe how
                energy and speed vary in such motion.
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            - Students should be able to understand the equation of SHM explain what is
                meant by phase and phase differences
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            - Students should be able to describe wave motion in terms of various parameters
                and identify different types of waves
            </Paragraph>
            <Paragraph style={styles.paragraph}>
            Students should understand the description of traveling waves, so they can:
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            1. Sketch or identify graphs that represent traveling waves and determine the
                amplitude, wavelength, and frequency of a wave from such a graph.
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            2. Apply the relation among wavelength, frequency, and velocity for a wave.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="What is/are VIBRATION AND WAVES?" />
          <Card.Content>
            <Paragraph style={styles.paragraph}>
            Tremble, quake, and oscillate. These expressions describe the movement of a wide
            range of items. They can even describe how matter moves at the atomic level.
            Atoms wriggle as well, going back and forth. Nature's wiggles, vibrations, and
            oscillations are inextricably linked. Understanding vibrations and waves is crucial
            to comprehending our physical environment. Vibrations and waves are
            responsible for most of what we see and hear. Light waves allow us to see the
            world around us. Sound waves allow us to hear the world around us. We shall be able
            to comprehend the world of sight and sound if we can comprehend waves. There are
            waves all over the place. We all face waves on a daily basis, whether we realize it or
            not. Waves in our daily lives include sound waves, visible light waves, radio waves,
            microwaves, water waves, sine waves, cosine waves, stadium waves, earthquake
            waves, waves on a string, and slinky waves, to name a few.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Let's Discover" />
          <Card.Content>
            <Card.Title title="“Waves Visible”" />
            <Paragraph style={styles.paragraph}>
            This lesson is the introductory lesson for the students and is a lesson that takes
            place over the course. Waves can be a challenging topic for a middle school
            student. With many waves being "invisible", it can be difficult for a student to
            relate to and explain. As a result, they have many misconceptions about wave
            behavior. In order to allow students to make connections, this activity helps
            make wave properties visible.
            </Paragraph>

            <Title>MATERIALS NEEDED:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - PLAYING DRUM AND STICK
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - BOND PAPER
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - FEW GRAINS OF MONGO SEEDS
            </Paragraph>

            <Title>PROCEDURE:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                1. Student will place the playing drum on the top of the table. Beat it slightly
                    on its drumhead
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                2. Beat it again. Touch the drumhead
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                3. Place a piece of paper on the drumhead. Sprinkle a few grains of mongo
                    seeds on top of it. Beat the drumhead
            </Paragraph>

            <Title>QUESTIONS:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - What is produced when you place the drum on the top of the table?
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - What do you feel?
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Describe the general motion of the waves you created
            </Paragraph>
            
            <Title>CONCLUSIONS</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
            Striking the head of the drum changes its shape and compresses the air inside the
            shell. The compressed air presses on the bottom head and changes its shape. Then,
            these changes are transmitted to the drum shell and reflected back, and this action is
            repeated, creating a vibration.
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
