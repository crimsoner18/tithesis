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
import { Card, List, Paragraph } from "react-native-paper";
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
          <Card.Title title="Let's Dig Deeper" />
          <Card.Content>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module1/lesson1/image3.gif")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
              <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.google.com/search?q=pendulum&sxsrf=AOaemvIFCfSv9C8c9J9OwVhWrPUt6wGjhg:1639192121746&source=lnms&tbm=isch"
                  )
                }
              >
                https://www.google.com/search?q=pendulum&sxsrf=AOaemvIFCfSv9C8c9J9OwVhWrPUt6wGjhg:1639192121746&source=lnms&tbm=isch
              </Text>
            </Card>
            <Paragraph style={styles.paragraph}>
            Consider one of those bizarre bobble head dolls you've probably
            seen at baseball stadiums or curiosity shops to begin our
            exploration of vibrations and waves. A bobble head doll is made up
            of an enlarged reproduction of a person's head that is joined to a
            body and a stand by a spring. The big head bobbles when lightly
            tapped. Wiggles, vibrates, and oscillates the head. The head
            moves back and forth when pushed or otherwise disturbed. The
            back-and-forth isn't going to last forever. The vibrations gradually
            fade away, and the bobble head eventually stops bobbing and
            returns to its normal resting position. The bobble head doll is a
            good illustration of many of the principles of vibrational motion.
            Think about how you would describe the back and forth motion of
            the oversized head of a bobble head doll. What words would you
            use to describe such a motion? How does the motion of the bobble head change
            over time? How does the motion of one bobble head differ from the motion of
            another bobble head?
            </Paragraph>
          </Card.Content>
          <Card.Title title="" subtitle="Other Vibrating Systems" />
        </Card>
        <Card style={styles.card}>
          <Card.Title title="What Causes Objects to Vibrate?" />
          <Card.Content>
            <Paragraph style={styles.paragraph}>
              We can sense vibrations and know that others may be affected.
              However, we have no way of knowing whether what we feel will be
              detrimental. The mechanical oscillations of an object around an
              equilibrium point are known as vibration. The oscillations can be
              regular, like a pendulum's motion, or random, like the movement of
              a tire on a gravel road. The measurement of the overall "pressure
              waves" (vibration energy) created by the vibrating equipment or
              building is required for the investigation of the health impacts
              of vibration.
            </Paragraph>
          </Card.Content>
          <Card.Title title="" subtitle="What Causes Objects to Vibrate?" />
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Other Vibrating Systems" />
          <Card.Content>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module1/lesson1/image1.jpg")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
              <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.google.com/search?q=pendulum&sxsrf=AOaemvIFCfSv9C8c9J9OwVhWrPUt6wGjhg:1639192121746&source=lnms&tbm=isch"
                  )
                }
              >
                https://www.google.com/search?q=pendulum&sxsrf=AOaemvIFCfSv9C8c9J9OwVhWrPUt6wGjhg:1639192121746&source=lnms&tbm=isch
              </Text>
            </Card>
            <Paragraph style={styles.paragraph}>
              From its normal stationary posture, a vibrating object moves back
              and forth. When an object goes from one extreme position to the
              other and back again, it completes a vibration cycle. The
              frequency of a vibrating object is the number of cycles it
              completes in one second. A pendulum, for example, is a body that
              is suspended from a fixed point and swings back and forth under
              the action of gravity.
            </Paragraph>
            <Paragraph style={styles.paragraph}>
              High frequency objects, such as the piano string, have a
              comparatively short period (i.e., a low value for period).
              Periodic motion is a different quantity that can be used to
              quantitatively define an object's motion. The frequency is the
              number of complete cycles that occur in a given time period.
              Because the second is the usual metric unit of time, frequency is
              measured in cycles per second. The unit Hertz is similar to the
              unit cycles per second (abbreviated Hz). Heinrich Rudolf Hertz, a
              19th-century physicist who advanced our understanding of the
              electromagnetic theory of light waves, is commemorated with the
              unit Hertz.
            </Paragraph>
          </Card.Content>
          <Card.Title title="" subtitle="Other Vibrating Systems" />
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Hooke's Law" />
          <Card.Content>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module1/lesson1/image2.jpg")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
              <Text
                style={styles.sourceText}
                onPress={() =>
                  Linking.openURL(
                    "https://www.google.com/search?q=pendulum&sxsrf=AOaemvIFCfSv9C8c9J9OwVhWrPUt6wGjhg:1639192121746&source=lnms&tbm=isch"
                  )
                }
              >
                https://www.google.com/search?q=pendulum&sxsrf=AOaemvIFCfSv9C8c9J9OwVhWrPUt6wGjhg:1639192121746&source=lnms&tbm=isch
              </Text>
            </Card>
            <Paragraph>
              From its normal stationary posture, a vibrating object moves back
              and forth. When an object goes from one extreme position to the
              other and back again, it completes a vibration cycle. The
              frequency of a vibrating object is the number of cycles it
              completes in one second. A pendulum, for example, is a body that
              is suspended from a fixed point and swings back and forth under
              the action of gravity. High frequency objects, such as the piano
              string, have a comparatively short period (i.e., a low value for
              period). Periodic motion is a different quantity that can be used
              to quantitatively define an object's motion. The frequency is the
              number of complete cycles that occur in a given time period.
              Because the second is the usual metric unit of time, frequency is
              measured in cycles per second. The unit Hertz is similar to the
              unit cycles per second (abbreviated Hz). Heinrich Rudolf Hertz, a
              19th-century physicist who advanced our understanding of the
              electromagnetic theory of light waves, is commemorated with the
              unit Hertz.
            </Paragraph>
          </Card.Content>
          <Card.Title title="" subtitle="Hooke's Law" />
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Watch Video Lesson Here" />
          <Video
            ref={video}
            useNativeControls
            style={{ height: 300 }}
            resizeMode="contain"
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            source={require("../../assets/videos/module1/lesson1.mp4")}
          />
          <View style={styles.buttons}>
            <Button
              title={status.isPlaying ? "Pause" : "Play"}
              onPress={() =>
                status.isPlaying
                  ? video.current.pauseAsync()
                  : video.current.playAsync()
              }
            />
          </View>
        </Card>
        <TouchableOpacity
          onPress={() => navigation.navigate("ModuleOneQuizOne")}
        >
          <Card style={styles.card}>
            <List.Item
              title="Quiz"
              description="Take the quiz to learn more"
              left={(props) => <List.Icon {...props} icon="play-circle" />}
            />
          </Card>
        </TouchableOpacity>
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
