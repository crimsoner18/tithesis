import { Video } from 'expo-av';
import React, { useRef, useState } from 'react';
import { Button, Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, List, Paragraph } from 'react-native-paper';
import { RootTabScreenProps } from '../../types';

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

export default function LessonOneScreen({ navigation }: RootTabScreenProps<'ModuleSix'>){
  const video = useRef(null);

  const [status, setStatus] = useState({});
  return (
    <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollview}>
              <Card style={styles.card}>
                <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
                Principles of Optical Instruments
                </Paragraph>
                <Card.Content>
                <Paragraph> 
                Due to the emerging advancement of technologies, many devices are now being
                used with the principles of optics. Cameras, telescope, microscope, lasers, etc. are widely
                used by people for various purposes. Do you have a camera, either on your cellphone or
                a separate camera device? These are all working in the principle of optics. There is
                physics behind the device that we are using to capture moments and to see things that
                are not typically seen by only our naked eyes.
                  </Paragraph>
                  <Paragraph>
                  Optics refers to the study of visible light by which it is used for extending human
                  vision and other related tasks. The knowledge regarding light and concepts are essential
                  for the invention of optical instruments such as microscopes, telescopes, and cameras,
                  in addition to optical fibers. These instruments use mirrors and lenses to reflect and refract
                  light and form images (Optical Instruments, 2019).
                  </Paragraph>
                  <Paragraph>
                  From our previous lesson, we tackled about the major components and function of
                  our eyes, and the propagation of light in it. We all knew that our eyes are adjusting its
                  lens to see an object more clearly and effectively. This process is similar to our cameras
                  as it adjusts in order to view the surroundings from up close and even from afar. The near
                  point refers to the closest distance at which your eye can focus on an object. Do you want
                  to know your near point? First, cover your one eye with your hand. Afterwards, hold any
                  reading material and focus your other eye on any page of a book or any texts. Place it up
                  close to your eye and slowly move it away until you see a clearer view of what you are
                  reading. Did you see it? The average human eye has a near point of 25 cm. But what
                  happens when you have a near point that is farther than 25 cm? A person that has a near
                  point farther than the average has a condition called hyperopia, or commonly known as
                  farsightedness. People that are farsighted has eyes that cannot make light rays converge
                  at the retina and instead the image forms beyond the retina. This condition can be
                  corrected through the use of eyeglasses with converging lenses that bring light rays closer
                  together to form a clear image on the back of the retina. Meanwhile, if you have a problem
                  in focusing on distant objects, you may have a condition called myopia which is commonly
                  known as nearsightedness. In this condition, the eyes make the light rays converge too
                  quickly, resulting to the formation of image far in front of the retina. This can be corrected
                  through the use of diverging lenses which spread out the light rays so a focused image is
                  formed at the proper distance.
                  </Paragraph>
                  <Paragraph style={{marginBottom:20}}>
                  Lenses are not only used in correcting conditions related to your visions but also,
                  they produce images of things that are unable to be seen or undecipherable to anyone,
                  despite their good eyesight.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Camera
                  </Paragraph>
                  <Paragraph>
                  Cameras are part of our life. They bring our memories to life as it captures the
                  moments that are precious to us. This optical instrument is widely known and used by
                  people all throughout the world.
                  </Paragraph>
                  <Paragraph>
                  Before, photos were made and recorded through the use of light-sensitive reaction
                  of a silver-based compounds like silver chloride or silver bromide. The silver-based
                  photographic paper was commonly used until 1980 where the advent of digital
                  photography began, connecting to the charge-coupled device (CCD). It is a
                  semiconductor chip that is used for recording images as a matrix of tiny pixels, capable
                  of detecting the intensity of light touching it. It converts light signals into electronic signals
                  which enables electronic processing and storage of visual images. (Ling, Sanny, & Moebs, 2020)
                  </Paragraph>                 
                  <Paragraph>
                  The main optical component of camera is the lens. Lens refers as the curved piece of glass or plastic, 
                  functioning to take the beams of light bouncing off of an object and redirect themto form a real image. 
                  A real image is an image that looks just like the scene in front of the lens. The basics of the camera lie on basic optics.
                  The optics of a camera are pretty much the same as those of a single lens with an object distance that is significantly 
                  larger than the lens’s focal distance. (Ling, Sanny, & Moebs, 2020)
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson2/image1.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph>
                  The image shows the anatomy of a camera consisting of aperture, lenses, flip-up
                  mirror, viewing system, sensor, and shutter.
                  </Paragraph>
                  <Paragraph>
                  Unlike the human eye which can accommodate for distant and close images by
                  the change of focal distance, cellphone camera is unable to do that due to the distance
                  from the lens to the detector is fixed. This is where the importance of focal distance.
                  </Paragraph>
                  <Paragraph>
                  Have you heard about resolution? When you are dealing with cameras, you might
                  be hearing about the term a lot. The ability of a camera to produce images of points very
                  close together is known as the resolution. The higher the resolution, the clearer two points
                  are close together will appear in an image.
                  </Paragraph>
                  <Paragraph style={{marginBottom:20}}>
                  Conventional point-and-shoot cameras often use a movable lens to change the
                  lens-to-image distance. Complex lenses of the more expensive mirror reflex cameras
                  allow for superb quality photographic images.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Magnifying Glass
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson2/image2.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph>
                  Have you seen a magnifying glass? this consist of a single converging
                  lens, producing a virtual image that enlarges an object. For instance, you
                  want to inspect an object but it is very small for you to see it clearly. Hence, you
                  can use a magnifying glass by placing the object inside the focal point of the
                  magnifier. Since the object is inside the focal point, the rays diverge, and the lens
                  forms a larger virtual image than the actual size of the certain object. However,
                  the image made by the magnifying glass should be past your near point because if it were
                  closer, your eyes would not be able to focus on it.
                  </Paragraph>
                  <Paragraph>
                  An object is said to subtend based on the distance between the person and the
                  certain object that is being focused on. Magnification power refers to the measure how
                  much larger an object appears after magnification. This is made for as a means of
                  standardization.
                  </Paragraph>
                  <Paragraph>
                  In order to measure the magnifying power of a lens, you can use the formula:
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson2/image3.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph style={{marginLeft:40, marginBottom:30}}>
                  Where:{"\n"}
                  M = Magnification power{"\n"}
                  ∅′= angle subtended by image{"\n"}
                  ∅= angle subtended by object
                  </Paragraph>
                  <Paragraph>
                    Example:
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson2/image4.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph style={{marginLeft:40, marginBottom:30}}>
                  Given:{"\n"}
                  ∅ = 2°{"\n"}
                  ∅′= 6°{"\n"}
                  M = ?
                  </Paragraph>
                  <Paragraph style={{marginLeft:40, marginBottom:30}}>
                  = 6° / 2°{"\n"}
                  M = 3°
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Telescopes
                  </Paragraph>
                  <Paragraph>
                  Meanwhile, objects that are very far away are measured differently. Long before,
                  telescopes are invented to magnify things that are very far away from the eyes of humans
                  by 3 or 4 times, and afterwards, Galileo Galilei invented a telescope with a magnifying
                  power of 30 times. This is called refracting telescope which consists of an objective lens
                  on the end closest to the object and an eyepiece on the other end, magnifying the image
                  produced by the objective lens. Galileo had used a concave lens for his eyepiece, the
                  standard refracting telescope uses a convex, converging lens for both the objective lens
                  and eyepiece.
                  </Paragraph>
                  <Paragraph>
                  In order to calculate the magnification of a telescope, you can use the formula below:
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson2/image5.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph style={{marginLeft:40, marginBottom:30}}>
                  Where:{"\n"}
                  M = Magnification power{"\n"}
                  fo= Focal length of telescope{"\n"}
                  fe= Focal length of Eyepiece
                  </Paragraph>   
                  <Paragraph>
                    Example:
                  </Paragraph>
                  <Paragraph style={{marginLeft:20,}}>
                  What is the angular magnification of a Sky watcher telescope with a mirror of focal
                  length fo = 8 m and an eyepiece of focal length fe = 8 cm?
                  </Paragraph>  
                  <Paragraph style={{marginLeft:40, marginBottom:30}}>
                  Given:{"\n"}
                  M = 8 m{"\n"}
                  fo= 8 cm = 0.08 m{"\n"}
                  fe= ?
                  </Paragraph>
                  <Paragraph style={{textAlign:'center', marginBottom:30}}>
                  M = 8 / 0.08{"\n"}
                  M  = 100
                  </Paragraph>
                  <Paragraph>
                  The magnification is equal to 100 as we divided the focal length of Sky watcher
                  telescope by the focal length of its eyepiece.
                  </Paragraph>
                  <Paragraph style={{marginBottom:20}}>
                  But since angles in telescopes are too small, you can assume that the tangent of
                  an angle is roughly equal to the angle itself.
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson2/image6.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph style={{marginLeft:100, marginBottom:30}}>
                  tanθ′ = h / fe
                  </Paragraph>
                  <Paragraph style={{marginLeft:40, marginBottom:30}}>
                  Where:{"\n"}
                  tanθ′ = tangent of second angle{"\n"}
                  h = height of real image{"\n"}
                  fe= focal length of the eyepiece
                  </Paragraph> 
                  <Paragraph>
                  Many, like the Hubble Space Telescope, are reflecting telescopes which uses
                  mirrors as the objective lens in order to have a huge opening that takes as much light as
                  possible in order to best capture images of distant objects. These mirrors are convex,
                  causing rays to converge into a real image, which is then magnified through an eyepiece
                  or projected directly onto a digital sensor. This aids the researches of Scientists for many
                  years.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Compound Microscopes
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson2/image7.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph>
                  Have you ever held or tried a microscope on your early
                  days of learning science? Since a simple magnifying glass
                  cannot be used in studying objects in a cellular level,
                  Scientists had developed a microscope which uses objective
                  lenses and eyepieces in order to magnify objects. But the
                  difference between the microscope and telescope is that the
                  object distance to the objective lens in microscope is much
                  smaller.
                  </Paragraph>
                  <Paragraph style={{marginBottom:20}}>
                  Unlike in telescope that is used for studying things that
                  are far away from us, the sample in microscopes are placed
                  just beyond the focal point of the objective lens in order for
                  the light rays to form a flipped real image on the other side.
                  But like a telescope, the real image is just inside the focal
                  point of the eyepiece which generates a large virtual image
                  for the observer to view.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Note:
                  </Paragraph>
                  <Paragraph>
                  In each of the optical instruments present, the equation for magnification and the
                  original optics equations are hold true.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Magnification Equation:
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson2/image8.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph style={{marginLeft:40, marginBottom:30}}>
                  Where:{"\n"}
                  M = Magnification power{"\n"}
                  hi = height of image{"\n"}
                  ho= height of object{"\n"}
                  di = distance of image{"\n"}
                  do = distance of object
                  </Paragraph> 
                  <Paragraph style={styles.paragraph}>
                  Thin Lens Equation:
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson2/image9.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph>
                    Example:
                  </Paragraph>
                  <Paragraph style={{marginLeft:20,}}>
                  A compound microscope has a tube length of 20 cm, objective lens and eyepiece
                  focal lengths of 0.5 cm and 6 cm respectively. What is the angular magnification of the
                  microscope?
                  </Paragraph>  
                  <Paragraph style={{marginLeft:40, marginBottom:30}}>
                  Given:{"\n"}
                  L= 20 cm{"\n"}
                  fo = 0.5 m{"\n"}
                  fe = 6 cm= 0.06 m
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson2/image10.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                </Card.Content>
<<<<<<< HEAD
              </Card>
=======
              </Card>
              <Card style={styles.card}>
              <Card.Title title="Watch Video Lesson Here" />
                <Video
                  ref={video}
                  useNativeControls
                  style={{ height: 300 }}
                  resizeMode="contain"
                  onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                  source={require("../../assets/videos/module6/lesson2.mp4")}
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
                onPress={() => navigation.navigate('ModuleSixQuizTwo')}>
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
    fontWeight: "bold",
  },
  paragraph1: {
    textAlign: 'center',
  },
});


