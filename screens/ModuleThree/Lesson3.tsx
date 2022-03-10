import AsyncStorage from '@react-native-async-storage/async-storage';
<<<<<<< HEAD
import React from 'react';
import { Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
=======
import { Video } from 'expo-av';
import React from 'react';
import { Button, Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, List, Paragraph } from 'react-native-paper';
import { RootTabScreenProps } from '../../types';
>>>>>>> 3ce47137ca864ffd3f13ea24b2e6f43c479f3b74

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

<<<<<<< HEAD
export default function LessonOneScreen() {
  const setLessonAsRead = async (value: string) => {
    try {
      await AsyncStorage.setItem('@M3L2isRead', value)
    } catch (e) {
      console.log(e)
    }
  }

  setLessonAsRead('true');
=======
export default function LessonOneScreen({navigation}: RootTabScreenProps<"ModuleThree">) {
  const video = React.useRef(null);

  const [status, setStatus] = React.useState({});
>>>>>>> 3ce47137ca864ffd3f13ea24b2e6f43c479f3b74
  
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollview}>   
            <Card style={styles.card}>   
                <Card.Content>
                    <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module3/lesson3/image1.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph style={{fontWeight: "bold"}}>
                    Concave mirror
                    </Paragraph>
                    <Paragraph style={{marginLeft:40, marginBottom:30}}>
                    R is the radius of curvature of the mirror.{"\n"}
                    The point C is the curvature's center.{"\n"}
                    The point V is the center of the spherical segment.{"\n"}
                    The primary axis of the mirror is a line drawn from C to V.
                    </Paragraph> 
                    <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module3/lesson3/image2.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph style={{fontWeight: "bold"}}>
                    Concave Mirror Image
                    </Paragraph>
                    <Paragraph style={{marginLeft:40, marginBottom:30}}>
                    At O, a light source is positioned as a point.{"\n"}
                    Rays are emitted from the letter O.{"\n"}
                    The rays converge at point I after being reflected by the mirror.{"\n"}
                    The image point is the point I{"\n"}
                    The picture is genuine since light travels through the point.
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module3/lesson3/image3.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph>
                    The magnification of a picture may be determined using geometry.    
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module3/lesson3/image4.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph style={{marginLeft:40, marginBottom:30}}>
                    – h’ is negative when the image is inverted with respect to the object.{"\n"}
                    Geometry also depicts the distances between the image and the objects.
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module3/lesson3/image5.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph>
                    This is called the mirror equation.
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module3/lesson3/image6.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph>
                    The focus point is determined completely by the mirror's curvature, not by the object's
                    position. 
                    </Paragraph>
                    <Paragraph style={{textAlign:"center",fontSize:20}}>
                        f = R / 2
                    </Paragraph>
                    <Paragraph>
                    The mirror equation is expressed as
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module3/lesson3/image7.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module3/lesson3/image8.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph>
                    Five incident rays and their accompanying reflected rays are depicted in this figure. Each ray
                    contacts at the picture position before diverging to an observer's eye. Every viewer would see the same
                    picture at the same time, and every light beam would obey the rule of reflection. 
                    However, since only two rays are required to discover the junction point, only
                    two of these rays would be required to detect the image position. Two of the five incidence rays
                    illustrated correspond to the incident rays defined by our two concave mirror reflection rules. These will be
                    the two rays utilized for the rest of this course since they are the easiest and most
                    predictable pair to draw.
                    </Paragraph>
                    <Paragraph style={{fontWeight: "bold"}}>
                    Concave Mirror Image
                    </Paragraph>
                    <Paragraph>
                    A diverging mirror is another name for a convex mirror.
                    After reflection, the rays from any point on the object diverge as if they were coming
                    from behind the mirror.
                    Because it sits behind the mirror at the place where the reflected rays appear to
                    originate, the picture is imaginary.
                    A convex mirror's image is often upright, virtual, and smaller than the object.
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module3/lesson3/image9.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph>
                    For convex mirrors, the equations are the same as for concave mirrors.
                    </Paragraph>
                    <Paragraph style={{marginLeft:20, marginBottom:30}}>
                    – Need to use sign conventions{"\n"}
                    – Where the light is bright, a positive symbol is utilized.{"\n"}
                    – In front of the mirror (on the front side){"\n"}
                    – Behind the mirror is a negative sign.{"\n"}
                    – The back side{"\n"}
                    – The location where virtual pictures are created
                    </Paragraph>
                    <Paragraph style={{fontWeight: "bold"}}>
                    Ray Diagram and Image Formation
                    </Paragraph>
                    <Paragraph style={{marginLeft:20, marginBottom:30}}>
                    Ray 1 is drawn perpendicular to the principal axis and reflected back through the focal point, F.{"\n"}
                    Ray 2 is reflected parallel to the principal axis after passing through the focal point.{"\n"}
                    Ray 3 is reflected back on itself after passing through the center of curvature.
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module3/lesson3/image10.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph style={{fontWeight: "bold"}}>
                    Notes About the Rays
                    </Paragraph>
                    <Paragraph style={{marginLeft:20, marginBottom:30}}>
                    • The rays actually go in all directions from the object.{"\n"}
                    • The three rays were chosen for their ease of construction.{"\n"}
                    • The image point obtained by the ray diagram must agree with the value of q calculated from the mirror equation.
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module3/lesson3/image11.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph style={{marginLeft:20, marginBottom:30}}>
                    • The object is in front of a convex mirror.{"\n"}
                    • The image is virtual.{"\n"}
                    • The image is upright.{"\n"}
                    • The image is smaller than the object.
                    </Paragraph>
                    <Paragraph style={{fontWeight: "bold"}}>
                    Flat Refracting Surfaces
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module3/lesson3/image12.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph>
                    • The image formed by a flat refracting surface is on the
                    same side of the surface as the object.
                    </Paragraph>
                    <Paragraph style={{marginLeft:20, marginBottom:30}}>
                    – The image is virtual.{"\n"}
                    – The image forms between the object and the surface.{"\n"}
                    – The rays bend away from the normal since n1 {'>'} n2
                    </Paragraph>
                </Card.Content>
            </Card>
<<<<<<< HEAD
=======
            <Card style={styles.card}>
              <Card.Title title="Watch Video Lesson Here" />
              <Video
                ref={video}
                useNativeControls
                style={{ height: 300 }}
                resizeMode="contain"
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                source={require("../../assets/videos/module3/lesson3.mp4")}
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
              onPress={() => navigation.navigate('ModuleThreeQuizThree')}>
                <Card style={styles.card}>
                  <List.Item
                    title="Quiz"
                    description="Take the quiz to learn more"
                    left={props => <List.Icon {...props} icon="play-circle" />}
                  />
                </Card>
            </TouchableOpacity>
>>>>>>> 3ce47137ca864ffd3f13ea24b2e6f43c479f3b74
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
    fontWeight: 'bold',
  },
  parent: {
    height: vh,
    marginBottom: -50,
  },
  scrollview: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  card: {
    margin: 5,
    width: vw,
  },
  sourceText: {
    fontSize: 10,
    color: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageHolder: {
    margin: 5,
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 10,
  },
});

