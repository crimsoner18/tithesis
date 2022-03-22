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
          <Card.Title title="Activity: “Images in Plane Mirror" />
          <Card.Content>
            
            <Paragraph style={{fontWeight:"bold",marginBottom:20,marginLeft:30}}>
            Direction:
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            1. Using the given figure below, try to work out how to locate the image I of the object O
            in the plane mirror MM’.
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module3/conclusion/image1.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
            <Paragraph style={{marginLeft:20}}>
            2. Using a pin, plane mirror (small), pen/pencil, ruler, and a clean sheet of paper verify your method above.
            </Paragraph>
            <Paragraph style={{marginLeft:30, marginTop:20, fontWeight:'bold'}}>
            Activity Questions:
            </Paragraph>
            <Paragraph style={{marginLeft:20, marginBottom:20}}>
            1. Describe your verification method{"\n"}
            2. Compare images observed in the two methods.{"\n"}
            3. What can you say about the images formed by plane mirrors?
            </Paragraph>
            <Paragraph style={{marginLeft:10, fontWeight:'bold', fontSize: 20}}>
            What to remember?
            </Paragraph>
            <Paragraph style={{marginBottom:20}}>
            After studying the Reflection and the Ray Model of Light, we verified that
            refraction occurs when light reaches a boundary between two transparent mediums of
            differing densities. We also verified that the refractive index of water is about 1.33,
            which means that it takes light about 33% longer to travel through water than air. In
            addition, we saw that the critical angle is directly related to total internal reflection, which
            will only occur if light passes from a medium of greater refractive index into one of a
            lesser refractive index if the angle of incidence is greater than the critical angle. The
            critical angle for any boundary can be predicted using Snell’s law or by conducting an
            experiment.. The phenomena of critical angles is apparent when observing the brilliance
            and sparkle of a strategically-cut diamond. The critical angle for a diamond-air boundary
            is so small that light is essentially “trapped” inside of the diamond for a brief moment,
            leading to total internal reflection numerous times before the light is refracted out of the
            stone. Optics is a vital branch of physics due to its endless applications. Anything that
            manipulates the direction or capturing of light involves an optical principle, such as fiber
            optics, telescopes/microscopes, lasers, cameras, etc.
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
    width: vw
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
