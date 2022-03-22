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
          <Paragraph style={{marginBottom:20, marginLeft:20}}>
            A. Explain image formation as an application of reflection, refraction, and paraxial approximation;
          </Paragraph>
          <Paragraph style={{marginBottom:20, marginLeft:20}}>
            B. Apply the principles of geometric optics to discuss image formation by the
            eye, and correction of common vision defects.
          </Paragraph>
          <Paragraph style={{marginBottom:20, marginLeft:20}}>
            C. dRelate properties of mirrors and lenses (radii of curvature, focal length,
            index of refraction [for lenses]) to image and object distance and sizes
          </Paragraph> 
          <Card.Title title="What to expect" />
            <Paragraph style={styles.paragraph}>
            At the end of this module, you are expected to...
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            1. Identify the parts of the human eye and the formation of image in the retina.
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            2. Understand the principles of optical instruments in producing a clear image and their uses.
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            3. Relate the principles of optics to the image formation of an eye and the common vision defects.
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            3. Explain the causes of common vision defects and how are these conditions can be corrected.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="What are optical instruments?" />
          <Card.Content>
            <Paragraph style={styles.paragraph}>
            You might be hearing about the term “Reflection” since grade school. When you
            are looking at a mirror to see your face, your image is being reflected. But what is
            “reflection”? It is the occurrence of a wave or ray of light that hits a smooth polished
            surface and the light ray bounces back. The light ray that bounces back is known as
            reflected ray (Reflection of Light, n.d.). Reflection is not only happening when you look
            at the mirror, but it also occurs when you are looking at the water or a polished metal.
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module6/introduction/image1.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Let's Discover" />
          <Card.Content>
          <Title>"“Dimmed lights, On-Camera, Let’s make a Pinhole Camera!”" </Title>
            <Paragraph style={styles.paragraph}>
            Have you ever seen a camera? It can either be in your cellphone or a
            separate camera that enables you to capture precious moments. A camera is one of many
            optical instruments that are used in capturing images. It is enclosed in a box, or the
            camera body, with a presence of small hole called aperture, allowing the light to
            pass and capture an image on a light-sensitive surface. It consists of different
            mechanisms for controlling how light fallsonto the light-sensitive surface. The
            aperture of a lens can be widened ornarrowed to focus the light entering the
            camera. The duration of thephotosensitive surface is exposed to light
            is regulated by a shutter mechanism.In this activity, we are going to
            make a Do-It-Yourself Pinhole Camera!
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module6/introduction/image2.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
            <Title>OBJECTIVE:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
            In this activity, you are able to create your own camera from materials you have at
            home, and understand the mechanism of light rays to travel in straight lines which is used
            to process images. Moreover, usage of light rays in creating photographic image and the
            fundamentals of pinhole camera will also be explained.
            </Paragraph>

            <Title>MATERIALS NEEDED:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Illustration board/ cardboard/ carton
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Black cartolina
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Safety Pin/Sewing needle
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Tracing paper/wax paper
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Cutter/scissors
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Glue/sticky tape
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Pencil and foot ruler
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Cutting mat
            </Paragraph>

            <Title>PROCEDURE:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
              1. Gather all the necessary materials for this activity.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
              2. Prepare the illustration board and cut with the dimensions given below.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
              3. Fold along the broken line and connect (using glue) the prepared illustration
              board cut out to form a rectangular box with two ends open. This will serve as
              the body of the camera.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
              4. Prepare the tracing paper as shown in the next figure. The area bounded by the
              broken line should perfectly fit the box’s open end. Provide an extra one (1) cm
              outside the area bounded by the broken line as shown.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
              5. Fold the tracing paper prepared in Number 4, following the illustration above to
              form an open box. Connect the corners using a sticky tape.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
              6. Cover one open end of the body of the camera with the assembly formed in
              Number 5, attach to the camera body using a sticky tape. This will serve as the
              screen of your pinhole camera.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
              7. Prepare the black cartolina as in Number 4 to 5, but this time the extra length
              outside the bounded area should be around 3 cm.
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
              8. Punch a hole using a small pin or needle at the center of the black cartolina,
              taking care not to move the in/needle from side to side. This is now your pinhole
              camera.
            </Paragraph>
            

            <Title>QUESTIONS:</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - What did you felt while making the activity?
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - What do you think is the importance of dimmed lights and single light source for this activity?
            </Paragraph>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
                - Why do you think it is important to have optical instruments such as camera, telescope, etc.?
            </Paragraph>
            
            <Title>CONCLUSION</Title>
            <Paragraph style={{marginBottom:10, marginLeft:20}}>
            A Pinhole Camera's structure consists of a small pinhole through which light goes
            both through the camera and the film that is placed inside of it. An image is formed on the
            film when an object is placed in front of a Pinhole camera. Due to the small hole in the
            Pinhole camera, only a limited quantity of light can get through and reflect on the film.
            When exposing the pinhole camera to light, you must expose it between 10-30 seconds
            depending on the weather or amount of light that is portrayed. In other words, if it's a
            sunny day, you'll need to expose the camera to less light, and if it's a cloudy day, you'll
            need to expose the camera to lighter. It's critical to keep the camera stationary when
            pointing it at an object. Even if the camera can bring the item into focus, even a small
            amount of movement can cause the image to blur. While light helps to reflect an object
            into a picture, it simply shows and reflects the image's contour, such as a building. Using
            a complicated outline to capture the contour of an object (such as a flower) may result in
            an image that is ambiguous.
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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});
