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
}: RootTabScreenProps<"ModuleOne">) {
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
          <Cover
            source={require("../../assets/images/module4/lesson1/image1.png")}
            resizeMode={`contain`}
            style={{ backgroundColor: "#FFFFFF" }}
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
          <Card.Title title="Causes of Refraction" />
          <Content>
            <Paragraph>
              When a light ray moves into a medium with a different refractive index, it bends.
              This change in speed leads to a change in the direction. As an example, think about
              how air moves into water. The speed of light slows down as it moves in a different
              direction.
            </Paragraph>
          </Content>
          <Card.Title title="" subtitle="Causes of Refraction" />
        </Card>
        <Card style={styles.card}>
          <Card.Title title="What is Refractive Index?" />
          <Content>
            <Paragraph>
              It's called the index of refraction or the refractive index. It tells how quickly light
              moves through the material. The refractive is not a dimension. How does the refractive
              index work for a specific example? It's when you compare the speed of light in a
              vacuum, or C, to the speed of light in the medium (V). If the refractive index for a
              medium is represented by n, then it is given by the following formula:
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson1/image2.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
            <Paragraph>
              Refractive index of the medium causes light rays to shift or bend at the interface
              between two mediums. A higher-refractive-index media causes light to bend toward the
              normal; a lower-refractive-index medium causes it to bend away from the normal.
            </Paragraph>
            <Paragraph>
              The index of refraction is a way to measure how much light a material bends.
              This is the ratio of the speed of light in air to the speed of light in a certain type of
              material. In other words, because the speed of light in air is always faster than in any
              other material, the refraction index of a certain material is always greater than 1.The
              more light rays are bent, the higher the index of refraction.
            </Paragraph>
          </Content>
          <Card.Title title="" subtitle="What is Refractive Index?" />
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Refractive Index Problem Example" />
          <Content>
            <Paragraph>
            Compute the refractive index of the medium if the speed of light in a medium is 2×10^8m/s?
            </Paragraph>
            <Text style={{fontWeight:'bold', marginTop:20}}>Given:</Text>
            <Text style={{marginLeft:10}}>V (Speed of light in medium) = 2×10^8m/s</Text>
            <Text style={{marginLeft:10}}>C (Speed of light in vacuum) = 3×10^8m/s</Text>

            <Text style={{fontWeight:'bold', marginTop:20}}>Unknown:</Text>
            <Text style={{marginLeft:10}}>n = ?</Text>

            <Text style={{fontWeight:'bold', marginTop:20}}>Formula:</Text>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson1/image2.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>

            <Text style={{fontWeight:'bold', marginTop:20}}>Answer:</Text>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson1/image3.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
          </Content>
          <Card.Title title="" subtitle="Refractive Index Problem Example" />
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Two laws of refraction:" />
          <Content>
            <Paragraph>
              1. The normal line, incident are refracted rays all lie in the same plane.
            </Paragraph>
            <Paragraph>
              2. The ratio of sine of the angle of incident to the sine of the angle of refraction is
              constant and equals the ratio of the velocity v1 of light in the incident medium to
              the velocity v2 of light in the refracting medium. This is known
              <Text style={{fontWeight:'bold', fontStyle:'italic'}}> Snell's Law</Text>.
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson1/image4.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
            <Paragraph>
              Refractive index of the medium causes light rays to shift or bend at the interface
              between two mediums. A higher-refractive-index media causes light to bend toward the
              normal; a lower-refractive-index medium causes it to bend away from the normal.
            </Paragraph>
            <Paragraph>
              The index of refraction is a way to measure how much light a material bends.
              This is the ratio of the speed of light in air to the speed of light in a certain type of
              material. In other words, because the speed of light in air is always faster than in any
              other material, the refraction index of a certain material is always greater than 1.The
              more light rays are bent, the higher the index of refraction.
            </Paragraph>
          </Content>
          <Card.Title title="" subtitle="Two laws of refraction:" />
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Snell's Law Problem Example" />
          <Content>
            <Paragraph>
              A ray of light initially travelling through the air enters a material at an angle of 40∘ with
              respect to the line normal to the surface. The light is this observed to bend 
              <Text style={{fontStyle:'italic'}}> toward </Text> 
              the normal by 5∘. Calculate the index of refraction, n, of the material.
            </Paragraph>
            <Text style={{fontWeight:'bold', marginTop:20}}>Given:</Text>
            <Text style={{marginLeft:10}}>sinθ 1 = 40∘</Text>
            <Text style={{marginLeft:10}}>sinθ 2 = 5∘</Text>

            <Text style={{fontWeight:'bold', marginTop:20}}>Formula:</Text>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson1/image5.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>

            <Text style={{fontWeight:'bold', marginTop:20}}>Answer:</Text>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson1/image6.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
          </Content>
          <Card.Title title="" subtitle="Snell's Law Problem Example" />
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Causes of Refraction" />
          <Content>
            <Paragraph>
              When a light ray moves into a medium with a different refractive index, it bends.
              This change in speed leads to a change in the direction. As an example, think about
              how air moves into water. The speed of light slows down as it moves in a different
              direction.
            </Paragraph>
          </Content>
          <Card.Title title="" subtitle="Causes of Refraction" />
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Index of Refraction of some Materials" />
          <Content>
            <Paragraph>
              Medium 2 index is n in relation to medium 1, and vice versa. As light travels from
              one medium to another, the index of refraction of each medium is proportional to the
              speed of light in each medium. Index refraction tables are shown below.
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson1/image7.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
            <Paragraph>
              It's not uncommon for refraction to have a significant impact on how we perceive
              objects. In this case, the object appears to be deviated from its true position as seen
              through the glass. The object's light is reflected by the slab and enters the eye of the
              viewer. Observers presume that the object is located at that location because light
              travels in a straight path. As a result, the object looks to have been moved.
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover 
              source={require('../../assets/images/module4/lesson1/image8.png')}
              resizeMode={`contain`}
              style={{'backgroundColor': '#FFFFFF'}}/>
            </Card>
          </Content>
          <Card.Title title="" subtitle="Index of Refraction of some Materials" />
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Generalization:" />
          <Card.Content>
            <Text style={{fontStyle:'italic'}}>The law of refraction states that:</Text>
            <Text style={{marginLeft:10, marginBottom:10}}>
              1. The index of refraction n is equal to the sine of the incidence angle (sin I
              divided by the sine of the refraction angle (sin r) for the given two media.
            </Text>

            <Text style={{fontWeight:'bold', fontSize:20}}>Terminologies</Text>
            <Paragraph>
              <Text style={{fontWeight:'bold'}}>Optical Medium - </Text> 
              An optical medium is a light-transmitting medium.
            </Paragraph>
            <Paragraph>
              <Text style={{fontWeight:'bold'}}>Isotropic Medium - </Text> 
              An isotropic medium is one that has the same properties in all directions.
            </Paragraph>
            <Paragraph>
              <Text style={{fontWeight:'bold'}}>Incident ray - </Text> 
              The incident ray is the light ray that hits a reflecting or refractive surface.
            </Paragraph>
            <Paragraph>
              <Text style={{fontWeight:'bold'}}>Point of incidence - </Text> 
              The point of incidence is where the incident ray meets the reflecting or refracting surface.
            </Paragraph>
            <Paragraph>
              <Text style={{fontWeight:'bold'}}>Normal - </Text> 
              drawn to the surface at the point of incidence.
            </Paragraph>
            <Paragraph>
              <Text style={{fontWeight:'bold'}}>Angle of incidence - </Text> 
              The angle of incidence is formed by the incident ray's normal Angle of Refraction. 
              “i” stands for it.
            </Paragraph>
            <Paragraph>
              <Text style={{fontWeight:'bold'}}>Angle of Refraction - </Text> 
              The angle of refraction is the angle between the ray and the normal at the point of incidence. 
              “i” stands for it.
            </Paragraph>
            <Paragraph>
              <Text style={{fontWeight:'bold'}}>Angle of Deviation - </Text> 
              The angle of deviation is the angle between the incident and refracted rays.
            </Paragraph>
            <Paragraph>
              <Text style={{fontWeight:'bold'}}>Glancing of Angle - </Text> 
              formed by a ray hitting a refracting surface or interface.
            </Paragraph>
            
          </Card.Content>
          <Card.Title title="" subtitle="Generalization:" />
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Self Test 1" />
          <Card.Content>
            <Paragraph>Answer the following word problems given below.</Paragraph>
            <Text style={{marginBottom: 10}}>
              1. Light moves through air at 3x108 m/s. How fast does light move when it is in a medium
              with an absolute refractive index of 1.25? 

              <Text style={{color:'red'}}> Answer 2.4 m/s</Text>
            </Text>
            <Text style={{marginBottom: 10}}>
              2. A plastic block has a refractive index of 1.25 and a glass block is 1.5. What is the refractive
              index of light passing from plastic to glass?

              <Text style={{color:'red'}}> Answer 1.2</Text>
            </Text>
            <Text style={{marginBottom: 10}}>
              3. Light travels 3x108 m/s in air and 2x108 m/s in water. What is the medium's absolute
              refractive index?

              <Text style={{color:'red'}}> Answer 1.5</Text>
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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});
