import React from 'react';
import { Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import { Card, Paragraph, List } from 'react-native-paper';

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

export default function LessonTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollview}>
              <Card style={styles.card}>
                <Card.Title title="Visible Light and Color" />
                <Card.Content>
                  <Paragraph style={styles.paragraph}> 
                    Rainbows contain all the colors that you can see in the land below it is the
                    yellow of the hills, the green of the leaves and grasses. It contains other colors
                    as well. A rainbow contains all of the colors of visible light.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                    Visible light is light that has wavelengths that can be detected by the human eye. The
                    wavelength of visible light determines the color that the light appears. As you can see in
                    the figure below, light with the longest wavelength appears red, and light with the shortest
                    wavelength appears violet. In between are all the other colors of light that we can see.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Visible Light and Color" />
              </Card>
              <Card style={styles.card}>
                <Card.Content>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module2/lesson2/image1.jpg')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF', 'marginBottom': 10}}/>
                  </Card>
                  <Paragraph style={styles.paragraph}> 
                    Do you know ROY? The first letter of each of these main colors of light spells
                    out the name ROY G BIV. This fictitious name has long been used as a way to remember
                    the sequence of the colors of light, from longest to shortest wavelengths.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Visible Light and Color" />
              </Card>
              <Card style={styles.card}>
                <Card.Content>
                <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module2/lesson2/image2.jpg')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF', 'marginBottom': 10}}/>
                  </Card>
                  <Paragraph style={styles.paragraph}> 
                    A prism is a pyramid-shaped object made
                    of transparent matter, usually clear glass or plastic.
                    transmits light but slows it down. When light passes from air
                    to the glass of the prism, the change in speed causes the
                    light to change direction and bend. Different wavelengths of
                    light bend at different angles. This makes the beam of light
                    separate into the light of different wavelengths.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}> 
                    When all the wavelengths of the visible light spectrum strike
                    your eye at the same time, white is perceived. The sensation of white is not the result of
                    a single color of light. Rather, the sensation of white is the result of a mixture of two or
                    more colors of light. Thus, visible light - the mix of ROYGBIV - is sometimes referred to
                    as white light.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Visible Light and Color" />
              </Card>
              <Card style={styles.card}>
                <Card.Title title="Colors of an Objects" />
                <Card.Content>
                  <Paragraph style={styles.paragraph}> 
                    An opaque object does not let light pass through it. Instead, it reflects or absorbs the light
                    that strikes it. Many objects, such as the leaves, reflect just one or a few wavelengths of
                    visible light and absorb the rest. The wavelengths that are reflected determine the color
                    that an object appears to the human eye. Like the leaves appear green because they
                    reflect green light and absorb light of other wavelengths.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}> 
                    Another is a transparent object or the translucent material, such as window glass,
                    transmitting some or all the light that strikes it, which means that the light that passes
                    through that material is being reflected by it.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}> 
                    The human eye can distinguish only red, green, and blue light. These three colors are the
                    primary colors of light. All other colors of light can be created by combining the primary
                    colors. Secondary colors of light—cyan, yellow, and magenta—form when two primary
                    colors combine equally.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}> 
                    Pigments are substances that color materials by reflecting the light of certain wavelengths
                    and absorbing light of other wavelengths. The primary pigment colors are cyan, yellow,
                    and magenta. They can be combined to produce all other colors.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Colors of an Objects" />
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

