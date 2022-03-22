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

export default function LessonOneScreen({ navigation }: RootTabScreenProps<'ModuleTwo'>){
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
                <Card.Title title="Theories of Light" />
                <Card.Content>
                  <Paragraph style={styles.paragraph}> 
                    Many theories are proposed over the discovery of various effects of light.
                    Though light is in existence since the existence of the sun, not nearly all the
                    effects of light are discovered since the early 15th century A.D. Some of these theories
                    explain how light is and how light transmits.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                    A source of light continuously emits tiny elastic particles called corpuscles. These
                    particles or the corpuscles move with high velocity as that of light and get scattered in all
                    directions of light. This “Corpuscular Theory”, according to Isaac Newton (1643-1727),
                    says that the velocity of light changes with the change in density of the medium in which
                    it is used. This theory could explain three main light phenomena: reflection, refraction,
                    and rectilinear propagation of light. This theory also says that the color of light is
                    dependent on the size of the corpuscles which tells that light is a particle.
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                    <Card.Title title="" subtitle="Drawbacks:" />
                    <Card.Content>
                      <Text style={styles.paragraph}>
                        1. This theory could not explain the phenomena of interference, diffraction, and
                        polarization of light.
                      </Text>
                      <Text style={styles.paragraph}>
                        2. According to this theory the velocity of light in a denser medium is greater than the
                        velocity of light in a rarer medium but this is proved wrong later
                      </Text>
                      <Text style={styles.paragraph}>
                        3. This theory assumes that the source of light loses the mass as it emits corpuscles, but
                          no such determent in a mass of the source of light is detected.
                      </Text>
                      <Text style={styles.paragraph}>
                        4. This theory proposes that the velocity of the corpuscles increases as the temperature
                        of the source increases as the temperature increases experiments have proved that the
                        velocity of light is independent of temperature.
                      </Text>
                    </Card.Content>
                  </Card>
                </Card.Content>
                <Card.Title title="" subtitle="Theories of Light" />
              </Card>
              <Card style={styles.card}>
                <Card.Content>
                  <Paragraph style={styles.paragraph}> 
                    The Dutch scientist Christian Huygens (1629–1695), a contemporary of Newton,
                    proposed a wave theory of light that had much merit. Still useful today is a technique
                    Huygens developed for predicting the future position of a wavefront when an earlier
                    position is known. The particular of all medium particles vibrating in the same phase is
                    called a wavefront. Each point in a source of light sends out waves in all directions in a
                    hypothetical medium called ether. Ether was assumed to be a continuous medium, which
                    provides all space having very large elasticity, and extremely low density, which is
                    homogeneous and isotropic. This “Wave Theory” of Huygens, assumes that the light
                    waves are mechanical and transverse and it is successful in explaining the phenomena
                    of reflection, refraction, interference, and diffraction phenomena of light and tells us the
                    light is a wave.
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                    <Card.Title title="" subtitle="Drawbacks:" />
                    <Card.Content>
                      <Text style={styles.paragraph}>
                        1. There is no existence of a medium 'ether'
                      </Text>
                      <Text style={styles.paragraph}>
                        2. It falls to explain polarization, photoelectric effect, and Compton effect.
                      </Text>
                      <Text style={styles.paragraph}>
                        3. It fails to explain why light has no longitudinal component.
                      </Text>
                    </Card.Content>
                  </Card>
                </Card.Content>
                <Card.Title title="" subtitle="Theories of Light" />
              </Card>
              <Card style={styles.card}>
                <Card.Content>
                  <Paragraph style={styles.paragraph}> 
                    On the other hand, the “Electromagnetic Wave Theory” of James Clerk Maxwell (1831-
                    1879) showed that light was electromagnetic radiation. The electric and magnetic fields
                    in an electromagnetic wave are continuously varying concerning time and space. At any
                    instant electric and magnetic fields are perpendicular to each other and also
                    perpendicular to the direction of light. The electromagnetic wave is a transverse wave. At
                    every point in the wave at a given instant of time, the electric and magnetic field strengths
                    are equal. The velocity of propagation of electromagnetic waves depends on the electric
                    and magnetic properties of the medium.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                    The main drawback of this theory is it failed to explain the photoelectric effect and
                    Compton effect. The electromagnetic theory also failed in explaining the black body
                    radiation
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                    More recently, scientists found evidence to prove that light does consist of particles.
                    Einstein discovered that light shining on certain metals can make electron jumps out of
                    the metal in the photoelectric effect. Brighter light can make more electrons jump, but they
                    jump out at the same speed. However, different colors of light make electrons jump out 4
                    Key to answers on page 13 at different speeds. Scientists could explain these
                    observations if the light was made up of particles of energy called photons. Based on
                    this, the Quantum Theory was proposed by Max Planck in 1900 and advanced by Albert
                    Einstein in 1905. This theory assumes that light is radiated in discrete packets or bundles
                    of energy called photons, which also exhibit wave characteristics. Based on the scientists’
                    investigations of the different behaviors of light, it is now considered to have dual
                    characteristics – those of a wave and those of a particle. These behaviors can only be
                    observed under different conditions. The main drawback of this theory is it could not
                    explain how it is connected with the wave nature of light.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Theories of Light" />
              </Card>
              <Card style={styles.card}>
                <Card.Title title="Watch Video Lesson Here" />
                <Video
                  ref={video}
                  useNativeControls
                  style={{ height: 300 }}
                  resizeMode="contain"
                  onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                  source={require("../../assets/videos/module2/lesson1.mp4")}
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
                onPress={() => navigation.navigate('ModuleTwoQuizOne')}>
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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});

