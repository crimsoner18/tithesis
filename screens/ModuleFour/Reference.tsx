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
          <Card.Title title="REFERENCE" />
          <Card.Content>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://byjus.com/physics/refraction-of-light/?fbclid=IwAR3P-ohWTyQB_T_iTTBkCbn6kVuQIU23bP4JxQOJVhyK8aRjUdjzzcUEdWQ"
                  )
                }
              >
              https://byjus.com/physics/refraction-of-light/?fbclid=IwAR3P-ohWTyQB_T_iTTBkCbn6kVuQIU23bP4JxQOJVhyK8aRjUdjzzcUEdWQ
            </Text>

            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "http://physics.uwyo.edu/~aschwortz/NES-AAPT-2017/AdditionalLessons.pdf"
                  )
                }
              >
              http://physics.uwyo.edu/~aschwortz/NES-AAPT-2017/AdditionalLessons.pdf
            </Text>

            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "hhttps://www.nagwa.com/en/explainers/957195623921/"
                  )
                }
              >
            https://www.nagwa.com/en/explainers/957195623921/
            </Text>

            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.nagwa.com/en/explainers/803102832962/"
                  )
                }
              >
              https://www.nagwa.com/en/explainers/803102832962/
            </Text>

            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.vedantu.com/physics/difference-between-concave-convex-lens"
                  )
                }
              >
              https://www.vedantu.com/physics/difference-between-concave-convex-lens
            </Text>

            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.plymouth.ac.uk/uploads/production/document/path/3/3754/PlymouthUniversity_MathsandStats_outreach_lenses.pdf"
                  )
                }
              >
              https://www.plymouth.ac.uk/uploads/production/document/path/3/3754/PlymouthUniversity_MathsandStats_outreach_lenses.pdf
            </Text>

            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.sciencelearn.org.nz/images/51-concave-lens"
                  )
                }
              >
              https://www.sciencelearn.org.nz/images/51-concave-lens
            </Text>

            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.teachoo.com/10838/3118/Convex-Lens---Ray-diagram/category/Concepts/"
                  )
                }
              >
              https://www.teachoo.com/10838/3118/Convex-Lens---Ray-diagram/category/Concepts/
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
    marginLeft: 10,
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
