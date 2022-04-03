import AsyncStorage from '@react-native-async-storage/async-storage';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Button, Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, List, Paragraph } from 'react-native-paper';
import { RootTabScreenProps } from '../../types';

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

export default function LessonFourScreen({ navigation }: RootTabScreenProps<'ModuleOne'>) {
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
              <Card.Title title="Behavior of Waves" />
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  Boundary behavior describes how a wave (or pulse) behaves as it reaches the
                  end of a medium. When one medium finishes and another begins, the interface
                  between the two is known as the boundary, and the behavior of a wave at that border is
                  known as boundary behavior. The types of questions stated above are the types of
                  questions we try to address when studying wave boundary behavior.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="Behavior of Waves" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="Fixed End Reflection" />
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  Consider an elastic rope that has been stretched from end to end. To inject
                  pulses into the medium, one end will be securely attached to a pole on a lab bench,
                  while the other end will be held in the hand. The last particle of the rope will be unable
                  to move when a disturbance reaches it because the right end of the rope is attached to
                  a pole (which is attached to a lab bench) (which is attached to the floor that is attached
                  to the building that is attached to the Earth). A fixed end refers to the end of the rope
                </Paragraph>
                <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module1/lesson4/image1.jpg')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  <Text style={styles.sourceText}
                  onPress={() => Linking.openURL('https://o.quizlet.com/exvP..VLzR8krVgkn03J6Q.jpg')}>
                    https://o.quizlet.com/exvP..VLzR8krVgkn03J6Q.jpg
                  </Text>
                </Card>
                <Text style={{fontWeight:'bold'}}>that is not moving.</Text>
                <Paragraph style={styles.paragraph}>
                  If a pulse is introduced at the rope's left end, it will flow through the rope to the
                  medium's right end. This pulse is known as the incident pulse because it is incident on
                  (or near) the pole's boundary. Two things happen when the incident pulse hits the
                  boundary:
                </Paragraph>
                <Text style={{marginLeft:20, marginRight:20}}>
                  - Some of the energy carried by the pulse is reflected and returns to the rope's left
                  end. The reflected pulse is the disturbance that returns to the left after bouncing
                  off the pole.
                </Text>
                <Text style={{marginLeft:20, marginRight:20, marginBottom:10}}>
                  - The pole vibrates because a portion of the energy carried by the pulse is
                  communicated to it.
                </Text>
                <Paragraph style={styles.paragraph}>
                  Because the pole's vibrations aren't visible, the energy transmitted to it isn't usually
                  discussed. The reflected pulse will be the topic of discussion. What features and traits
                  could be used to define its motion?
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  There are a few things to notice while looking at the reflected pulse off the fixed end.
                  The reflected pulse is first inverted. When an upward displaced pulse collides with a
                  fixed end boundary, it reflects and returns as a downward displaced pulse. A downward
                  displaced pulse will also reflect and return as an upward displaced pulse if it strikes a
                  fixed end boundary.
                </Paragraph>
                <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module1/lesson4/image2.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  <Text style={styles.sourceText}
                  onPress={() => Linking.openURL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxoCXgt2hfumbgUrZmfkWcHKRGALMjFWAkg&usqp=CAU')}>
                    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxoCXgt2hfumbgUrZmfkWcHKRGALMjFWAkg&usqp=CAU
                  </Text>
                </Card>
                <Paragraph style={styles.paragraph}>
                  Returning to our understanding of the nature of a mechanical wave, the inversion
                  of the reflected pulse can be explained. The last particle of medium A receives an
                  upward displacement when a crest reaches the end of the medium ("medium A"). On
                  the other side of the boundary, this particle is connected to the initial particle of the
                  second medium ("medium B"). The first particle of medium B pulls downward on the last
                  particle of medium A as the last particle of medium a pulls upward on the first particle of
                  medium B. This is simply Newton's third action-reaction law.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  There is an equal and opposite reaction to every action. Due to the massive
                  mass of the pole and the lab bench to which it is mounted, the upward force on the
                  initial particle of medium B has little influence on this particle. The upward displacement
                  becomes a downward displacement as a result of the downward pressure on the last
                  particle of medium A (a force that is then communicated to the other particles). As a
                  result, the upwardly displaced incident pulse becomes a downwardly displaced reflected
                  pulse. It's worth noting that the rope becomes inverted when it interacts with the wall
                  because of the weight of the pole and lab bench in relation to the rope. When two media
                  interact by exerting pushes and pulls on each other, the interaction is won by the largest
                  medium. The medium is the same as in arm wrestling.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  Other notable characteristics of the reflected pulse include:
                </Paragraph>
                  <Text style={{marginLeft:20, marginRight:20}}>
                    - The speed of the reflected pulse is the same as the speed of the incident pulse.
                  </Text>
                  <Text style={{marginLeft:20, marginRight:20, marginBottom:10, marginTop:10}}>
                    - The wavelength of the reflected pulse is the same as the wavelength of the incident
                      pulse.
                  </Text>
                  <Text style={{marginLeft:20, marginRight:20, marginBottom:10, marginTop:10}}>
                    - The amplitude of the reflected pulse is less than the amplitude of the incident pulse.
                  </Text>
                <Paragraph style={styles.paragraph}>
                  This sequence photography photo shows an upward displaced pulse traveling from the
                  left end of a wave machine towards the right end. The right end is held tightly; it is a
                  fixed end. The wave reflects off this fixed end and returns as a downward displaced
                  pulse. Reflection off a fixed end results in 
                  <Text style={{fontStyle:'italic'}}>inversion</Text>.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="Fixed End Reflection" />
            </Card>

            <Card style={styles.card}>
              <Card.Title title="Free End Reflection" />
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  Consider what would happen if the rope's end could move freely. Assume it is
                  attached to a ring that is loosely fitted around the lab pole, rather than being solidly
                  fastened to the pole. The last particle of the rope will be able to move if a disturbance
                  reaches it because the right end of the rope is no longer fastened to the pole. The free
                  end of the rope is what it's called.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  If a pulse is introduced at the left end of the rope, it will travel through the rope
                  and into the medium's right end. The last particle of the rope can no longer interact with
                  the first particle of the pole when the incident pulse reaches the end of the medium. The
                  rope and pole will glide past each other because they are no longer joined and
                  interconnected. When a crest approaches the end of the rope, the last particle of the
                  rope experiences the same upward displacement; the difference is that there is no
                  neighboring particle to force downward on the last particle of the rope, causing it to
                  invert. As a result, the reflected pulse does not invert.
                </Paragraph>
                <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module1/lesson4/image3.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  <Text style={styles.sourceText}
                  onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/waves')}>
                    https://www.physicsclassroom.com/class/waves
                  </Text>
                </Card>
              </Card.Content>
              <Card.Title title="" subtitle="Free End Reflection" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="Transmission of a Pulse across a Boundary from Less to More Dense" />
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  Consider a thin rope tied to a large rope, with someone holding each rope at
                  different ends. Assume that the individual who is holding the thin rope's end introduces
                  a pulse. If this is the case, an incident pulse will flow from the less dense medium (the
                  thin rope) to the denser medium's boundary (the thick rope). Consider a thin rope tied to
                  a large rope, with someone holding each rope at different ends. Assume that the
                  individual who is holding the thin rope's end introduces a pulse. If this is the case, an
                  incident pulse will flow from the less dense medium (the thin rope) to the denser
                  medium's boundary (the thick rope).
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  Upon reaching the boundary, the usual two behaviors will occur.
                </Paragraph>
                <Text style={{marginLeft:20, marginRight:20}}>
                  - A portion of the energy carried by the incident pulse is reflected and returns towards
                  the left end of the thin rope. The disturbance that returns to the left after bouncing off
                  the boundary is known as the reflected pulse.
                </Text>
                <Text style={{marginLeft:20, marginRight:20, marginBottom:10, marginTop:10}}>
                  - A portion of the energy carried by the incident pulse is transmitted into the thick
                  rope. The disturbance that continues moving to the right is known as
                  the transmitted pulse.
                </Text>
                <Paragraph style={styles.paragraph}>
                  In instances like this, the reflected pulse will be found to be inverted. The first
                  particle of the denser medium overpowers the lower mass of the last particle of the less
                  dense medium during the interaction between the two media at the border. An upward
                  displaced pulse becomes a downward displaced pulse as a result of this. Prior to the
                  contact, the denser medium was still at rest. When the incident pulse reaches the
                  border, it pulls the first particle of this medium upward. An upward pull can only
                  generate an upward displacement because the more dense material was initially at rest.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  For this reason, the transmitted pulse is not inverted. In fact, transmitted pulses can
                  never be inverted. Since the particles in this medium are originally at rest, any change in
                  their state of motion would be in the same direction as the displacement of the particles
                  of the incident pulse.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  The before and after snapshots of the two media are shown in the diagram below.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  Comparisons can also be made between the characteristics of the transmitted pulse
                  and those of the reflected pulse. Once more there are several noteworthy
                  characteristics.
                </Paragraph>
                <Text style={{marginLeft:20, marginRight:20}}>
                  - The transmitted pulse (in the denser medium) is traveling slower than the reflected
                  pulse (in the less dense medium).
                </Text>
                <Text style={{marginLeft:20, marginRight:20, marginBottom:10, marginTop:10}}>
                  - The transmitted pulse (in the denser medium) has a smaller wavelength than the
                  reflected pulse (in the less dense medium).
                </Text>
                <Text style={{marginLeft:20, marginRight:20, marginBottom:10, marginTop:10}}>
                  - The speed and the wavelength of the reflected pulse are the same as the speed and
                  the wavelength of the incident pulse.
                </Text>
              </Card.Content>
              <Card.Title title="" subtitle="Transmission of a Pulse across a Boundary from Less to More Dense" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="Reflection, Refraction, and Diffraction" />
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  It was addressed how waves going along a rope from a denser medium to a less
                  dense medium (and vice versa) behave. When the wave hits the end of the medium, it
                  does not just stop. When a wave reaches the end of the medium, it will exhibit various
                  behaviors. There will be some transmission into the new medium and some reflection
                  off the border. But what if the wave is going through a two-dimensional material, such
                  as ocean water? What if the wave is going through a three-dimensional medium, such
                  as air, as a sound wave or a light wave? What kinds of behaviors may such two- and
                  three-dimensional waves exhibit?
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  A ripple tank is commonly used to examine two-dimensional waves. A ripple tank
                  is a huge glass-bottomed water tank used to research how water ripples behave. A light
                  shines down from above on the water, illuminating a white sheet of paper placed right
                  below the tank. As the water goes through the tank, a portion of the light is absorbed. A
                  water crest will absorb more light than a water trough. Wave crests are represented by
                  the bright spots, while wave troughs are represented by the dark dots. The dark and
                  bright areas in the ripple tank move along with the water waves. The behavior of the
                  waves can be examined by examining the movement of the dark and bright spots on the
                  sheet of paper as they hit obstacles along their course. In a Physics class, ripple tank
                  demonstrations are typical.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="Reflection, Refraction, and Diffraction" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="Reflection of Waves" />
              <Card.Content>
                <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module1/lesson4/image4.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  <Text style={styles.sourceText}
                  onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/waves')}>
                    https://www.physicsclassroom.com/class/waves
                  </Text>
                </Card>
                <Paragraph style={styles.paragraph}> 
                  A source of straight waves is created when a linear object attached to an
                  oscillator bobs back and forth within the water. The crests and troughs of these straight
                  waves alternate. The crests are the black lines stretching over the paper, and the
                  troughs are the light lines, as seen on the sheet of paper beneath the tank. These
                  waves will flow through the water until they come into an impediment, such as the tank's
                  wall or a floating object.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  A sequence of straight waves approach a long barrier extending at an angle
                  across the water tank, as shown in the diagram to the right. The blue arrow indicates
                  the direction in which these wave fronts (straight-line crests) are flowing through the
                  water. A ray is a blue arrow that is drawn perpendicular to the wave fronts. These
                  waves bounce off the water and head in a different direction as they hit the barrier in the
                  ocean. The reflected wave fronts and reflected beam are depicted in the diagram below.
                  One general law of reflection holds true regardless of the angle at which the wave fronts
                  approach the barrier: the waves will always reflect in such a way that the angle at which
                  they approach the barrier equals the angle at which they reflect off the barrier. The law
                  of reflection is what it's called.
                </Paragraph>
                <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module1/lesson4/image5.gif')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  <Text style={styles.sourceText}
                  onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/waves')}>
                    https://www.physicsclassroom.com/class/waves
                  </Text>
                </Card>
                <Paragraph style={styles.paragraph}>
                  The talk above is about how waves are reflected off of straight surfaces. But what
                  if the surface is curved, possibly in a parabola shape? What generalizations may be
                  made about how water waves are reflected off parabolic surfaces? Assume a rubber
                  tube in the shape of a parabola is inserted into the water. In the ripple tank, such a
                  parabolic barrier is depicted in the diagram to the right. A number of wave fronts are
                  approaching the barrier, therefore the ray is drawn for them. The water waves will
                  change direction and head towards a spot after reflecting off the parabolic barrier. The
                  graphic below illustrates this. It's as if all of the energy carried by the waves has
                  converged at a single spot, which is called the focal point.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="Reflection of Waves" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="Refraction of Waves" />
              <Card.Content>
                <Paragraph style={styles.paragraph}>
                  When waves bounce off a barrier, they change direction. This is called reflection.
                </Paragraph>
                <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module1/lesson4/image6.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  <Text style={styles.sourceText}
                  onPress={() => Linking.openURL('https://study.com/academy/lesson/refracted-wave-definition-lesson-quiz.html')}>
                    https://study.com/academy/lesson/refracted-wave-definition-lesson-quiz.html
                  </Text>
                </Card>
                <Paragraph style={styles.paragraph}> 
                  Refraction occurs when waves change direction as they move through one
                  medium and into another. Refraction, or the bending of a wave's path, is accompanied
                  by a change in the wave's speed and wavelength. If a ripple tank is divided into a deep
                  and shallow area, this boundary behavior of water waves can be observed. If you put a
                  pane of glass in the bottom of the tank, one portion of the tank will be deep and the
                  other will be shallow. From the deep end to the shallow end, waves refract (bend),
                  decrease wavelength (wave fronts get closer together), and slow down (they take a
                  longer time to travel the same distance). When waves travel from deep to shallow
                  water, they bend in a way that makes them appear to be traveling more perpendicular to
                  the surface. The waves bend in the opposite direction when moving from shallow to
                  deep water.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="Refraction of Waves" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="Diffraction of Waves" />
              <Card.Content>
                <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module1/lesson4/image7.jpg')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  <Text style={styles.sourceText}
                  onPress={() => Linking.openURL('https://image.shutterstock.com/shutterstock/photos/387644992/display_1500/stock-photo-waves-diffraction-and-interference-387644992.jpg')}>
                    https://image.shutterstock.com/shutterstock/photos/387644992/display_1500/stock-photo-waves-diffraction-and-interference-387644992.jpg
                  </Text>
                </Card>
                <Paragraph style={styles.paragraph}> 
                  When waves bounce off a barrier, they change direction; refraction of waves
                  occurs when waves change direction as they move from one medium to another; and
                  diffraction occurs when waves change direction as they pass through an opening or
                  around a barrier in their path. Waves of water can go around curves, around barriers,
                  and through openings. Longer-wavelength water waves demonstrate this skill the most.
                  Place small barriers and obstacles in a ripple tank and observe the path of the water
                  waves as they encounter the obstacles to illustrate diffraction. The waves can be seen
                  passing around the barrier and into the areas behind it, causing the water behind it to be
                  disturbed. The amount of diffraction (the sharpness of the bending) increases as the
                  wavelength gets longer and decreases as the wavelength gets shorter.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  Wave boundary characteristics such as reflection, refraction, and diffraction are
                  all related to the bending of a wave's path. When the media is a two- or three-
                  dimensional medium, the bending of the path is an observable behavior. When light
                  bounces off a barrier, it is called reflection. The rule of reflection governs the reflection
                  of waves off straight boundaries. The convergence of waves at a focal point is caused
                  by reflection of waves off parabolic obstacles. When waves travel from one medium to
                  another, they refract, which causes them to alter direction. A wavelength and speed
                  change are always present when refraction occurs. The bending of waves around
                  obstacles and openings is known as diffraction. With increasing wavelength, the amount
                  of diffraction rises.
                </Paragraph>  
              </Card.Content>
              <Card.Title title="" subtitle="Diffraction of Waves" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="Interference of Waves" />
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  When two waves collide while traveling through the same medium, what
                  happens? What effect would the waves colliding have on the medium's appearance?
                  Will the two waves collide and bounce off one other (like two billiard balls would) or will
                  they travel through each other? Wave interference is a topic that deals with the collision
                  of two or more waves traveling through the same medium.
                </Paragraph>  
              </Card.Content>
              <Card.Title title="" subtitle="Interference of Waves" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="What is Interference?" />
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  When two waves collide while traveling across the same medium, this is known
                  as wave interference. The medium takes on a shape as a result of the net effect of the
                  two distinct waves on the medium's particles due to wave interference. Consider two
                  pulses of equal amplitude flowing in opposite directions along the same medium to
                  begin our investigation of wave interference. Assume that each wave is 1 unit higher at
                  its crest and has the shape of a sine wave. As the sine pulses become closer to each
                  other, there will come a point where they are fully overlapped. The resulting shape of
                  the medium at that point would be an upward displaced sine pulse with a 2 unit
                  amplitude. The diagrams below show snapshots of the medium before and during
                  interference for two different pulses.
                </Paragraph>
                <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module1/lesson4/image8.gif')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  <Text style={styles.sourceText}
                  onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/waves')}>
                  https://www.physicsclassroom.com/class/waves
                  </Text>
                </Card>
              </Card.Content>
              <Card.Title title="" subtitle="What is Interference?" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="Constructive Interference" />
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  Constructive interference is a term used to describe this form of interference.
                  Constructive interference is a type of interference that happens when two interfering
                  waves have the same displacement in the same direction at any point along the
                  medium. Both waves have an upward displacement in this scenario, hence the medium
                  has an upward displacement greater than the two interfering pulses' displacement. At
                  every point where the two interfering waves are shifted upward, constructive
                  interference is detected. When both conflicting waves are shifted downward, however, it
                  is noticed.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="Constructive Interference" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="Destructive Interference" />
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  Destructive interference is a type of interference that happens when the two
                  interfering waves have a displacement in the opposite direction at any point along the
                  medium. Destructive interference occurs when a sine pulse with a maximum
                  displacement of +1 unit meets a sine pulse with a maximum displacement of -1 unit.
                  The graphic below illustrates this.
                </Paragraph>
                <Paragraph style={styles.paragraph}> 
                  The interfering pulses in the diagram above have the same maximum
                  displacement but travel in different directions. When the two pulses are totally
                  overlapped, the effect is that they utterly destroy each other. There is no subsequent
                  displacement of the medium's particles at the instant of total overlap. This state of
                  "destruction" is not permanent. In truth, claiming that the two waves annihilate each
                  other is only half accurate. When the two pulses are overlapped, the effect of one of the
                  pulses on the movement of a specific medium particle is annihilated or negated by the
                  influence of the other pulse.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="Destructive Interference" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="The Principle of Superposition" />
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  The task of determining the shape of the resultant demands that the principle of
                  superposition is applied. The principle of superposition is sometimes stated as
                  follows:
                </Paragraph>
                <Paragraph style={[styles.paragraph, {marginLeft:10, marginRight:10}]}>
                  When two waves interfere, the resulting displacement of the medium at any
                  location is the algebraic sum of the displacements of the individual waves at
                  that same location.
                </Paragraph>
                <Paragraph style={styles.paragraph}> 
                  In the cases above, the summing the individual displacements for locations of complete
                  overlap was made out to be an easy task - as easy as simple arithmetic:
                </Paragraph>
                <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module1/lesson4/image9.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  <Text style={styles.sourceText}
                  onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/waves')}>
                  https://www.physicsclassroom.com/class/waves
                  </Text>
                </Card>
              </Card.Content>
              <Card.Title title="" subtitle="The Principle of Superposition" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="The Doppler Effect" />
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  Assume that a happy beetle resides in the center of a circular water puddle. The
                  bug shakes its legs on a regular basis to create noises that move through the water. If
                  the disturbances begin at a single spot, they will spread outward in all directions from
                  that point. Because all of the disturbances are going through the same medium, they
                  will all travel at the same speed in all directions. A sequence of concentric circles would
                  be generated by the bug's shaking, as depicted in the diagram to the right. At the same
                  time, these rings would reach the margins of the water puddle. An observer at point A
                  (the puddle's left edge) would see the disturbances strike the puddle's edge at the same
                  frequency that an observer at point B would see (at the right edge of the puddle). In
                  reality, the frequency with which disturbances reach the puddle's edge corresponds to
                  the frequency with which the bug causes the disturbances. If
                  the bug creates disturbances at a rate of 2 per second, each
                  observer will see them arriving at a rate of 2 per second.
                </Paragraph>
                <Paragraph style={styles.paragraph}> 
                  Assume that our beetle is travelling to the right across
                  the puddle of water, creating two disturbances every second.
                  Because the bug is migrating to the right, each subsequent
                  disturbance comes from a location closer to observer B and
                  farther away from observer A. As a result, each subsequent
                  disturbance travels a shorter distance before reaching observer
                  B, taking less time to reach observer B. As a result, observer B
                  notices that the frequency with which disturbances arrive is
                  greater than the frequency with which disturbances are
                  produced. Each successive disturbance, on the other hand,
                  must travel a greater distance before reaching observer A.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  As a result, observer A notices a lower frequency of
                  arrival than the frequency at which the disruptions occur. The
                  total impact of the bug's motion (the source of waves) is that the
                  observer facing the insect sees a frequency more than 2
                  disturbances per second, while the observer facing away from the bug sees a frequency
                  less than 2 disturbances per second. The Doppler Effect is the name for this
                  phenomenon.
                </Paragraph>
                <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module1/lesson4/image10.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  <Text style={styles.sourceText}
                  onPress={() => Linking.openURL('https://www.quora.com/What-is-the-relationship-between-the-Doppler-effect-and-the-Doppler-redshift')}>
                  https://www.quora.com/What-is-the-relationship-between-the-Doppler-effect-and-the-Doppler-redshift
                  </Text>
                </Card>
              </Card.Content>
              <Card.Title title="" subtitle="The Doppler Effect" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="What is the Doppler Effect?" />
              <Card.Content>
                <Paragraph style={styles.paragraph}> 
                  When the source of waves moves in relation to an observer, the Doppler Effect is
                  detected. The Doppler Effect is defined as the effect caused by a moving source of
                  waves that causes an apparent upward shift in frequency for observers facing the
                  source and an apparent downward change in frequency for observers facing away from
                  the source. It's vital to keep in mind that the effect isn't caused by a change in the
                  source's frequency. The bug is still causing disturbances at a rate of 2 per second in the
                  case above; it only looks to the observer who the bug is approaching that the
                  disturbances are occurring at a frequency greater than 2 per second. The effect is only
                  visible because the distance between observer B and the bug is shrinking while the
                  distance between observer A and the bug is increasing.
                </Paragraph>
                <Paragraph style={styles.paragraph}> 
                  The Doppler effect can be observed for any type of wave - water wave, sound wave,
                  light wave, etc. We are most familiar with the Doppler Effect because of our experiences
                  with sound waves. Perhaps you recall an instance in which a police car or emergency
                  vehicle was traveling towards you on the highway. As the car approached with its siren
                  blasting, the pitch of the siren sound (a measure of the siren's frequency) was high; and
                  then suddenly after the car passed by, the pitch of the siren sound was low. That was
                  the Doppler Effect - an apparent shift in frequency for a sound wave produced by a
                  moving source.
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="What is the Doppler Effect?" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="The Doppler Effect in Astronomy" />
              <Card.Content>
                <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module1/lesson4/image11.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  <Text style={styles.sourceText}
                  onPress={() => Linking.openURL('http://abyss.uoregon.edu/~js/ast121/lectures/extrasolar.html')}>
                  http://abyss.uoregon.edu/~js/ast121/lectures/extrasolar.html
                  </Text>
                </Card>
                <Paragraph style={styles.paragraph}> 
                  Astronomers who use information about the shift in frequency of electromagnetic
                  waves produced by moving stars in our galaxy and beyond to infer information about
                  those stars and galaxies are fascinated by the Doppler Effect. The theory that the
                  universe is expanding is based on measurements of electromagnetic waves released by
                  distant galaxies. Furthermore, the Doppler Effect can be used to determine specific
                  information about stars within galaxies. Galaxies are globular clusters of stars that spin=
                  around a central mass point. If a star rotates in its cluster in a direction away from the
                  Earth, electromagnetic radiation emitted by such stars in a distant galaxy seems to be
                  moved downward in frequency (a red shift). On the other hand, such detected radiation
                  has an upward shift in frequency (a blue shift).
                </Paragraph>
              </Card.Content>
              <Card.Title title="" subtitle="The Doppler Effect in Astronomy" />
            </Card>


            
            <Card style={styles.card}>
              <Card.Title title="Watch Video Lesson Here" />
              <Video
                ref={video}
                useNativeControls
                style={{ height: 300 }}
                resizeMode="contain"
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                source={require("../../assets/videos/module1/lesson4.mp4")}
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
              onPress={() => navigation.navigate('ModuleOneQuizFour')}>
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

