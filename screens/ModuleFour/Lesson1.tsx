import AsyncStorage from "@react-native-async-storage/async-storage";
import { Video } from "expo-av";
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
  Button,
  TouchableOpacity,
} from "react-native";
import { Card, Paragraph, List } from "react-native-paper";
import { RootTabScreenProps } from "../../types";

const { width, height } = Dimensions.get("window");
const vw = width - 10;
const vh = height;

const { Title, Content, Cover } = Card;

export default function LessonOneScreen({
  navigation,
}: RootTabScreenProps<"ModuleOne">) {
  const video = React.useRef(null);

  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Card style={styles.card}>
          <Cover
            source={require("../../assets/images/module4/lesson1/image1.png")}
          />

          <Title
            title="The Index Of Refraction and Laws of Refraction"
            subtitle="Lesson 1"
          />
          <Content>
            <Paragraph>
              If you put something in the way of light, it doesn't change shape.
              It moves in a single direction. When light moves from one medium
              to another, how does it change? In other words, when light passes
              at an angle other than 90° with the boundary from one transparent
              medium to another, like air to water or air to glass, it changes
              direction. Light bends because its speed changes. This is called
              refraction. Speed of light changes when a ray bends. This changes
              the amount of bending.
            </Paragraph>
            <Paragraph>
              There is refraction because light moves at different speeds in
              different types of media. In the process of moving from one medium
              to another, it either speeds up or slows down. Its speed is very
              dependent on the optical density of the medium. When light moves
              from a less dense medium to a denser medium, it slows down a lot.
              In this case, light moves from air to water. If you move light
              from a dense medium to a less dense medium, it moves faster. Here,
              light moves from water to air.
            </Paragraph>
            <Paragraph>
              A ray is the direction of the path that a light takes. It is
              usually shown in diagrams as a straight line with an arrow that
              shows where it is going. In this case, the ray of light is called
              an incident ray. After the boundary, the ray of light is called
              the refracted ray because it is bent. When the angle of incidence
              I is known, it's the angle between the normal and what is being
              hit by it. The angle between the refracted ray and the normal is
              called the angle of refraction r. At the point where the rays and
              boundary line up, the normal is at right angles to the boundary.
            </Paragraph>
          </Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Watch Video Lesson Here" />
          <Video
            ref={video}
            useNativeControls
            style={{ height: 300 }}
            resizeMode="contain"
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            source={require("../../assets/videos/module4/lesson1.mp4")}
          />
          <View>
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
          onPress={() => navigation.navigate("ModuleFourQuizOne")}
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
