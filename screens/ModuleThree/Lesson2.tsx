import AsyncStorage from '@react-native-async-storage/async-storage';
import { Video } from 'expo-av';
import React from 'react';
import { Button, Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
        <ScrollView contentContainerStyle={styles.scrollview}>
            <Card style={styles.card}>
                <Card.Title title="Why is an Image Formed?" />
                <Card.Content>
                    <Paragraph style={styles.paragraph}> 
                        In order to view an object, you must sight along a line at that object; and when
                        you do light will come from that object to your eye along the line of sight. This very
                        principle can be extended to the task of viewing the image of an object in a plane (i.e.,
                        flat) mirror: In order to see the image of an object in a mirror, you must sight at the
                        image; when you sight at the image, light will come to your eye along that line of sight.
                    </Paragraph>
                    <Paragraph style={styles.paragraph}>
                        The image location is thus located at that position where observers are sighting
                        when viewing the image of an object. It is the location behind the mirror where all the
                        light appears to diverge from. Each person sees the image due to the reflection of light
                        off the mirror in accordance with the law of reflection. When each line of sight is
                        extended backwards, each line will intersect at the same point. This point is the image
                        point of the object.
                    </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Why is an Image Formed?" />
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Locating an Image via Parallax" />
                <Card.Content>
                    <Paragraph style={styles.paragraph}> 
                        A 5-foot plane mirror and a pair of big cylinders can be used to demonstrate this
                        theory in a Physics lesson. Students from various parts of the room are requested to
                        look at the image of one cylinder that has been placed in front of the mirror. The second
                        cylinder is then aligned along the line of sight and readjusted until it is aligned with the
                        line of sight of each individual. Each sight line must connect in the same place
                        regardless of who is viewing the image or from where they are viewing it. The second
                        cylinder may be aligned with one student's line of sight but not with another students. If
                        this is the case, the cylinder is not positioned exactly where the image should be. The
                        graphic below illustrates this.
                    </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Locating an Image via Parallax" />
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Who Can See an Image?" />
                <Card.Content>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson2/image1.png')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph style={styles.paragraph}> 
                        Since there is only one image for an object placed in front of a plane mirror, it is
                        reasonable that every sight line would intersect in a single location. This location of
                        intersection is known as the image location. The image location is simply the one
                        location in space A. Regardless of where the observer is located, when the observer
                        sights at the image location, the observer is sighting along a line towards the same
                        location that all other observers are sighting. And as mentioned in an earlier lesson, the
                        perpendicular distance from this image location to the mirror is equal to the
                        perpendicular distance from the object location to the mirror. In fact, the image location
                        is directly across the mirror from the object location and an equal distance from the
                        mirror.
                    </Paragraph>
                    <Paragraph style={styles.paragraph}> 
                        Of course, it is possible that certain individuals in the room will be unable to view
                        the image of an object in a plane mirror. Because of the person's position relative to the
                        image position and to the extremities of the mirror, the person is unable to detect a ray
                        of light reflecting to their eye as they sight at the image location. This does not mean
                        that there is no image. Indeed, any object positioned in front of a plane mirror (or even
                        to the side of the plane mirror) has an image regardless of whether there are people
                        positioned in an appropriate location to view it. In the diagram below, there is an image
                        of an object located on the other side of the mirror. However, Ray Zuvlite is unable to
                        view the image due to his position in the room. Ray is certainly able to sight in the
                        direction of the image location. However, the light from the object is unable to reflect off
                        the mirror in accordance with the law of reflection and travel to his eye along his line of
                        sight. Since light from the object does not make it to his eye, Ray is unable to see the
                        image of the object in the mirror.
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson2/image2.png')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph style={styles.paragraph}>
                        Of course, this problem could be remedied if the mirror were wider, if the object
                        were moved to the left or closer to the mirror, and/or if Ray moved to the left.
                        Repositioning the object, the mirror, and/or the person could result in a ray of light from
                        the object reflecting off the mirror and traveling to Ray's eye. The diagram below depicts
                        this remedy.
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson2/image3.png')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson2/image4.png')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                </Card.Content>
                <Card.Title title="" subtitle="Who Can See an Image?" />
            </Card>
            <Card style={styles.card}>
                <Card.Title title="How Does Reflection Lead to the Formation of Images?" />
                <Card.Content>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson2/image5.png')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph style={styles.paragraph}> 
                        So, why does a plane mirror produce an image? Because light originates from an
                        item in a variety of directions, a picture is produced. Some of this light (represented by
                        rays) reaches the mirror and, according to the law of reflection, reflects off of it. Each of
                        these light rays can be extended backwards behind the mirror to a point where they will
                        all connect (the image point). Anyone standing along the line of one of these reflected
                        beams can look down and see the image, which is a representation of the object.
                    </Paragraph>
                    <Paragraph style={styles.paragraph}> 
                        In a Physics lab, this image creation principle is frequently used. Assume a mirror
                        is affixed to a sheet of paper that is affixed to a piece of cardboard. A pin is positioned in
                        front of the mirror in an upright position (and held in place by the cardboard). From a
                        variety of places, a learner can sight down a line at the picture of the pin. A straightedge
                        is used to assist in sketching the lines of sight with one eye closed. These lines of sight
                        are drawn from a number of different vantage points. Beyond the mirror, each line of
                        sight can be extended backwards. Each line will intersect at the same point if the sight
                        lines are drawn appropriately.
                    </Paragraph>
                  </Card.Content>
                <Card.Title title="" subtitle="How Does Reflection Lead to the Formation of Images?" />
              </Card>
                <Card style={styles.card}>
                  <Card.Content>
                    <Paragraph style={{fontWeight: "bold", marginBottom:20}}>
                    Image Characteristics
                    </Paragraph>
                    <Paragraph style={{fontWeight: "bold"}}>
                    Virtual vs. Real Images
                    </Paragraph>
                    <Paragraph style={{marginBottom:20}}>
                    The image created by plane mirrors is referred to as a virtual image. Pictures that
                    are created in places where light does not reach are known as virtual images. Light
                    does not truly flow through the area on the opposite side of the mirror; it simply looks to
                    an observer that it does. When a mirror (whether a plane mirror or not) forms a virtual
                    image, the image is created behind the mirror, where light does not originate from. Later
                    in this unit, we'll look at how curved mirrors can create real-world images. Light flows
                    through the real image position, which is generated on the same side of the mirror as
                    the item.
                    </Paragraph>
                    <Paragraph style={{fontWeight: "bold"}}>
                    Apparent Left-Right Image Reversal
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson2/image6.png')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph>
                    Besides the fact that plane mirror images are virtual, there are several other
                    characteristics that are worth noting. The second characteristic has to do with the orientation of the
                    image. If you view an image of yourself in a plane mirror (perhaps a bathroom mirror), you will quickly
                    notice that there is an apparent left-right reversal of the image. That is, if you raise your left hand, you
                    will notice that the image raises what would seem to be it's right hand. If you raise your right hand,
                    the image raises what would seem to be its left hand. This is often termed left-right reversal. This
                    characteristic becomes even more obvious if you wear a shirt with lettering. For example,
                    a shirt displaying the word "NIKE" will read  "EKIN" when viewed in the mirror; a shirt displaying the word 
                    "ILLINOIS" will read "SIONILLI;" and a shirt displaying the word "BOB" will read "BOB." (NOTE: Not only will
                    the order of letters appear reversed, the actual orientation of the letters themselves will
                    appear reversed as well. Of course, this is a little difficult to do when typing from a
                    keyboard.) While there is an apparent left-right reversal of the orientation of the image,
                    there is no top-bottom vertical reversal. If you stand on your feet in front of a plane mirror,
                    the image does not stand on its head. Similarly, the ceiling does not become the floor. The
                    image is said to be upright, as opposed to inverted.
                    </Paragraph>
                    <Paragraph>
                    Students of Physics are usually quite intrigued by this apparent left-right reversal.
                    Exactly what is happening to cause ILLINOIS to read as SIONILLI? And why is the
                    reversal observed in the left to right direction and not in the head to toe direction? These
                    questions urge us to ponder the situation more deeply. Let's suppose for a moment that
                    we could print the name of your favorite school subject on your shirt and have you look
                    in the mirror. We all know that when you look in the mirror, you will see the letters
                    SCISYHP written on the shirt of your image - the reversed form of PHYSICS. But can
                    we really say that the word appearing on your shirt is the word PHYSICS (with the
                    letters un-reversed)? The answer is no! (But you don't have to believe it yet. Keep
                    reading ... and pondering.)
                    </Paragraph>
                    <Paragraph>
                    To further explore the reason for this appearance of left-right reversal, let's
                    suppose we write the word PHYSICS on a transparency and hold it in front of us in front
                    of a plane mirror. If we look at the image of the transparency in the mirror, we would
                    observe the expected - SCISYHP. The letters are written reversed when viewed in the
                    mirror. But what if we look at the letters on the transparency? How are those letters
                    oriented? When we face the mirror and look at the letters on the transparency, we
                    observe the unexpected - SCISYHP. When viewed from the perspective of the person
                    holding the transparency (and facing the mirror, the letters exhibit the same left-right
                    reversal as the mirror image. The letters appear reversed on the image because they
                    are actually reversed on the shirt. At least they are reversed when viewed from the
                    perspective of a person who is facing the mirror. Imagine that! All this time you thought
                    the mirror was reversing the letters on your shirt. But the fact is that the letters were
                    already reversed on your shirt; at least they were reversed from the person who stands
                    behind the T-shirt. The people who view your shirt from the front have a different
                    reference frame and thus do not see the letters as being reversed. The apparent left-
                    right reversal of an image is simply a frame of reference phenomenon. When viewing
                    the image of your shirt in a plane mirror (or any part of the world), you are viewing your
                    shirt from the front. This is a switch of reference frames.
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson2/image7.png')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph style={{fontWeight:"bold",marginTop:20}}>
                    What Portion of a Mirror is Required?
                    </Paragraph>
                    <Paragraph>
                    In the previous part of this lesson, the use of ray diagrams were introduced and
                    illustrated. Ray diagrams can be used to determine where a person must sight along a
                    mirror in order to see an image of him/herself. As such, ray diagrams can be used to
                    determine what portion of a plane mirror must be used in order to view an image. The
                    diagram below depicts a 6-foot tall man standing in front of a plane mirror. To see the
                    image of his feet, he must sight along a line towards his feet; and to see the image of
                    the top of his head, he must sight along a line towards the top of his head. The ray
                    diagram depicts these lines of sight and the complete path of light from
                    his extremities to the mirror and to the eye. In order to view his image, the man must
                    look as low as point Y (to see his feet) and as high as point X (to see the tip of his
                    head). The man only needs the portion of mirror extending between points X and Y in
                    order to view his entire image. All other portions of the mirror are useless to the task of
                    this man viewing his own image.
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson2/image8.png')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph>
                    The diagram depicts some important information about plane mirrors. Using a
                    cm-ruler, measure the height of the man (the vertical arrow) on the computer screen
                    and measure the distance between points X and Y. What do you notice? The man is
                    twice as tall as the distance between points X and Y. In other words, to view an image
                    of yourself in a plane mirror, you will need an amount of mirror equal to one-half of your
                    height. A 6-foot tall man needs 3-feet of mirror (positioned properly) in order to view his
                    entire image.
                    </Paragraph>
                    <Paragraph style={{fontWeight:"bold",marginTop:20}}>
                    What is the Effect of Varying Object Distance?
                    </Paragraph>
                    <Paragraph>
                    But what if the man was standing further away from the mirror? Wouldn't that
                    necessitate a different number of mirrors in order for the man to see his reflection? In
                    this case, perhaps a smaller mirror would suffice? Another ray diagram can be used to
                    investigate these concerns. A guy is seen standing at various distances from a plane
                    mirror in the diagram below. For each condition (standing close and far away), ray
                    diagrams are generated. The two ray diagrams have been color-coded to make it easier
                    to discern between them. For the case where the man is standing far away, red and
                    blue light rays were utilized. For the case where the man is standing near to the mirror,
                    green and purple light beams were utilized.
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson2/image9.png')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph>
                    The two ray diagrams above demonstrate that the distance that a person stands
                    from the mirror will not affect the amount of mirror that the person needs to see their
                    image. Indeed in the diagram, the man's line of sight crosses the mirror at the same
                    locations. A 6-foot tall man needs 3-feet of mirror to view his whole image regardless of
                    where he is standing. In fact, the man needs the exact same 3-feet of mirror.
                    </Paragraph>
                    <Paragraph>
                    A common Physics lab involves using a tall plane mirror to explore the
                    relationship between object height and the portion of mirror needed to view an image. A
                    student stands a few meters from a plane mirror and views her image. With the student
                    standing upright and still and staring at her feet, the lab partner moves a marker up and
                    down the mirror until the sight location on the mirror is identified. The partner then
                    marks this location on the mirror with an erasable marker. The process is repeated for
                    the student staring at the tip of her head. Of course, being a lab, the procedure is
                    subject to a variety of procedural and measurement error that may yield less than ideal
                    results. The mirrors are occasionally mounted on a wall that is not perfectly vertical. Or
                    a student will lean forward a slight amount, thus reducing his/her effective height. Or the
                    mirror warps over the years leading to one that is concave or convex rather than planar.
                    Despite these potential complications, the 1:2 ratio between the amount of mirror
                    required to view the image and the height of the object is often observed.
                    </Paragraph>
                    <Paragraph style={{marginTop:20}}>
                    Other Multiple Mirror Systems
                    </Paragraph>
                    <Paragraph>
                    Besides right angle mirror systems, there is a wealth of other multiple mirror systems
                    that involve two or more mirrors. If two plane mirrors are placed together on one of their
                    edges so as to form a right angle mirror system and then the angle between them is
                    decreased, some interesting observations can be made. One observes that as the
                    angle between the mirrors decreases, the number of images that can be seen
                    increases. In fact as the angle between the mirrors approaches 0 degrees (i.e., the
                    mirrors are parallel to each other), the number of images approaches infinity.
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson2/image10.png')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph style={{marginTop:20}}>
                    Determining Image Locations for Multiple Mirror System
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson2/image11.png')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph>
                    Each of the two mirrors provides an image due to a
                    single reflection of light off one of the mirror faces to an
                    observer's eye. The images that remain are the
                    consequence of repeated light reflections off more than
                    one of the faces. A maximum of two light reflections from
                    the item are allowed by right angle mirrors. Three, four, or
                    even more reflections might arise as the angle lowers.
                    </Paragraph>
                    <Paragraph>
                    It can be difficult to determine the image locations for numerous mirror systems.
                    Determine the principal image's location by applying the notion that the image distance
                    from the mirror is the same as the object distance from the mirror. A twofold reflection
                    transforms each primary image into a secondary image. A primary image can be
                    reflected (a geometry phrase, not a physics term) across the second mirror line to
                    generate a secondary image - an image of an image - by extending one of the mirror
                    lines. Consider the diagram below, which shows an object sandwiched between two
                    plane mirrors at a 60-degree angle. The major images created by the two plane mirrors
                    are I1 and I2. Image I3 was discovered by reflecting image I2 across the top mirror's
                    extension. Picture I4 was discovered by refracting image I1 across the screen.
                    </Paragraph>
                    <Card style={styles.imageHolder}>
                        <Card.Cover 
                        source={require('../../assets/images/module3/lesson2/image12.png')}
                        resizeMode={`contain`}
                        style={{'backgroundColor': '#FFFFFF'}}/>
                    </Card>
                    <Paragraph>
                    For these multiple mirror systems, ray diagrams are created similarly to those for
                    right angle mirror systems. After you've found the images, draw a line of sight towards
                    them; this will be the reflected ray that will eventually reach your eye. This reflected ray
                    is coupled with an incident ray that reflected off the mirror's other face for a secondary
                    picture. The rule of reflection can be utilized to figure out which way it was traveling
                    when it hit this side of the mirror. Retrace the path of light back to its source - the object
                    itself - to find the point of reflections on each face.
                    </Paragraph>

                  </Card.Content>
                </Card>
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

