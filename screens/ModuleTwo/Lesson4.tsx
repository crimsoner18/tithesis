import { Video } from 'expo-av';
import React from 'react';
import { Button, Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, Paragraph, List } from 'react-native-paper';
import { RootTabScreenProps } from '../../types';

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

export default function LessonFourScreen({ navigation }: RootTabScreenProps<'ModuleTwo'>) {
  const video = React.useRef(null);

  const [status, setStatus] = React.useState({});

  return (
    <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollview}>
              <Card style={styles.card}>
                <Card.Title title="Understanding Polarization and Malus law" />
                <Card.Content>
                  <Paragraph style={styles.paragraph}> 
                    Light is an electromagnetic wave, and the electric field of this wave oscillates
                    perpendicularly to the direction of propagation. Light is called unpolarized if the
                    direction of this electric field fluctuates randomly in time. Many common light sources
                    such as sunlight, halogen lighting, LED spotlights, and incandescent bulbs produce
                    unpolarized light. If the direction of the electric field of light is well defined, it is called
                    polarized light. The most common source of polarized light is a laser.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Understanding Polarization and Malus law" />
              </Card>
              <Card style={styles.card}>
                <Card.Title title="Three Types of Polarization" />
                <Card.Content>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module2/lesson4/image1.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF', 'marginBottom': 10}}/>
                    <Paragraph style={[styles.paragraph, {'margin': 10}]}>
                        1. Linear polarization is when the
                        electric field of light is confined to
                        a single plane along the direction
                        of propagation.
                  </Paragraph>
                  </Card>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module2/lesson4/image2.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF', 'marginBottom': 10}}/>
                    <Paragraph style={[styles.paragraph, {'margin': 10}]}>
                        2. Circular polarization: the electric field of the light consists of two linear components that
                        are perpendicular to each other, equal in amplitude, but have a phase difference of π/2
                        or 90°. The resulting electric field rotates in a circle around the direction of propagation
                        and, depending on the rotation direction, is called left- or right-hand circularly polarized
                        light.
                  </Paragraph>
                  </Card>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module2/lesson4/image3.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF', 'marginBottom': 10}}/>
                    <Paragraph style={[styles.paragraph, {'margin': 10}]}>
                        3. Elliptical polarization: the electric field of light describes an ellipse. This results from the
                        combination of two linear components with different amplitudes and/or a phase difference
                        that is not π/2. This is the most general description of polarized light, and circular and
                        linear polarized light can be viewed as special cases of elliptically polarized light.
                  </Paragraph>
                  </Card>
                </Card.Content>
                <Card.Title title="" subtitle="Three Types of Polarization" />
              </Card>
              <Card style={styles.card}>
                <Card.Content>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module2/lesson4/image4.jpg')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF', 'marginBottom': 10}}/>
                  </Card>
                  <Paragraph style={styles.paragraph}> 
                    Polarizers are key optical elements for controlling the polarization, transmitting the
                    desired polarization state while reflecting, absorbing, or deviating the rest.
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module2/lesson4/image5.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF', 'marginBottom': 10}}/>
                  </Card>
                  <Paragraph style={styles.paragraph}> 
                    Implementing polarization control can be
                    useful in a variety of imaging applications.
                    Polarizers are placed over a light source,
                    lens, or both, to eliminate glare from light
                    scattering, increase contrast, and eliminate
                    hot spots from reflective objects. This either brings out more intense color or contrast or
                    helps to better identify surface defects or other otherwise hidden structures. In the image
                    below, a linear polarizer was placed in front of the lens in a machine vision system to
                    remove obfuscating glare such that an electronic chip could be seen. The left image
                    (without polarizer) shows randomly polarized light scattering off of the many glass
                    surfaces between the object and the camera sensor. Much of the chip is obscured by
                    Fresnel light reflection of the unpolarized light. The image on the right (with polarizer)
                    shows the chip without glare obscuring any of the object details, allowing the chip to be
                    viewed, analyzed, and measured without obstruction.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Three Types of Polarization" />
              </Card>
              <Card style={styles.card}>
                <Card.Title title="Malus Law" />
                <Card.Content>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module2/lesson4/image6.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF', 'marginBottom': 10}}/>
                  </Card>
                  <Paragraph style={styles.paragraph}> 
                    Malus law is named after Étienne-Louis Malus, who in the year 1808 discovered that
                    natural incident light could be polarized when it was reflected by a glass surface. He used
                    calcite crystal for his experiment.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}> 
                    After observing the results, he further put forth a concept that natural light consisted of
                    the s- and p-polarization and that they were perpendicular to each other. Today, this law
                    is used to define the intrinsic connection between optics and electromagnetism as well as
                    demonstrate the transverse nature of electromagnetic waves.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Malus Law" />
              </Card>
              <Card style={styles.card}>
                <Card.Content>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module2/lesson4/image7.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF', 'marginBottom': 10}}/>
                  </Card>
                  <Paragraph style={styles.paragraph}> 
                    Malus proposed that the amplitude of the reflected beammust be A = A0 cosθ. However,
                    in order to obtain the intensity, Malus squared the amplitude relation so that the intensity
                    equation I(θ) of the reflected polarized light was I0 = I0cos2θ
                  </Paragraph>
                  <Paragraph style={styles.paragraph}> 
                    Malus law states that the intensity of plane-polarized light that passes through an analyzer
                    varies as the square of the cosine of the angle between the plane of the polarizer and the
                    transmission axes of the analyzer.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Malus Law" />
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
                onPress={() => navigation.navigate('ModuleTwoQuizFour')}>
                  <Card style={styles.card}>
                    <List.Item
                      title="Quiz"
                      description="Take the quiz to learn more"
                      left={props => <List.Icon {...props} icon="play-circle" />}
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

