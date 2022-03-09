import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  Dimensions,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { Card, Paragraph, List } from "react-native-paper";

const { width, height } = Dimensions.get("window");
const vw = width - 10;
const vh = height;

const { Title, Content, Cover } = Card;

export default function LessonOneScreen() {
  const setLessonAsRead = async (value: string) => {
    try {
      await AsyncStorage.setItem('@M4L3isRead', value)
    } catch (e) {
      console.log(e)
    }
  }

  setLessonAsRead('true');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>       
        <Card style={styles.card}>
        <Title
            title="Drawing Ray Diagrams"
            subtitle="Lesson 3"
        />  
        <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
        RULE 1 – Ray parallel to principal axis will pass through focus
          </Paragraph>
          <Content>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson3/image1.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
            <Paragraph><Text style={{fontWeight: "bold"}}> Convex Lens - </Text>
            pass through right side
            </Paragraph>
            <Paragraph><Text style={{fontWeight: "bold"}}> Concave Lens - </Text>
            ray pass through on left side
            </Paragraph>
          </Content>

       
        <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
        Rule 2 – Ray passing through focus will become parallel to principal axis
          </Paragraph>
          <Content>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson3/image2.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
            <Paragraph><Text style={{fontWeight: "bold"}}> Convex Lens - </Text>
            Ray pass through focus on left side and become parallel to principal
            axis after refraction.
            </Paragraph>
            <Paragraph><Text style={{fontWeight: "bold"}}> Concave Lens - </Text>
            the focus sine s located on the right side, ray pass through focus and
            becomes parallel to principal axis.
            </Paragraph>
          </Content>
        <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
        Observed the figure below
          </Paragraph>
          <Content>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson3/image3.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
            <Paragraph>
            As illustrated in the figures, the direction of light rays
            passing through the lens is determined by two rules.
            </Paragraph>
            <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
            Rule 1: Refraction of Light Rays on a Convex Lens's Optical Axis
            </Paragraph>
            <Paragraph>
            Any light ray passing through the center of a convex lens remains stationary.
            </Paragraph>
            <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
            Rule 2: Refraction of Light Rays off the Optical Axis of a Convex Lens
            </Paragraph>
            <Paragraph>
            Passing through a convex lens will cause a light beam parallel to the optical axis to
            change direction. The light ray changes direction and passes through the lens' focal
            point on the opposite side from where it enters the lens.
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson3/image4.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
            <Paragraph>
            A convex lens ray graph represents the path light
            rays take as they pass through a convex lens.
            Simply draw two ray lines to create a ray diagram
            and determine the location of the image that
            would be created on a screen. This is
            occasionally referred to as "the two refraction
            rules for converging lenses." The only thing to
            keep in mind is:
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson3/image5.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
            <Paragraph>
            To begin, draw a parallel line through the primary focal point.
            </Paragraph>
            <Paragraph>
            Second, draw a ray line through the convex lens's center.
            Draw a parallel line through the object's primary
            focal point. Typically, we choose the object's top:
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson3/image6.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
            <Paragraph>
            From the object, pass a ray line through the center of the convex lens.
            The intersection of these two lines forms the image's top. 
            Draw a vertical line up to the principal axis to complete the image as follows:
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson3/image7.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
          </Content>
        </Card>
      </ScrollView>
    </View>
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
  coverImage: {
    backgroundColor: "#FFFFFF",
    margin: 10,
  },
});
