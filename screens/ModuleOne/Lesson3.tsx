import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Button, Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, List, Paragraph } from 'react-native-paper';
import { RootTabScreenProps } from '../../types';

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

export default function LessonThreeScreen({ navigation }: RootTabScreenProps<'ModuleOne'>) {
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
              <Card.Title title="The Anatomy of a Wave" />
              <Card style={styles.imageHolder}>
                <Card.Cover 
                source={require('../../assets/images/module1/lesson3/image1.png')}
                resizeMode={`contain`}
                style={{'backgroundColor': '#FFFFFF'}}/>
                <Text style={styles.sourceText}
                onPress={() => Linking.openURL('https://ds055uzetaobb.cloudfront.net/brioche/uploads/Y0eZtf7RXi-sinewave-3.png?width=400')}>
                  https://ds055uzetaobb.cloudfront.net/brioche/uploads/Y0eZtf7RXi-sinewave-3.png?width=400
                </Text>
              </Card>
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  A transverse wave is one in which the medium's particles are shifted in a
                  direction that is perpendicular to the energy transfer direction. When a rope is stretched
                  horizontally and the end is vibrated back and forth in a vertical direction, a transverse
                  wave is formed. If a snapshot of such a transverse wave could be obtained, the shape
                  of the rope would be frozen in time, as seen in the diagram above.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  The equilibrium or rest position of the string is shown by the dashed line drawn through
                  the middle of the picture. If there was no disturbance traveling through the string, it
                  would be in this position. The particles of the string begin to vibrate upwards and
                  downwards as a disturbance is injected into the string.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="The Anatomy of a Wave" />
            </Card>
            <Card style={styles.card}>
              <Card style={styles.imageHolder}>
                <Card.Cover 
                source={require('../../assets/images/module1/lesson3/image2.jpeg')}
                resizeMode={`contain`}
                style={{'backgroundColor': '#FFFFFF'}}/>
                <Text style={styles.sourceText}
                onPress={() => Linking.openURL('https://d39460vivz6red.cloudfront.net/questions/PH-BB-SELINA8-CH7-EXSA-Q3/images/1_1592316496365.jpeg')}>
                  https://d39460vivz6red.cloudfront.net/questions/PH-BB-SELINA8-CH7-EXSA-Q3/images/1_1592316496365.jpeg
                </Text>
              </Card>
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  A longitudinal wave is one in which the medium's particles are moved in a direction
                  parallel to the energy transfer direction.
                  When a slinky is stretched out
                  horizontally and the end coil is vibrated
                  back and forth in a horizontal manner,
                  a longitudinal wave is formed. The
                  shape of the slinky would be frozen in
                  time if a snapshot of such a
                  longitudinal wave could be taken.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="The Anatomy of a Wave" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="Frequency and period of a Wave" />
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  The nature of a wave was addressed in this unit's first lesson. A wave is formed
                  in a slinky by the periodic and recurring vibration of the first coil of the slinky, according
                  to that instruction. This vibration causes a disruption that travels through the slinky,
                  carrying energy from the beginning to the last coil. A pulse is introduced into a slinky by
                  a single back-and-forth oscillation of the first coil. The act of vibrating the first coil in a
                  back-and-forth motion in a periodic pattern, on the other hand, inserts a wave into the
                  slinky.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  Assume that a hand gripping the first coil of a slinky moves two complete cycles
                  back and forth in one second. The hand would move at a
                  pace of 2 cycles per second. The first coil, which is attached
                  to the hand, vibrates at a rate of two cycles per second. The
                  second coil, which is connected to the first, vibrates at a rate
                  of 2 cycles per second. The third coil would vibrate at a rate of
                  2 cycles per second because it was connected to the second coil. In fact, the Slinky’s
                  coils would vibrate at a rate of 2 cycles each second. The frequency of the wave is
                  defined as a rate of two cycles per second.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  When a wave passes through a medium, the frequency of the wave relates to
                  how often the particles of the medium vibrate. Frequency is a component of our
                  everyday vocabulary. For example, it's not uncommon to hear a question like "How
                  often do you mow the lawn during the summer months?" Of course, the question is
                  about how often the lawn is mowed, and the answer is usually something along the
                  lines of "1 time per week." In mathematical terms, frequency is the number of complete
                  vibrational cycles of a medium in a given amount of time.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="Frequency and period of a Wave" />
            </Card>
            <Card style={styles.card}>
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  The quantity frequency is often confused with the quantity period. Period refers to the
                  time that it takes to do something. When an event occurs repeatedly, then we say that
                  the event is periodic and refer to the time for the event to repeat itself as the period.
                  The period of a wave is the time for a particle on a medium to make one complete
                  vibrational cycle. Period, being a time, is measured in units of time such as seconds,
                  hours, days or years. The period of orbit for the Earth around the Sun is approximately
                  365 days; it takes 365 days for the Earth to complete a cycle. The period of a typical
                  class at a high school might be 55 minutes; every 55 minutes a class cycle begins (50
                  minutes for class and 5 minutes for passing time means that a class begins every 55
                  minutes). The period for the minute hand on a clock is 3600 seconds (60 minutes); it
                  takes the minute hand 3600 seconds to complete one cycle around the clock.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  Mathematically, the period is the reciprocal of the frequency and vice versa. In equation
                  form, this is expressed as follows.
                </Paragraph>
              </Card.Content>
              <Card style={styles.imageHolder}>
                <Card.Cover 
                source={require('../../assets/images/module1/lesson3/image3.jpg')}
                resizeMode={`contain`}
                style={{'backgroundColor': '#FFFFFF'}}/>
              </Card>
              <Card.Title title="" subtitle="Frequency and Period of a Wave" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="The Speed of a Wave" />
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  A wave is a disturbance that travels from one end of a medium to the other.
                  When watching an ocean wave move over the medium (ocean water), the peak of the
                  wave may be seen travelling from one spot to another over a period of time. The crest is
                  seen to cover a large area. The speed of an object relates to how quickly it moves and
                  is usually stated as the distance traveled divided by the journey time. The distance
                  traveled by a given point on the wave (such as a crest) in a given interval of time is the
                  speed in the case of a wave. In formula form:
                </Paragraph>
              </Card.Content>
              <Card style={styles.imageHolder}>
                <Card.Cover 
                source={require('../../assets/images/module1/lesson3/image4.jpg')}
                resizeMode={`contain`}
                style={{'backgroundColor': '#FFFFFF'}}/>
              </Card>
              <Card.Title title="" subtitle="The Speed of a Wave" />
            </Card>
            <Card style={styles.card}>
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  If the crest of an ocean wave moves 20 meters in 10 seconds, the wave's speed
                  is 2.0 meters per second. In contrast, if the crest of an ocean wave moves 25 meters in
                  10 seconds (the same amount of time), the wave's speed is 2.5 meters per second. In
                  the same length of time, the quicker wave travels a greater distance. Occasionally, a
                  wave will run into the end of one medium and the presence of another. A wave put into
                  one end of a slinky, for example, will travel through the slinky until it reaches the other
                  end and the presence of a second person's hand. Reflection is one of the behaviors that
                  waves exhibit towards the end of a medium. The person's hand will reflect or bounce
                  the wave. When a wave reflects, it remains within the medium and simply reverses its
                  travel direction. The disturbance can be observed traveling back to the originating end
                  of a slinky wave. A slinky wave that goes from the beginning to the end of the slinky has
                  doubled its distance. The wave has traveled a distance equal to double the length of the
                  slinky by reflecting back to its original place.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="The Speed of a Wave" />
            </Card>
            <Card style={styles.card}>
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  If the crest of an ocean wave moves 20 meters in 10 seconds, the wave's speed
                  is 2.0 meters per second. In contrast, if the crest of an ocean wave moves 25 meters in
                  10 seconds (the same amount of time), the wave's speed is 2.5 meters per second. In
                  the same length of time, the quicker wave travels a greater distance. Occasionally, a
                  wave will run into the end of one medium and the presence of another. A wave put into
                  one end of a slinky, for example, will travel through the slinky until it reaches the other
                  end and the presence of a second person's hand. Reflection is one of the behaviors that
                  waves exhibit towards the end of a medium. The person's hand will reflect or bounce
                  the wave. When a wave reflects, it remains within the medium and simply reverses its
                  travel direction. The disturbance can be observed traveling back to the originating end
                  of a slinky wave. A slinky wave that goes from the beginning to the end of the slinky has
                  doubled its distance. The wave has traveled a distance equal to double the length of the
                  slinky by reflecting back to its original place.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="The Speed of a Wave" />
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Self-Test 1" />
                <Card.Content>
                  <Paragraph>Answer the following word problems given below.</Paragraph>
                  <Text style={{marginBottom: 10}}>
                    1. Waves in a lake are 6 m apart and pass a person on a raft every 2 s. What is the
                    speed of the waves?
                  </Text>
                  <Text style={{marginBottom: 10}}>
                    2. A buoy bobs up and down in the ocean. The waves have a wavelength of 2.5 m,
                    and they pass the buoy at a speed of 4.0 m/s. What is the frequency of the
                    waves? How much time does it take for one wave to pass under the buoy?
                  </Text>
                  <Text style={{marginBottom: 10}}>
                    3. The musical note A above middle C has a frequency of 440 Hz. If the speed of
                    sound is known to be 350 m/s, what is the wavelength of this note?
                  </Text>
                </Card.Content>
                <Card.Title title="" subtitle="Self-Test 1" />
            </Card>



            <Card style={styles.card}>
              <Card.Title title="Watch Video Lesson Here" />
              <Video
                ref={video}
                useNativeControls
                style={{ height: 300 }}
                resizeMode="contain"
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                source={require("../../assets/videos/module1/lesson3.mp4")}
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
                onPress={() => navigation.navigate('ModuleOneQuizThree')}>
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
    backgroundColor: '#FFFFFF',
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

