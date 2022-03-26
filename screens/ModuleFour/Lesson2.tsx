import AsyncStorage from "@react-native-async-storage/async-storage";
import { Video } from "expo-av";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
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
}: RootTabScreenProps<"ModuleFour">) {
  const video = React.useRef(null);

  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA']}
        style={styles.background}
      />
        <Card style={styles.card}>

          <Title
            title="Refraction of Lens"
            subtitle="Lesson 2"
          />
          <Content>
            <Paragraph>
              One of the properties of lenses is their ability to distort light in different ways depending
              on where they are located on the optical plane. It's not like a mirror, which has a single
              surface to refract from. Convex and concave lenses are the two types of lenses
              refraction lenses.
            </Paragraph>
            <Paragraph style={styles.paragraph}>
                1. Convex lens- A convex lens that appears to be constructed of two convex
                mirrors that are opposite to each other and have a center axis that coincides. It is
                a lens that has at least one surface that curves outwards from the center of the
                lens. As a result, the rays of light are brought closer together as a result of the
                deviation of light inward.
            </Paragraph>
          </Content>
        </Card>
          
        <Card style={styles.card}>
          <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
            Refraction rules for a converging lens
          </Paragraph>
        <Card style={styles.imageHolder}>
          <Card.Cover 
          source={require('../../assets/images/module4/lesson2/image1.png')}
          resizeMode={`contain`}
          style={{'backgroundColor': '#FFFFFF'}}/>
        </Card>
          <Content>
            <Paragraph style={{'marginBottom':10, 'marginLeft': 20}}>
              A. When an incident ray passes through a converging lens, it will be refracted
              through the lens and arrive at its destination through the focal point on its other
              side of the lens.           
            </Paragraph>
            <Paragraph style={{'marginBottom':10, 'marginLeft': 20}}>
              B. A ray incident at the focal point that travels through the lens on its route to the
              lens will refract through the lens and proceed parallel to the primary axis.
            </Paragraph>
            <Paragraph style={{'marginBottom':10, 'marginLeft': 20}}>
              C. After passing through the center of the lens, a ray that was incident on the lens
              will in effect continue traveling in the same direction as it did before entering the
              lens.
            </Paragraph>
          </Content>
        </Card>

        <Card style={styles.card}>
          <Content>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson2/image2.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
            <Paragraph style={styles.paragraph}>
              2. Concave lens - A concave lens is a lens that causes a parallel beam of light
              travelling through it to diverge or widen out as it passes through it.
            </Paragraph>
            <Paragraph style={{'marginBottom':10, 'marginLeft': 20}}>
              A. Any incoming ray moving parallel to the principal axis of a diverging lens will refract
              through the lens and proceed in the same direction as the focal point of the lens (i.e., in
              a direction such that its extension will pass through the focal point).        
            </Paragraph>
            <Paragraph style={{'marginBottom':10, 'marginLeft': 20}}>
              B. A ray incident on the lens and going towards the focal point will refract through the lens and 
              travel parallel to the primary axis.
            </Paragraph>
            <Paragraph style={{'marginBottom':10, 'marginLeft': 20}}>
              C. After passing through the center of the lens, a ray that was incident on the lens will in effect
              continue traveling in the same direction as it did before entering the lens.
            </Paragraph>
          </Content>
        </Card>

        <Card style={styles.card}>

          <Title
            title="The Lens Equation"
            subtitle="Lesson 2"
          />
          <Content>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson2/image3.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
            <Paragraph>
            Where u is the distance of the object from the lens; v is the distance of the image from the lens and f is
            the focal length, i.e., the distance of the focus from the lens.
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson2/image4.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
          </Content>
        </Card>

        <Card style={styles.card}>
          <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
            Example 1:
          </Paragraph>
          <Paragraph style={{marginTop:20, marginLeft:40}}>
          1. What image is produced by placing an object 9 cm away from a convex lens of
          focal length 3 cm?
          </Paragraph>
          <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:60}}>
            Given:
          </Paragraph>
          <Paragraph style={{marginLeft:80}}>
          u = 9 cm{"\n"}
          f = 3 cm{"\n"}
          v =?
          </Paragraph>
          <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:60}}>
            Formula:
          </Paragraph>
          <Content>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson2/image5.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
            <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:60}}>
            Answer:
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson2/image6.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
          </Content>
        </Card>

        <Card style={styles.card}>
          <Paragraph style={{marginTop:20, marginLeft:40}}>
          2. What image is produced by placing an object 30 cm away from a convex lens of
          focal length 15 cm?
          </Paragraph>
          <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:60}}>
            Given:
          </Paragraph>
          <Paragraph style={{marginLeft:80}}>
          u = 30 cm{"\n"}
          f = 15 cm{"\n"}
          v =?
          </Paragraph>
          <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:60}}>
            Formula:
          </Paragraph>
          <Content>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson2/image5.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
            <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:60}}>
            Answer:
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson2/image7.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
          </Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Self Test 1" />
          <Card.Content>
            <Paragraph>Answer the following word problems given below.</Paragraph>
            <Text style={{marginBottom: 10}}>
              1. What image is produced by placing an object 4 cm away from a convex lens of focal length 8 cm?
            </Text>
            <Text style={{marginBottom: 10}}>
              2. If an object is 12 cm away from a convex lens of focal length 4 cm where will the image be?
            </Text>
          </Card.Content>
          <Card.Title title="" subtitle="Self Test 1" />
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Watch Video Lesson Here" />
          <Video
            ref={video}
            useNativeControls
            style={{ height: 300 }}
            resizeMode="contain"
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            source={require("../../assets/videos/module4/lesson2.mp4")}
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
          onPress={() => navigation.navigate("ModuleFourQuizTwo")}
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
    marginLeft: 10,
  },
  coverImage: {
    backgroundColor: "#FFFFFF",
    margin: 10,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});
