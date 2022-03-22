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
          <Card.Content>
            <Paragraph style={{marginLeft:10, marginTop:10, fontSize:21, fontWeight:'bold'}}>
            Conclusion
            </Paragraph>
            <Paragraph style={{marginBottom:20}}>
            Diffraction is a phenomenon which envolves the bending of waves around obstacles. It's
            generally guided by Huygen's Principle, which states: every point on a wave front acts as a source
            of tiny wavelets that move forward with the same speed as the wave; the wave front at a later
            instant is the surface that is tangent to the wavelets. If one considers diffraction through a slit then
            the properties of the system are wholly dependant on the ratio / W, where is the wavelength
            of the light and W is the width of the slit. If one maps the intensity pattern along the slit some
            distance away, one will find that it consists of bright and dark fringes. In the middle a central bright
            fringe can be found, it is the largest bright fringe. The angle at which the dark fringes occur is
            given by
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module5/conclusion/image1.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
            <Paragraph style={{marginBottom:20}}>
            As you see the intensity pattern is determined only by the ratio / W. Notice the effect of both the
            slit width and wavelength by dragging the slit sides and spectrum selector, respectively.
            </Paragraph>
            <Paragraph style={{marginBottom:20}}>
            Interference is an effect that occurs when two or more waves overlap.  In general, the individual
            waves do not affect one another, and the total wave amplitude at any point in space is simply the
            sum of the amplitudes of the individual waves at that point.
            </Paragraph>
            <Paragraph style={{marginBottom:20}}>
            Constructive Interference is a form of interference in which the displacement of the two
            interfering waves is the same. It can be seen anywhere where the two conflicting waves
            have been shifted upward. While Destructive interference occurs when two interfering
            waves have opposing displacements.
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
