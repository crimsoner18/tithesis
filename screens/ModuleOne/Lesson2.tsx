import AsyncStorage from '@react-native-async-storage/async-storage';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Button, Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, List, Paragraph } from 'react-native-paper';
import { View } from '../../components/Themed';
import navigation from '../../navigation';
import { RootTabScreenProps } from '../../types';

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

export default function LessonTwoScreen({ navigation }: RootTabScreenProps<'ModuleOne'>) {
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
              <Card.Title title="The Nature of a Wave" />
              <Card style={styles.imageHolder}>
                <Card.Cover 
                source={require('../../assets/images/module1/lesson2/image1.jpg')}
                resizeMode={`contain`}
                style={{'backgroundColor': '#FFFFFF'}}/>
                <Text style={styles.sourceText}
                onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/waves')}>
                  https://www.physicsclassroom.com/class/waves
                </Text>
              </Card>
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                We study wave physics because it gives us a unique perspective on the physical
                world that we aim to comprehend and describe as physics students. Before getting into
                a formal examination of the nature of waves, it's a good
                idea to think about the many encounters and exposures
                we've had with them. Where may we witness waves or
                motion that resembles waves? What previous experiences
                do we have that will aid our comprehension of wave
                physics? For many individuals, the image of a wave
                sweeping across the surface of an ocean, lake, pond, or
                other body of water comes to mind immediately when they
                think of waves. A disturbance, such as a rock thrown into
                the water, a duck shaking its tail in the water, or a boat
                moving through the water, causes the waves. The water
                wave has a crest and a trough and travels from one location to another. One crest is
                often followed by a second crest that is often followed by a third crest begin our formal
                discussion of the topic.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="The Nature of a Wave" />
            </Card>
            <Card style={styles.card}>
              <Card style={styles.imageHolder}>
                <Card.Cover 
                source={require('../../assets/images/module1/lesson2/image2.jpg')}
                resizeMode={`contain`}
                style={{'backgroundColor': '#FFFFFF'}}/>
                <Text style={styles.sourceText}
                onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/waves')}>
                  https://www.physicsclassroom.com/class/waves
                </Text>
              </Card>
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  When I think about waves, I usually think of a recent interaction at a baseball or
                  football stadium where the crowd was excitedly doing the wave. When done correctly, a
                  perceptible ripple is created that goes around the circular stadium or back and forth
                  across a section of bleachers. When a group of ecstatic supporters rises from their
                  seats, swings their arms high, and then sits back down, a visible wave occurs. Starting
                  in Section 1, the first row of supporters rises abruptly to start the wave; when they return
                  to their seats, row 2 begins its motion; as row 2 returns to its seat, row 3 begins its
                  motion. The process repeats again, with each successive row. The wave moves from
                  row to row, displacing each row member from his or her seat for a brief moment before
                  returning to it when the wave goes by. This mental image of a stadium wave will also
                  serve as a valuable background for discussing wave motion mechanics.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  The movement of a slinky or similar collection of coils is another example of
                  waves. When a slinky is stretched out from end to end, a wave can be created by
                  shaking the initial coil vertically or horizontally. After that, a wave will go from one end of
                  the slinky to the other. Each individual coil is seen to shift out of place and then return to
                  its original position as the wave goes along the slinky. The
                  coils are always vibrated in the same direction as the
                  previous coil. The other coils will continue to move back and
                  forth if the initial coil continues to vibrate. When observed
                  closely, the wave does not appear to stop when it reaches
                  the Slinky’s end; rather, it appears to bounce off the end and
                  return to where it began. A slinky wave is a great way to
                  visualize a wave and will be utilized in talks and
                  demonstrations throughout this lesson.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="The Nature of a Wave" />
            </Card>
              <Card style={styles.card}>
                <Card.Title title="What is a Wave?"/>
                <Card.Content>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module1/lesson2/image3.jpg')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    <Text style={styles.sourceText}
                    onPress={() => Linking.openURL('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.countryliving.com%2Flife%2Finspirational-stories%2Fg36808040%2Focean-quotes%2F&psig=AOvVaw3DspCCY0q3Eg7Ir7MJK53j&ust=1639278600727000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDTueni2vQCFQAAAAAdAAAAABAD')}>
                      https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.countryliving.com%2Flife%2Finspirational-stories%2Fg36808040%2Focean-quotes%2F&psig=AOvVaw3DspCCY0q3Eg7Ir7MJK53j&ust=1639278600727000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDTueni2vQCFQAAAAAdAAAAABAD
                    </Text>
                  </Card>
                  <Paragraph style={styles.paragraph}>
                    As a result, there are waves everywhere. But what
                    distinguishes a wave from another? What qualities,
                    properties, or behaviors do the phenomena we often
                    refer to as waves have in common? How can waves be
                    explained in a way that allows us to grasp their
                    fundamental nature and characteristics?
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                    A wave is defined as a disturbance that propagates
                    through a medium from one point to another. As an
                    example of a wave, consider a slinky wave. When the
                    slinky is stretched from end to end and is held at rest, it
                    assumes a natural position known as the equilibrium or
                    rest position. 
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="What is a Wave?"/>
              </Card>
              <Card style={styles.card}>
                <Card.Title title="What is a Medium?"/>
                <Card.Content>
                  <Paragraph style={styles.paragraph}> 
                    But what exactly does the term "medium" imply? The
                    wave is carried by a medium, which is a substance or
                    material. You've probably heard of the term "news media." The news media refers to the
                    many institutions (newspaper offices, television stations, radio stations, and so on) that
                    transmit information from one point to another in our society. The media disseminates
                    information. The news isn't made by the media, and the news isn't made by the media.
                    The news media is just the vehicle that transports information from its source to multiple
                    destinations. A wave medium, in a similar way, is the substance that transports a wave
                    (or disturbance) from one area to another. The wave medium is not a wave, and it does
                    not produce waves. The slinky coils are the medium through which the wave travels in
                    our slinky wave.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="What is a Medium?" />
              </Card>
              <Card style={styles.card}>
                <Card.Title title="A Wave Transports Energy and Not Matter"/>
                <Card.Content>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module1/lesson2/image4.jpg')} 
                    resizeMode={`contain`} 
                    style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph style={styles.paragraph}>
                    Individual medium particles are only temporarily
                    displaced from their rest position when a wave is
                    present in the medium (that is, when there is a
                    disturbance flowing through the medium). The
                    particles are always subjected to a force that
                    returns them to their original position. Each coil of
                    the slinky eventually returns to its original location
                    in a slinky wave. Each molecule of water in a
                    water wave eventually returns to its original place.
                    In a stadium wave, each bleacher supporter
                    eventually returns to their original spot. A wave is defined as the movement of a
                    disturbance without the movement of matter for this reason. As the pattern of the
                    disturbance moves from one spot to another, the particles of the medium (water
                    molecules, slinky coils, stadium spectators) merely oscillate about a given position.
                    Waves are thought to be a kind of energy transmission.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="A Wave Transports Energy and Not Matter"/>
              </Card>
              <Card style={styles.card}>
                <Card.Title title="Watch Video Lesson Here" />
                <Video
                  ref={video}
                  useNativeControls
                  style={{ height: 300 }}
                  resizeMode="contain"
                  onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                  source={require("../../assets/videos/module1/lesson2.mp4")}
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
                onPress={() => navigation.navigate('ModuleOneQuizTwo')}>
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

