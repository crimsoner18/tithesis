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
          <Card.Title title="REFERENCE" />
          <Card.Content>
            <Paragraph style={{fontWeight:'bold'}}>
            CK-12 Physics. (2021). Retrieved from CK-12 flexbooks:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://flexbooks.ck12.org/cbook/ck-12-physics-flexbook-2.0/section/13.3/primary/lesson/color-ms-ps/"
                  )
                }
              >
              https://flexbooks.ck12.org/cbook/ck-12-physics-flexbook-2.0/section/13.3/primary/lesson/color-ms-ps/
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Edmund Optics Inc. (2021). Retrieved from Edmundoptics.com:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.edmundoptics.com/knowledge-center/application-notes/optics/introduction-to-polarization/"
                  )
                }
              >
              https://www.edmundoptics.com/knowledge-center/application-notes/optics/introduction-to-polarization/
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            History, A. M. (n.d.). American Museum of Natural History. Retrieved from
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.amnh.org/learn-teach/curriculum-collections/cosmic-horizons-book/ole-roemer-speed-of-light"
                  )
                }
              >
              https://www.amnh.org/learn-teach/curriculum-collections/cosmic-horizons-book/ole-roemer-speed-of-light
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            niranjan. (2010, July). Retrieved from India Study Channel:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.indiastudychannel.com/resources/102910-The-four-theories-of-Light.aspx"
                  )
                }
              >
              https://www.indiastudychannel.com/resources/102910-The-four-theories-of-Light.aspx
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Pedrotti. (2008). Pedrotti-LS_Basic-Geometrical-Optics_Fundamentals-of-Photonics_2008. Retrieved from
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://bme.unc.edu/wp-content/uploads/sites/917/2021/04/Pedrotti-LS_Basic-Geometrical-Optics_Fundamentals-of-Photonics_2008.pdf?fbclid=IwAR2ZlSFk2GZ2DqBW74rJbw2lqdBVK1PzPEvJhyCHl-bFxavONR_q6M_tMW8"
                  )
                }
              >
              https://bme.unc.edu/wp-content/uploads/sites/917/2021/04/Pedrotti-LS_Basic-Geometrical-Optics_Fundamentals-of-Photonics_2008.pdf?fbclid=IwAR2ZlSFk2GZ2DqBW74rJbw2lqdBVK1PzPEvJhyCHl-bFxavONR_q6M_tMW8
            </Text>
            <Paragraph style={{fontWeight:'bold'}}>
            Tutor, T. O. (2017). Retrieved from Youtube:
            </Paragraph>
            <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.youtube.com/watch?v=LgYMxH1LCdo&t=172s"
                  )
                }
              >
              https://www.youtube.com/watch?v=LgYMxH1LCdo&t=172s
            </Text>

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
