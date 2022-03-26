import AsyncStorage from '@react-native-async-storage/async-storage';
import { Video } from 'expo-av';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, Paragraph, List } from 'react-native-paper';
import { RootTabScreenProps } from '../../types';

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

export default function LessonThreeScreen({ navigation }: RootTabScreenProps<'ModuleTwo'>) {
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
                <Card.Title title="Basic Properties of Light" />
                <Card.Content>
                  <Paragraph style={styles.paragraph}> 
                    One of the earliest proponents of the idea that light was a stream of particles
                    was Isaac Newton himself. Although Young’s findings and others seemed to
                    disprove that theory entirely, surprisingly other experimental evidence appeared at the
                    turn of the 20th. The century which could only be explained by the particle model of light!
                    The photoelectric effect, where light striking a metal dislodges electrons from the metal
                    atoms which can then flow as a current earned Einstein the Nobel prize for his explanation
                    in terms of photons.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                    A great deal of evidence of the properties of light suggests that light travels in straight
                    lines under a wide variety of circumstances. For example, a source of light like the Sun
                    (which at its great distance from us is nearly a “point source”) casts distinct shadows, and
                    the beam from a laser pointer appears to be a straight line, sometimes referred to as
                    rectilinear propagation. We infer the positions of objects in our environment by
                    assuming that light moves from the object to our eyes in straight-line paths, which we call
                    rays, that obey the laws of geometry, which helps us solve many problems like similar
                    triangles. Light has a constant speed in a given medium. In vacuum or air, light has a
                    speed of 3.00 x 10 8 m/s. In water, the speed of light is 2.26 x 10 8 m/s.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Basic Properties of Light" />
              </Card>
              <Card style={styles.card}>
                <Card.Title title="Speed of Light" />
                <Card.Content>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module2/lesson3/image1.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF', 'marginBottom': 10}}/>
                  </Card>
                  <Paragraph style={styles.paragraph}>
                    Scientists have been trying to study the speed of light since the ancient Greeks. In the
                    early 1600's Galileo supposedly attempted to quantify the speed of light, by using distant
                    lanterns with shutters, which an assistant opened at specified times. Galileo would try to
                    record how long it took light to get to him from across the field on which the experiment
                    was done. His only conclusion was that light speed was too fast to be measured by that
                    experiment.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                    The first successful determination of the speed of light began with an observation
                    by the Danish astronomer Ole Römer (1644–1710). Römer noted that the
                    period of one of Jupiter’s moons (Io) varied slightly depending on the relative
                    motion of the Earth and Jupiter. When the Earth was moving away from Jupiter the
                    period was slightly longer, and when Earth moved toward Jupiter the period
                    was slightly shorter. The Dutch scientist Christian Huygens (1629–1695) was intrigued by Römer’s result. Huygens reasoned that
                    if they measured when Io appeared from behind Jupiter for different positions of the Earth
                    relative to Jupiter, there should be a time difference.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                    In a vacuum (a container with no air), light travels at the speed of approximately 299 792
                    458 meters per second (m/s). This is known as the speed of light. It is the fastest that
                    anything in the universe can move! For comparison, the speed of sound is only
                    approximately 300 m/s. This is why during a storm you always see lightning before
                    hearing thunder.
                  </Paragraph>

                </Card.Content>
                <Card.Title title="" subtitle="Speed of Light" />
              </Card>

              <Card style={styles.card}>
                <Card.Title title="Sample Problems" />
                <Card.Content>
                  <Text style={{marginBottom: 10}}>
                    1. Calculate the wavelength of a photon that has a frequency of 2.5x10^12 Hz.
                  </Text>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module2/lesson3/image2.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF', 'marginBottom': 10}}/>
                  </Card>

                  <Text style={{marginBottom: 10}}>
                    2.What is the frequency of a photon that has a wavelength of 1.5x10^-8 m?
                  </Text>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module2/lesson3/image2.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF', 'marginBottom': 10}}/>
                  </Card>

                  <Text style={{marginBottom: 10}}>
                  3. What is the frequency of a photon that has a wavelength of 350nm?
                  </Text>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module2/lesson3/image3.png')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF', 'marginBottom': 10}}/>
                  </Card>

                </Card.Content>
                <Card.Title title="" subtitle="Sample Problems" />
              </Card>

              <Card style={styles.card}>
                <Card.Title title="Self Test 1" />
                <Card.Content>
                  <Text style={{marginBottom: 10}}>
                    1. Determine the wavelength of a photon that has a frequency of 95.0 MHz
                  </Text>
                  <Text style={{marginBottom: 10}}>
                    2. What is the frequency of electromagnetic radiation having a wavelength of 210 nm?
                  </Text>
                  
                  <Text style={{marginBottom: 10}}>
                    3. What is the wavelength (in m and nm) of light with a frequency of 6.75x10^14 Hz?
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
                  source={require("../../assets/videos/module2/lesson3.mp4")}
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
                onPress={() => navigation.navigate('ModuleTwoQuizThree')}>
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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});

