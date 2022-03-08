import React, { useRef, useState } from 'react';
import { Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, List, Paragraph } from 'react-native-paper';
import { RootTabScreenProps } from '../../types';

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

export default function LessonOneScreen({ navigation }: RootTabScreenProps<'ModuleOne'>){
  return (
    <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollview}>
              <Card style={styles.card}>
                <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
                Wave Interference at the Particle Level
                </Paragraph>
                <Card.Content>
                <Paragraph style={{marginBottom:10}}> 
                  Interference occurs when two waves combine to generate a new wave with a larger, smaller, or
                  equal amplitude. Waves that are correlated or coherent with one other, either because they
                  emanate from the same source or have the same or nearly the same frequency, create
                  constructive and destructive interference.
                  </Paragraph>
                  <Paragraph style={{marginLeft:20,marginBottom:10}}>
                  • Interference occurs when two waves collide, resulting in the generation of a new wave.
                  </Paragraph>
                  <Paragraph style={{marginLeft:20,marginBottom:10}}>
                  • The behavior of the particles has an impact on wave interference.
                  </Paragraph>
                  <Paragraph style={{marginLeft:20,marginBottom:10}}>
                  • When a wave passes close to a particle, the particle rises and falls down in an oval pattern,
                  allowing the wave to go in one direction only.
                  </Paragraph>
                  <Paragraph style={{marginLeft:20,marginBottom:10}}>
                  •When a second wave is present, the particle's vibration is modified
                  </Paragraph>
                  <Paragraph style={{marginLeft:20,marginBottom:10}}>
                  •Because the velocity of the combined waves cancel each other out, when two (or more) waves
                  collide, the particle goes up and down rather than along an oval path.
                  </Paragraph>
                  <Paragraph style={{marginLeft:20,marginBottom:10}}>
                  • Because of the particle's mobility, the waves are able to pass through each other.
                  </Paragraph>
                  <Paragraph style={{marginLeft:20,marginBottom:10}}>
                  • Because the waves aren't changed, the quantity of energy remains constant.
                  </Paragraph>
                  <Paragraph style={{marginLeft:20,marginBottom:10}}>
                  • As a result, when two or more waves collide, the particle vibration maintains the direction and
                  energy of each wave. The wavelength, frequency, and amplitude of the waves do not change
                  after they have traveled through each other.
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson2/image1.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph style={styles.paragraph}>
                  Constructive and Destructive Wave Interference
                  </Paragraph>
                  <Paragraph style={styles.paragraph1}>
                  The principle of superposition states that:{"\n"}
                  "When two waves meet, the resulting amplitude is the SUM of the individual amplitudes."
                  </Paragraph>
                </Card.Content>
              </Card>

              <Card style={styles.card}>
                <Card.Content>
                  <Paragraph style={styles.paragraph}>
                  Constructive Interference
                  </Paragraph>
                  <Paragraph>
                  When two or more waves collide, constructive interference develops. The amplitude of the final
                  wave is bigger than the sum of the separate waves' amplitudes.
                  </Paragraph> 
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson2/image2.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph style={styles.paragraph}>
                  Destructive Wave Interference
                  </Paragraph>
                  <Paragraph>
                  When two or more waves collide, destructive interference develops. The generated wave has a
                  smaller amplitude than at least one of the initial amplitudes.
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson2/image3.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph style={styles.paragraph}>
                  Superstition
                  </Paragraph>
                  <Paragraph>
                  When two waves of the same sort collide, what happens? They interfere. This interference might
                  be beneficial or harmful, depending on the situation. Different frequencies can produce beats. To
                  make things easier, we'll Investigate equal-frequency and-amplitude interfering waves.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Principle of Superposition
                  </Paragraph>
                  <Paragraph>
                  When two or more waves are simultaneously present at a single point in space, the displacement
                  of the medium at that point is the sum of the displacements due to each individual wave.
                  </Paragraph>
                  <Paragraph style={styles.paragraph1}>
                  Dnet = D1 + D2 + ··· = ! i Di
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson2/image4.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                </Card.Content>
              </Card>
              <TouchableOpacity
                onPress={() => navigation.navigate('ModuleOneQuizOne')}>
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
    textAlign: 'center',
    fontWeight: "bold",
  },
  paragraph1: {
    textAlign: 'center',
  },
});


