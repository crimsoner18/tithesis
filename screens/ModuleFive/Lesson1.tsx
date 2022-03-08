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
                Let's Dig Deeper
                </Paragraph>
                <Card.Content>
                <Card style={styles.imageHolder}>
                <Card.Cover 
                source={require('../../assets/images/module5/lesson1/image1.png')}
                resizeMode={`contain`}
                style={{'backgroundColor': '#FFFFFF'}}/>
                </Card>
                  <Paragraph> 
                  A wave generated from a finite source or passing through a finite
                  aperture has a propensity to expand out as it propagates. The
                  interference of an unlimited number of waves released by a
                  continuous dispersion of source points causes diffraction. Every
                  point on a light wave front might be regarded a secondary source
                  of spherical wavelets, according to Huygens' principle. These
                  wavelets spread outward at the wave's typical pace. The traveling
                  wave is created when the wavelets released by all locations on the
                  wave front collide with one another. The concept of Huygens also applies to electromagnetic
                  waves. Any wave front may be replaced by a group of sources dispersed uniformly throughout
                  the wave front and radiating in phase while analyzing light propagation.
                  </Paragraph>
                <Card style={styles.imageHolder}>
                <Card.Cover 
                source={require('../../assets/images/module5/lesson1/image2.png')}
                resizeMode={`contain`}
                style={{'backgroundColor': '#FFFFFF'}}/>
                </Card>
                  <Paragraph> 
                  When light travels through a small opening in an otherwise opaque barrier that is equivalent in
                  size to the wavelength of the light, the wave front on the opposite side of the aperture resembles
                  the wave front depicted on the right.
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson1/image3.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph>
                  Light passes through the boundaries of the impediment. This phenomenon is
                  called diffraction. In a ripple tank containing water waves, diffraction is a wave
                  phenomenon that may be noticed.
                  </Paragraph>
                </Card.Content>
              </Card>
              <Card style={styles.card}>
                <Card.Content>
                <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
                Huygens's Principle
                </Paragraph>
                  <Paragraph> 
                  Basically, each point on a wave front can be thought of as a new source of wavelets, and the
                  development of the new wave front at a later time is determined by the propagation of these
                  wavelets.
                  </Paragraph>
                  <Paragraph> 
                  In 1678 the great Dutch physicist Christian Huygens (1629-1695) wrote a treatise called Traite de
                  la Lumiere on the wave theory of light, and in this work, he stated that the wave front of a
                  propagating wave of light at any instant conforms to the envelope of spherical wavelets emanating
                  from every point on the wave front at the prior instant (with the understanding that the wavelets
                  have the same speed as the overall wave).
                  </Paragraph>
                  <Paragraph>
                  Diffraction effects are the deviations from rectilinear propagation that occurs when light
                  encounters edges, screens and apertures. These effects were explained in 1816 by French
                  physicist Augustin-Jean Fresnel.
                  </Paragraph>
                  <Paragraph>
                  He was able to come up with an explanation of the linear and
                  spherical wave propagation, and derive the laws of reflection and
                  refraction using this principle. He could not, however, explain what
                  is commonly known as diffraction effects. Diffraction effects are the
                  deviations from rectilinear propagation that occurs when light
                  encounters edges, screens and apertures. These effects were
                  explained in 1816 by French physicist Augustin-Jean Fresnel.
                  </Paragraph>
                </Card.Content>
              </Card>

              <Card style={styles.card}>
                <Card.Content>
                  <Paragraph style={styles.paragraph}>
                  s=vts=vt,
                  </Paragraph >
                  <Paragraph> 
                  Basically, each point on a wave front can be thought of as a new source of wavelets, and the
                  development of the new wave front at a later time is determined by the propagation of these
                  wavelets.
                  </Paragraph>
                  <Paragraph> 
                  In 1678 the great Dutch physicist Christian Huygens (1629-1695) wrote a treatise called Traite de
                  la Lumiere on the wave theory of light, and in this work, he stated that the wave front of a
                  propagating wave of light at any instant conforms to the envelope of spherical wavelets emanating
                  from every point on the wave front at the prior instant (with the understanding that the wavelets
                  have the same speed as the overall wave).
                  </Paragraph>
                  <Paragraph>
                  Diffraction effects are the deviations from rectilinear propagation that occurs when light
                  encounters edges, screens and apertures. These effects were explained in 1816 by French
                  physicist Augustin-Jean Fresnel.
                  </Paragraph>
                  <Paragraph>
                  He was able to come up with an explanation of the linear and
                  spherical wave propagation, and derive the laws of reflection and
                  refraction using this principle. He could not, however, explain what
                  is commonly known as diffraction effects. Diffraction effects are the
                  deviations from rectilinear propagation that occurs when light
                  encounters edges, screens and apertures. These effects were
                  explained in 1816 by French physicist Augustin-Jean Fresnel.
                  </Paragraph>

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
});


