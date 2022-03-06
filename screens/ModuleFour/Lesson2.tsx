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
import {
  Card,
  Paragraph,
  List,
  Subheading,
  Headline,
} from "react-native-paper";

const { width, height } = Dimensions.get("window");
const vw = width - 10;
const vh = height;

const { Title, Content, Cover } = Card;

export default function LessonTwoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Card style={styles.card}>
          <Title title="Lenses and Refraction of Light" subtitle="Lesson 1" />
          <Card>
            <Cover
              resizeMode="contain"
              source={require("../../assets/images/module4/lesson1/image1.png")}
            />
          </Card>
          <Content>
            <Headline>Refraction Of Lenses</Headline>
            <Paragraph>
              One of the properties of lenses is their ability to distort light
              in different ways depending on where they are located on the
              optical plane. It's not like a mirror, which has a single surface
              to refract from. Convex and concave lenses are the two types of
              lenses refraction lenses.
            </Paragraph>
            <Subheading>Convex Lenses</Subheading>
            <Paragraph>
              A convex lens that appears to be constructed of two convex mirrors
              that are opposite to each other and have a center axis that
              coincides. It is a lens that has at least one surface that curves
              outwards from the center of the lens. As a result, the rays of
              light are brought closer together as a result of the deviation of
              light inward.
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
});
