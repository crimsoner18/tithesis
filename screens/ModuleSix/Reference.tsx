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
            <Paragraph style={{fontWeight:'bold'}}>
            Dhaliwal, D. K. (2020, May). Overview of Refractive Error. Retrieved from Merck Manuals :
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.merckmanuals.com/en-pr/home/eye-disorders/refractive-disorders/overview-of-refractive-disorders"
                  )
                }
              >
              https://www.merckmanuals.com/en-pr/home/eye-disorders/refractive-disorders/overview-of-refractive-disorders
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Difference between Mirrors and Lenses. (n.d.). Retrieved from Byju's:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://byjus.com/physics/difference-between-mirror-and-lens/"
                  )
                }
              >
              https://byjus.com/physics/difference-between-mirror-and-lens/
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Ling, S. J., Sanny, J., & Moebs, B. (2020, November 06). The Camera. Retrieved from Physics LibreTexts:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/Book%3A_University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/02%3A_Geometric_Optics_and_Image_Formation/2.07%3A_The_Camera"
                  )
                }
              >
             https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/Book%3A_University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/02%3A_Geometric_Optics_and_Image_Formation/2.07%3A_The_Camera
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Memorise, D. (2019). Human Eye - Passage of light through it | Don't Memorise. Retrieved from YouTube:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.youtube.com/watch?v=pNuotNacp1c"
                  )
                }
              >
              https://www.youtube.com/watch?v=pNuotNacp1c
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Nearsightedness. (2020, April 2). Retrieved from Mayo Clinic:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.mayoclinic.org/diseases-conditions/nearsightedness/diagnosis-treatment/drc-20375561"
                  )
                }
              >
              https://www.mayoclinic.org/diseases-conditions/nearsightedness/diagnosis-treatment/drc-20375561
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Optical Instruments. (n.d.). Retrieved from Byju's:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://byjus.com/physics/optical-instruments/"
                  )
                }
              >
              https://byjus.com/physics/optical-instruments/
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Optical Instruments: Crash Course Physics #41. (2017, February 17). Retrieved from YouTube:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.youtube.com/watch?v=SddBPTcmqOk"
                  )
                }
              >
              https://www.youtube.com/watch?v=SddBPTcmqOk
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Optical Instruments. (2019, May 30). Retrieved from cK-12:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/19.9/primary/lesson/optical-instruments-ms-ps/"
                  )
                }
              >
              https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/19.9/primary/lesson/optical-instruments-ms-ps/
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Pabellon, J. L., Bentillo, E. N., Maramag, C. M., Nalda, N. F., Salvaleon, L. L., Cabacaag, M. M., & Ventura,
            M. R. (2003). Lesson Plans in Science IV (Physics).
            </Paragraph>
            
            <Paragraph style={{fontWeight:'bold'}}>
            Rauf, A. (2017, September 11). How to Make DIY Periscope with Step by Step instructions. Retrieved from Pakistan Science Club:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://paksc.org/pk/science-experiments/physics-experiments/simple-diy-periscope"
                  )
                }
              >
              https://paksc.org/pk/science-experiments/physics-experiments/simple-diy-periscope
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Vision and Optical Instruments. (n.d.). Retrieved from Lumen Learning:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://courses.lumenlearning.com/austincc-physics2/chapter/26-1-physics-of-the-eye/"
                  )
                }
              >
              https://courses.lumenlearning.com/austincc-physics2/chapter/26-1-physics-of-the-eye/
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
