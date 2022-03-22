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
                Optics of the Human Eye and the Image Formation
                </Paragraph>
                <Card.Content>
                <Paragraph style={{marginBottom:20}}> 
                The human eye is considered to be the most interesting optical instruments out of
                all the devices and technologies present. Our eyes are interesting in the sense of its
                purpose that enables us in seeing our environment through forming images that are rich
                in detail and color. Moreover, our eyes have a “normal” vision that are ideal to humans
                and some eyes need correction in order to achieve this 20/20 vision.
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson1/image1.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph style={styles.paragraph}>
                  Major parts and functions of the Human eye
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Cornea
                  </Paragraph>
                  <Paragraph style={{marginBottom:20, marginLeft:20}}>
                  - It is the transparent part of the eye that refracts light and protects it from accidents
                  by not allowing foreign particles inside it.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Retina
                  </Paragraph>
                  <Paragraph style={{marginBottom:20, marginLeft:20}}>
                  - It is the nerve cells at the back of the eye that are comprised with rods that allow
                    you to see shapes, and cones that are responsible for detecting and deciphering colors.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Pupils
                  </Paragraph>
                  <Paragraph style={{marginBottom:20, marginLeft:20}}>
                  - It is the black center of the eye that functions to let in the light and focus it
                  on the retina in order for the living being to see.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Iris
                  </Paragraph>
                  <Paragraph style={{marginBottom:20, marginLeft:20}}>
                  - It refers to the colored part of the eye, controlling the amount of light that enters it. 
                  The muscles located in the iris control each pupil.
                  </Paragraph>
                  <Paragraph>
                  Have you ever questioned yourself “how can I see images and objects?”. This
                  question can be answered by knowing the propagation of light inside our eyes.
                  </Paragraph>
                  <Paragraph>
                  Suppose that you are looking at the object near you. The light from that specific
                  object enters your eyes and falls on the cornea. The light gets refracted by the cornea
                  and the refracted light then travels through the transparent fluid called the Aqueous
                  Humor, found in between the cornea. Afterwards, the reaches the pupil and falls on the
                  lens inside. The lens is a biconvex lens that refracts light such that that all light coming
                  from a point on an object is being focused on the retina. The retina is where the image is
                  formed but the image formed is upside down. But why do we see it as if it is not in an
                  upside-down position? It is because the image formed is getting upright in the brain. The
                  light signals were travelling through the optic nerve as impulses and travel to the Occipital
                  Lobe, a part of the brain. Meanwhile, before the light travels to the retina, it passes through
                  the space between the retina and the lens filled with transparent fluid, called as the
                  Vitreous Humor.
                  </Paragraph>
                  <Paragraph>
                  There are multiple refractions happening before the light reaches to the lens of an
                  eye. Moreover, there are different mediums where the light travels through before it
                  reaches the retina. These include the air, cornea, aqueous humor, biconvex lens, and the
                  vitreous humor. These mediums have an approximate refractive index. This is shown on
                  the table below:
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson1/image2.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson1/image3.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph>
                  Refraction occurs at other interfaces too but not as much as the interface of air
                  and the cornea. The lens also refracts the light but it functions to make sure that all the
                  light from a point is being focused on the retina only and not anywhere else. We have to
                  take note that all the images in the eyes are formed on the retina only due to the fact that
                  the lens inside the human eye does not have a fixed shape as it is composed of fibrous
                  jelly like material. Hence, the lens can change its shape up to some extent. The movement
                  of the lens is being controlled by the Ciliary Muscles. According to the Helmholtz theory,
                  as the ciliary muscles are in relaxed position, the lens in the eye is thinner and has a
                  larger focal length. Meanwhile, if the ciliary muscles contract, the lens will be thicker and
                  it will have a smaller focal length. Therefore, if you see a near object, the lens will increase
                  its thickness to form its image on the retina. On the other hand, if the object is afar, the
                  lens will become thin and the image is formed in the retina. Through adjusting the shape,
                  the lens makes sure that images are formed on the retina. The ability of the lens of the
                  eye to adjust its focal length is called as accommodation.
                  </Paragraph>
                  <Paragraph>
                  Meanwhile, there is some limitations in the abilities of the lens to adjust its focal
                  length to increase or decrease. For instance, place an object near your eye, what can you
                  see? You noticed that the object is a bit distorted. If an object is placed very close to the
                  normal eye, the image generated by your retina will appear to be distorted and you are
                  unable to see the object clearly. In order to see a very near object in the eye, we have to
                  strain our eyes in order to decrease the focal length of the convex lens though we still
                  cannot see the object very clearly. How can we fix this problem? We can fix it through
                  placing the object on a certain distance where the image is formed on the retina only. The
                  distance is called the minimum distance of an object from the eye where the value is
                  approximately 25 cm for the normal eye. (Memorise, 2019)
                  </Paragraph>
                  <Paragraph>
                  Our eyes perform a vast number of functions, such as sense direction, movement,
                  sophisticated colors, and distance. Processing of visual nerve impulses begins with
                  interconnections in the retina and continues in the brain. The optic nerve conveys signals
                  received by the eye to the brain. (Vision and Optical Instruments, n.d.)
                  </Paragraph>
                  <Paragraph style={{marginBottom:20}}>
                  The human eye composes of different parts that work together in giving us a
                  clearer view of our surroundings. In the picture, you can see the components of an eye
                  which has different functions, allowing light perception, color vision, and depth perception.
                  The cornea and lens of an eye act together, forming a real image on the light-sensing
                  retina, having its densest concentration of receptors in the fovea and a blind spot over the
                  optic nerve. Moreover, the lenses are adjustable, providing an image on the retina for
                  varied distances of objects.
                  </Paragraph>
                  <Paragraph>
                  According to Lumen Learning (n.d.), the human eye composes of three coats:
                  </Paragraph>
                  <Paragraph style={{marginBottom:20, marginLeft:20}}>
                  1. Outermost layer – composed of cornea and the sclera.
                  </Paragraph>
                  <Paragraph style={{marginBottom:20, marginLeft:20}}>
                  2. Middle Layer – composed of the choroid, ciliary body, and iris.
                  </Paragraph>
                  <Paragraph style={{marginBottom:20, marginLeft:20}}>
                  3. Innermost layer – the retina, which can be seen with an instrument called the
                  ophthalmoscope.
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson1/image4.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph>
                  Have you ever wondered why when we are in a dark place, after some time, we can see
                  a bit of the place, despite being black all over? It is because of the movement of our eyes that
                  automatically readjusts the exposure through adjusting the iris. According to Lumen Learning
                  (n.d.), our eye’s lens is similar to cameras as it had an aperture, just like a camera. Aperture
                  pertains to the opening of a lens’s diaphragm through which light passes. The pupil serves this
                  function, while the iris is the aperture stop. Moreover, despite the fact that images pass
                  through several layers of the eye, it happens in the same manner as the convex lenses.
                  In addition to this, the images are only formed on the retina itself, if not, the images formed
                  will be perceived as blurry.
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson1/image5.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph style={styles.paragraph}>
                  Nearsightedness, Farsightedness, and Vision Corrections
                  </Paragraph>
                  <Paragraph>
                  Are you nearsighted or farsighted? Based on our previous lessons, these conditions are
                  tackled as two of the most common vision defects present. Despite being the most interesting
                  optical instrument, our eyes can experience problems, resulting to our blurry vision and
                  other difficulties.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Refractive Errors
                  </Paragraph>
                  <Paragraph>
                  Refractive Errors refer to the type of vision problems wherein the person
                  experiences blurry visions due to the inability of the eye to focus images sharply on the
                  retina. During the accommodation process, the ciliary muscles move and adjust the lens
                  shape of the eye to properly focus images. But in these conditions, the eye fails to focus
                  the images on the retina, causing blurry sights to a person.
                  </Paragraph>
                  <Paragraph>
                  According to Dhaliwal (2020), There are four (4) errors of refraction and two of
                  these are already discussed on the previous lessons which are myopia or
                  nearsightedness, and hyperopia or farsightedness, while the other two are emmetropia,
                  and astigmatism.
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson1/image6.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph>
                  Myopia or nearsightedness is the  condition wherein the eyes are able to see
                  the near objects but far objects are harder to be seen due to the location of the point of
                  focus is in front of the retina because the cornea is too steeply curved, the axial length
                  of the eye is too long, or both. Hence, distant objects become blurred, but near objects are
                  clearly seen. (Dhaliwal, 2020)
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson1/image7.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph>
                  Hyperopia or farsightedness is the reverse state of the myopia. In this condition, the point of
                  focus is behind the retina due to cornea that is too flatly curved, the axial length is too short, or both.
                  Adults with hyperopia sees near and distant objects as blurred. Meanwhile, children and young
                  adults with mild hyperopia may be able to see clearly due to their ability to accommodate.
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module6/lesson1/image8.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph>
                  The next one is astigmatism. This condition happens due to the nonspherical
                  curvature of the cornea or lens, causing the light rays of different orientations to
                  focus at different points. You can realize this condition through the picture above. 
                  In a traffic jam, people with astigmatism tend to see the lights with lines, while people
                  with normal vision cannot.
                  </Paragraph>
                  <Paragraph>
                  The last one is Presbyopia which is the condition where the lens lost its ability to
                  change its shape to focus on near objects due to aging. On a typical situation, this state
                  is noticeable when a person reaches his/her early or mid-40s.
                  </Paragraph>
                  <Paragraph style={{marginBottom:20}}>
                  Refractive errors can be noticed through signs and symptoms such as blurred
                  vision for distant or near objects, excessive ciliary muscle tone that causes headaches,
                  prolonged squinting and frowning with ocular use which can also lead to headache, etc.
                  Diagnosis of a medical professional is very important in dealing with these conditions.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  How are these conditions being corrected?
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Cornea
                  </Paragraph>
                  <Paragraph style={{marginBottom:20, marginLeft:20}}>
                  - It is the transparent part of the eye that refracts light and protects it from accidents
                  by not allowing foreign particles inside it.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Myopia
                  </Paragraph>
                  <Paragraph style={{marginBottom:20, marginLeft:20}}>
                  - In correcting myopia, a concave (minus) lens is used. The standard goal of treating
                  nearsightedness is to improve vision by helping focus light on your retina through
                  the use of corrective lenses or refractive surgery. (Nearsightedness, 2020).
                  Meanwhile, due to emerging technologies, nearsightedness can now be corrected
                  through laser vision correction.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Hyperopia
                  </Paragraph>
                  <Paragraph style={{marginBottom:20, marginLeft:20}}>
                  - This condition can be corrected through using a convex (plus) lens. Meanwhile,
                  LASIK surgery can also help in correcting farsightedness. According to a 2020
                  study published in the Journal of Refractive Surgery, LASIK is considered safe and
                  effective for correcting age-related farsightedness.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Astigmatism
                  </Paragraph>
                  <Paragraph style={{marginBottom:20, marginLeft:20}}>
                  - Like other refractive errors, astigmatism can also be corrected through using
                  eyeglasses. Usage of cylindrical lens is done as it has no refractive power along
                  one axis, and are concave or convex along the other axis. (Dhaliwal, 2020)
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  Presbyopia
                  </Paragraph>
                  <Paragraph>
                  - In Presbyopia, a convex (plus) lens is also used in order to correct the condition.
                  These lenses may be supplied as separate glasses or built into a lens as bifocals
                  or variable focus lenses. (Dhaliwal, 2020)
                  </Paragraph>                 
                </Card.Content>
              </Card>
              <Card style={styles.card}>
                <Card.Title title="Watch Video Lesson Here" />
                <Video
                  ref={video}
                  useNativeControls
                  style={{ height: 300 }}
                  resizeMode="contain"
                  onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                  source={require("../../assets/videos/module6/lesson1.mp4")}
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
                onPress={() => navigation.navigate("ModuleSixQuizOne")}
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


