import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

export default function LessonOneScreen() {
  const setLessonAsRead = async (value: string) => {
    try {
      await AsyncStorage.setItem('@M3L2isRead', value)
    } catch (e) {
      console.log(e)
    }
  }

  setLessonAsRead('true');
  
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

