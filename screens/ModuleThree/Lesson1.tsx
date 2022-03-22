import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, List, Paragraph } from 'react-native-paper';
import { RootTabScreenProps } from '../../types';

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

export default function LessonOneScreen({navigation}: RootTabScreenProps<"ModuleThree">) {
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
                <Card.Title title="Reflection and its Importance" />
                <Card.Content>
                    <Paragraph style={styles.paragraph}> 
                    The main line is that there would be no seeing without light. Humans and other
                    animals' visual abilities are the consequence of a complicated interaction between light,
                    eyes, and brain. Because light from an object may travel through space and reach our
                    eyes, we can see. When light enters our eyes, it sends messages to our brain, which
                    decodes the data to identify the appearance, location, and movement of the items we're
                    looking at. Without the existence of light, the entire process, as complicated as it is,
                    would not be feasible. There would be no seeing without light.
                    </Paragraph>
                    <Paragraph style={styles.paragraph}>
                    If you turn off the lights in the room for a moment and then cover all the windows
                    with black construction paper to block any light from entering, you'll discover that
                    nothing in the room is visible. There would be objects that could be seen in the area.
                    There would be eyes present that could detect light emitted by those items. There would
                    be a brain there that could decipher the information that was delivered to it. There
                    would, however, be no light! The room, as well as everything in it, would be pitch black.
                    The absence of light is indicated by the appearance of black. When a room (or a table,
                    a garment, or the sky) appears dark, the items are not producing or reflecting light to
                    your sight. There would be no seeing without light.
                    </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Reflection and its Importance" />
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Luminous versus Illuminated Objects" />
                <Card.Content>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson1/image1.gif')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                        <Text style={styles.sourceText}
                        onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/refln/Lesson-1/The-Line-of-Sight')}>
                        https://www.physicsclassroom.com/class/refln/Lesson-1/The-Line-of-Sight
                        </Text>
                    </Card>
                    <Paragraph style={styles.paragraph}> 
                        We can divide the objects we view into two categories: luminous objects and lit
                        objects. Luminous objects are those that produce light on their own. Illuminated items
                        are those that can reflect light back to our sight. The sun is an illuminated object, but the
                        moon is a bright object. During the day, the sun produces enough light to illuminate
                        Earth's objects. Blue skies, white clouds, green grass, fall-colored leaves, the neighbor's
                        house, and the oncoming car are all visible as a result of light from the sun (the
                        luminous object) reflecting off lighted objects and reaching our eyes. These lighted
                        objects would not be visible without the light from the luminous objects.
                    </Paragraph>
                    <Paragraph style={styles.paragraph}>
                        Objects on Earth seem black in the evening when the Earth has rotated to a point
                        where the sun's light can no longer reach our area of the planet (owing to its inability to
                        bend around the spherical form of the Earth) (or at least so dark that we could say they
                        are nearly black). The neighbor's house is no longer visible in the absence of a porch
                        light or a street light; the grass is no longer green, but rather black; the leaves on the
                        trees are dark; and if it weren't for the car's headlights, it would not be seen approaching
                        the intersection. Non-luminous objects cannot be seen until luminous objects generate
                        light that travels over space to enlighten them. There would be no seeing without light.
                    </Paragraph>
                    <Paragraph style={styles.paragraph}>
                        A luminous object emits light in a variety of directions; and an illuminated object
                        reflects light in a variety of directions. Although this light diverges from the object in a
                        variety of directions, your eye only sees the very small diverging cone of rays that is
                        coming towards it. If your eye were located at a different location, then you would see a
                        different cone of rays. Regardless of the eye location, you will still need to sight along a
                        line in a specific direction in order to view the object.
                    </Paragraph>
                    <Paragraph style={styles.paragraph}>
                        While simple, this concept of the line of sight is also profound! This very principle
                        of the line of sight will assist us in understanding the formation of images in both this
                        unit (reflection).
                    </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Luminous versus Illuminated Objects" />
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Using the Line of Sight" />
                <Card.Content>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson1/image2.gif')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                        <Text style={styles.sourceText}
                        onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/refln/Lesson-1/The-Line-of-Sight')}>
                        https://www.physicsclassroom.com/class/refln/Lesson-1/The-Line-of-Sight
                        </Text>
                    </Card>
                    <Paragraph style={styles.paragraph}> 
                        The determination of the image location of a pencil (or other item) as formed by a
                        plane mirror is a frequent Physics lab. The technique in which light from the item travels
                        to your eye is analyzed during the process of identifying the image position. The object's
                        image is first located using the parallax method. Two pencils are put into rubber
                        stoppers; one is used as the object, and the other is used to help the pupil locate the
                        image. In front of a plane mirror, the item pencil is positioned. The learner next looks in
                        the mirror at the image of the item pencil. When a pupil looks at the image of the pencil
                        along a line (the line of sight), a second pencil is put behind the mirror along the same
                        line of sight; this is known as the image pencil. When used in conjunction with the
                    </Paragraph>
                    <Paragraph style={styles.paragraph}>
                        As you sight at the image of an object in the mirror (whether it be a stoppered
                        pencil or any object), light travels along your line of sight towards your eye. The object is
                        being illuminated by light in the room; a countless number of rays of light are reflecting
                        off the object in a variety of directions. When viewing the image of the object in a plane
                        mirror, one of these rays of light originates at the object location and first travels along a
                        line towards the mirror (as represented by the blue ray in the diagram below). This ray
                        of light is known as the incident ray - the light ray approaching the mirror. The incident
                        ray intersects the mirror at the same location where your line of sight intersects the
                        mirror. The light ray then reflects off the mirror and travels to your eye (as represented
                        by the red ray in the diagram below); this ray of light is known as the reflected ray.
                    </Paragraph>
                    <Paragraph style={styles.paragraph}>
                        So, the manner in which light travels to your eye as you view the image of an
                        object in a mirror can be summarized as follows.
                    </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Using the Line of Sight" />
            </Card>
            <Card style={styles.card}>
                <Card.Title title="The Law of Reflection" />
                <Card.Content>
                    <Paragraph style={styles.paragraph}> 
                        The behavior of light is well-known to be fairly predictable. If a ray of light were to
                        approach and reflect off of a flat mirror, the light's behavior as it reflected would follow a
                        predictable law known as the law of reflection. The incident ray is the ray of light that
                        approaches the mirror in the diagram (labeled I in the diagram). The reflected ray is the
                        ray of light that leaves the mirror (labeled R in the diagram). A line perpendicular to the
                        mirror's surface can be drawn at the point of incidence where the ray impacts the mirror.
                        This is referred to as a normal line (labeled N in the diagram). The angle formed by the
                        incident and reflected rays is divided into two equal angles by the normal line.
                    </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="The Law of Reflection" />
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Reflection and the Locating of Images" />
                <Card.Content>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson1/image3.gif')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                        <Text style={styles.sourceText}
                        onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/refln/Lesson-1/The-Line-of-Sight')}>
                        https://www.physicsclassroom.com/class/refln/Lesson-1/The-Line-of-Sight
                        </Text>
                    </Card>
                    <Paragraph style={styles.paragraph}> 
                        To view an image of a pencil in a mirror, you must sight along a line at the image
                        location. As you sight at the image, light travels to your eye along the path shown in the
                        diagram below. The diagram shows that the light reflects off the mirror in such a manner
                        that the angle of incidence is equal to the angle of reflection.
                    </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Reflection and the Locating of Images" />
            </Card>
            <Card style={styles.card}>
                <Card.Content>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson1/image4.gif')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                        <Text style={styles.sourceText}
                        onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/refln/Lesson-1/The-Line-of-Sight')}>
                        https://www.physicsclassroom.com/class/refln/Lesson-1/The-Line-of-Sight
                        </Text>
                    </Card>
                    <Paragraph style={styles.paragraph}> 
                        It just so happens that the light that travels along the line of sight to your eye
                        follows the law of reflection. (The reason for this will be discussed later in Lesson 2). If
                        you were to sight along a line at a different location than the image location, it would be
                        impossible for a ray of light to come from the object, reflect off the mirror according to
                        the law of reflection, and subsequently travel to your eye. Only when you sight at the
                        image, does light from the object reflect off the mirror in accordance with the law of
                        reflection and travel to your eye. This truth is depicted in the diagram below.
                    </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Reflection and the Locating of Images" />
            </Card>
            <Card style={styles.card}>
                <Card.Title title="The Locating of Images and Reflection" />
                <Card.Content>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson1/image5.gif')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                        <Text style={styles.sourceText}
                        onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/refln/Lesson-1/Specular-vs-Diffuse-Reflection')}>
                        https://www.physicsclassroom.com/class/refln/Lesson-1/Specular-vs-Diffuse-Reflection
                        </Text>
                    </Card>
                    <Paragraph style={styles.paragraph}> 
                        This law is frequently observed in a Physics lab, such as the one detailed in the
                        previous section of Lesson 1. You must sight along a line at the image position to see
                        an image of a pencil in a mirror. Light flows to your eye following the path depicted in
                        the graphic below while you look at the image. The light reflects off the mirror in such a
                        way that the angle of incidence equals the angle of reflection, as shown in the diagram.
                        The light that travels along the line of sight to your eye happens to obey the law of
                        reflection.
                    </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="The Locating of Images and Reflection" />
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Why Does a Rough Surface Diffuse a Beam of Light?" />
                <Card.Content>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson1/image6.gif')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                        <Text style={styles.sourceText}
                        onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/refln/Lesson-1/Specular-vs-Diffuse-Reflection')}>
                        https://www.physicsclassroom.com/class/refln/Lesson-1/Specular-vs-Diffuse-Reflection
                        </Text>
                    </Card>
                    <Paragraph style={styles.paragraph}> 
                        For each type of reflection, each individual ray follows the law of reflection.
                        However, the roughness of the material means that each individual ray meets a surface
                        which has a different orientation. The normal line at the point of incidence is different for
                        different rays. Subsequently, when the individual rays reflect off the rough surface
                        according to the law of reflection, they scatter in different directions. The result is that
                        the rays of light are incident upon the surface in a concentrated bundle and are diffused
                        upon reflection. The diagram below depicts this principle. Five incident rays
                        (labeled A, B, C, D, and E) approach a surface. The normal line (approximated) at each
                        point of incidence is shown in black and labeled with an N. In each case, the law of
                        reflection is followed, resulting in five reflected rays (labeled A, B, C, D, and E).
                    </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Why Does a Rough Surface Diffuse a Beam of Light?" />
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Applications of Specular and Diffuse Reflection" />
                <Card.Content>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson1/image7.gif')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                        <Text style={styles.sourceText}
                        onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/refln/Lesson-1/Specular-vs-Diffuse-Reflection')}>
                        https://www.physicsclassroom.com/class/refln/Lesson-1/Specular-vs-Diffuse-Reflection
                        </Text>
                    </Card>
                    <Paragraph style={styles.paragraph}> 
                        There are several interesting applications of this distinction between specular
                        and diffuse reflection. One application pertains to the relative difficulty of night driving on
                        a wet asphalt roadway compared to a dry asphalt roadway. Most drivers are aware of
                        the fact that driving at night on a wet roadway results in an annoying glare from
                        oncoming headlights. The glare is the result of the specular reflection of the beam of
                        light from an oncoming car. Normally a roadway would cause diffuse reflection due to its
                        rough surface. But if the surface is wet, water can fill in the crevices and smooth out the
                        surface. Rays of light from the beam of an oncoming car hit this smooth surface,
                        undergo specular reflection and remain concentrated in a beam. The driver perceives
                        an annoying glare caused by this concentrated beam of reflected light.
                    </Paragraph>
                    <Paragraph style={styles.paragraph}> 
                    A second application of the distinction between diffuse and specular reflection
                    pertains to the field of photography. Many people have witnessed in person or have
                    seen a photograph of a beautiful nature scene captured by a photographer who set up
                    the shot with a calm body of water in the foreground. The water (if calm) provides for the
                    specular reflection of light from the subject of the photograph. Light from the subject can
                    reach the camera lens directly or it can take a longer path in which it reflects off the
                    water before traveling to the lens. Since the light reflecting off the water undergoes
                    specular reflection, the incident rays remain concentrated (instead of diffusing). The
                    light is thus able to travel together to the lens of the camera and produce an image (an
                    exact replica) of the subject which is strong enough to perceive in the photograph. An
                    example of such a photograph is shown below.
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson1/image8.gif')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                        <Text style={styles.sourceText}
                        onPress={() => Linking.openURL('https://www.physicsclassroom.com/class/refln/Lesson-1/Specular-vs-Diffuse-Reflection')}>
                        https://www.physicsclassroom.com/class/refln/Lesson-1/Specular-vs-Diffuse-Reflection
                        </Text>
                    </Card>
                </Card.Content>
                <Card.Title title="" subtitle="Applications of Specular and Diffuse Reflection" />
            </Card>
              <TouchableOpacity
                onPress={() => navigation.navigate('ModuleThreeQuizOne')}>
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

