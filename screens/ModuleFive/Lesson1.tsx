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
                  s=vts=vt
                  </Paragraph >
                  <Paragraph>
                  where s is the distance, v is the propagation speed, and t is time.
                  </Paragraph >
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson1/image4.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph>
                  Each point on the wavefront generates a wave with speed v, which
                  is semicircular and occurs at time t. The wavelets and the new
                  wavefront are tangent. This rule applies to all sorts of waves, not
                  only mild ones. Reflection, refraction, and interference are all
                  described using this theory. illustrates how Huygens' Principle may
                  be applied to refraction and how it can be used to explain reflection.
                  </Paragraph >
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson1/image5.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>             
                  <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
                  Huygens’s Refraction:
                  </Paragraph>
                  <Paragraph>
                  Huygens’s principle applied to a straight wavefront traveling from one
                  medium to another where its speed is less. The ray bends toward the perpendicular, since the
                  wavelets have a lower speed in the second medium.
                  </Paragraph >
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson1/image6.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                </Card.Content>
              </Card>    

              <Card style={styles.card}>
                <Card.Content>                            
                  <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
                  Single Slit
                  </Paragraph>
                  <Paragraph>
                  When light flows through a single slit with a width w on the order of the wavelength of the light, a
                  single slit diffraction pattern is seen on a screen L {'>>'} w distant from the slit. Angle determines the
                  intensity. According to Huygens' principle, each component of the slit can be considered a wave
                  emitter. The diffraction pattern is formed when all of these waves collide. We have constructive
                  interference when the crest meets the crest and
                  destructive interference where the crest reaches
                  the trough.
                  </Paragraph >
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson1/image7.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph>
                  Wave fronts are simply plane waves very far away from a point source. The diffraction pattern is
                  known as Fraunhofer diffraction, and the regime is known as Fraunhofer. From a single slit, the
                  following basic arguments may be used to find the locations of all peaks and minima in the
                  Fraunhofer diffraction pattern.
                  </Paragraph >            
                  <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
                  Single Slit
                  </Paragraph> 
                  <Paragraph style={{marginTop:20, marginLeft:20}}>
                  • A slit of width(w), as you can see in the diagram below.
                  Inside the slit, a plane wave is incident from the bottom, and all
                  points oscillate in phase.
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson1/image8.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph style={{marginTop:20, marginLeft:20}}>
                  • We may have destructive interference between the ray at the
                  right edge (ray 1) and the center ray (ray 2) when light leaves
                  the slit in a specific direction indicated by the angle (ray 7). The
                  rays arriving from various spots inside the slit must travel varying
                  distances to arrive at a distant screen perpendicular to the
                  direction of propagation of the beams. Their optical paths are
                  different lengths. If ray 7 needs to traverse an extra half
                  wavelength (/2) in comparison to ray 1, ray 1 and ray 7 will
                  interfere destructively. The crest meets the trough..
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson1/Image9.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                </Card.Content>
              </Card>

              <Card style={styles.card}>
                <Card.Content>   
                  <Paragraph>
                  When two beams' optical path lengths differ by λ/2, they interact destructively. To be half a
                  wavelength out of phase with ray 1 and ray 7, we need (w/2)sinθ = λ/2 or wsinθ = λ.
                  </Paragraph>
                  <Paragraph>
                  However, if these two rays interact destructively, rays 2 and 8, 3 and 8, 6 and 10, 5 and 11, and
                  6 and 12 do as well, according to geometry. In effect, light from one half of the opening interferes
                  destructively and cancels out light from the other half.
                  </Paragraph>
                  <Paragraph style={{marginBottom:20}}>
                  The dark fringes are caused by destructive interference. Dark fringes in a single slit's diffraction
                  pattern are produced at angles θ which w sinθ = mλ, where m is an integer, m = 1, 2, 3, ... . In
                  the first dark fringe we used w sinθ = λ.
                  </Paragraph>
                  <Paragraph style={{marginBottom:20}}>
                  When w is smaller than λ , the equation wsinθ = λ has no solution and no dark fringes are produced.
                  If the interference pattern is viewed on a screen a distance L from the slits, then the
                  wavelength can be found from the spacing of the fringes. We have λ = w sinθ/m and sinθ =
                  z/(L2 + z2)1/2), or
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  λ = zw/(m(L2 + z2)1/2),
                  </Paragraph>
                  <Paragraph style={{marginTop:20,marginBottom:20}}>
                  where z is the distance from the center of the interference pattern to the mth dark line in the
                  pattern. If L {'>>'} z then (L2 + z2)1/2 ~ L and we can write
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  λ = zw/(mL).
                  </Paragraph>
                  <Paragraph style={{fontWeight: "bold", marginTop:40, marginLeft:20}}>
                  Sample Problem:
                  </Paragraph>
                  <Paragraph>
                  When a monochromatic light source shines through a 0.2 mm wide slit onto a screen 3.5 m away, the first
                  dark band in the pattern appears 9.1 mm from the center of the bright band. What is the wavelength of
                  the light?
                  </Paragraph>
                  <Paragraph style={{marginTop:10, marginLeft:20}}>
                  • Solution:
                  </Paragraph>
                  <Paragraph style={{marginLeft:40}}>
                  z = 9.1 mm = 9.1*10-3 m{"\n"}
                  L = 3.5 m{"\n"}
                  w = 0.2 mm = 2*10-4 m{"\n"}
                  L {'>>'} z, therefore λ = zw/(mL){"\n"}
                  λ = (9.1*10-3 m)(2*10-4 m)/(3.5 m){"\n"}
                  λ = 5.2*10-7 m = 520 nm
                  </Paragraph>
                </Card.Content>
              </Card>

              <Card style={styles.card}>
                <Card.Content>
                  <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
                  Double Slit
                  </Paragraph>
                  <Paragraph>
                  When light is incident on an obstruction with two extremely small slits separated by d, the wavelets
                  emitted by each slit will interact behind the object. Waves diffracted and spread out as they travel
                  through each slot. The waves from the two slits can now constructively or destructively interact at
                  angles where the single slit diffraction pattern yields nonzero intensity.
                  </Paragraph >
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson1/image10.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph>
                  In the event that we let the light fall onto a screen behind the block, we will see an example of splendid
                  and dull stripes on the screen in the area where we possibly see a diffraction greatest when utilizing a
                  single slit. An Interference fringe pattern is an example made out of splendid and dull lines. The
                  splendid lines address helpful impedance, and the dull lines address ruinous obstruction.
                  </Paragraph >
                  <Paragraph>
                  Constructive interference of light from two slits going the same distance to the screen causes the dazzling
                  fringe in the centre of the figure on the right. The zero-order fringe is what it's called. Trough meets
                  trough and crest meets crest. Destructive interference is responsible for the black fringes on
                  each side of the zero-order fringe. The distance traveled by light from one slit is 12 wavelengths
                  longer than that of light from the other slit. At these points, crests and troughs meet. The first-
                  order fringes, one on either side of the zero-order fringe, follow the dark fringes. To reach these
                  spots, light from one slit travel one wavelength longer than light from the other slit. Crest meets
                  crest once more.
                  </Paragraph>
                  <Paragraph style={{marginBottom:20}}>
                  The geometry for the fringe design is shown in the diagram on the right. We will see constructive
                  interference at certain angles if light with wavelength travels through two slits separated by a
                  distance d. The constructive interference condition is used to find these angles., which is
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  d sinθ = mλ, m = 0, 1, 2, ...
                  </Paragraph>
                  <Paragraph style={{marginBottom:20, marginTop:20}}>
                  The distance between the two slits and the screen is an integer number of wavelengths different.
                  The crest crosses the crest. The angles at which dark fringes appear can be determined by using
                  the destructive interference condition, which is
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  d sinθ = (m+1⁄2)λ, m = 0, 1, 2, ...
                  </Paragraph>
                  <Paragraph style={{marginTop:20}}>
                  The distances from the two slits to the screen differ by an integer number of wavelengths + 1⁄2
                  wavelength. Crest meets trough.
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson1/image11.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph style={{marginBottom:20}}>
                  If the interference pattern is viewed on a screen a distance L from the slits, then the wavelength can be
                  found from the spacing of the fringes. We have sinθ = z/(L2 + z2) 1/2 and λ = zd/(m(L2 + z2)1/2), 
                  where z is the distance from the center of the interference pattern to the mth bright line in the pattern.
                  If L {'>>'} z then (L2 + z2)1/2 ~ L and we can write
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  λ = zd/(mL).
                  </Paragraph>
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson1/image12.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                </Card.Content>
              </Card> 

              <Card style={styles.card}>
                <Card.Content>
                  <Paragraph style={{fontWeight: "bold", marginTop:20, marginLeft:20}}>
                  Diffraction Grating
                  </Paragraph>
                  <Paragraph>
                  We've seen how a single slit or two slits may form diffraction patterns. When light passes through
                  a diffraction grating, which is made up of an array of similar, evenly spaced slits, the dazzling
                  fringes that result from constructive interference of light waves from separate slits appear at the
                  same angles as if there were just two slits. However, the pattern is considerably more defined.
                  </Paragraph >
                  <Card style={styles.imageHolder}>
                  <Card.Cover 
                  source={require('../../assets/images/module5/lesson1/image13.png')}
                  resizeMode={`contain`}
                  style={{'backgroundColor': '#FFFFFF'}}/>
                  </Card>
                  <Paragraph>
                  The figure on the right shows the interference pattern for various numbers of slits. The width of all 
                  slits is 50 micrometers and the spacing between all slits is 150 micrometers. The location of the maxima 
                  for two slits is also the location of the maxima for multiple slits. The single slit pattern acts as an 
                  envelope for the multiple slit patterns.
                  </Paragraph >
                  <Paragraph style={{marginBottom:20}}>
                  Diffraction gratings contain a large number of parallel, closely spaced slits or grooves. They produce
                  interference maxima at angles θ given by d sinθ = mλ. Because the spacing between the slits is generally
                  very small, the angles θ are generally quite large. We cannot use the small angle approximation
                  for relating wavelength and the position of the maxima on a screen for gratings, but have to use
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                  sinθ = z/(L2 + z2)1/2
                  </Paragraph>
                  <Paragraph style={{marginTop:20}}>
                  Diffraction gratings disperse white light into its component colors because different wavelengths
                  produce bright fringes at different angles. d sinθ = mλ,
                  </Paragraph>
                  <Paragraph>
                  The spectral pattern is repeated on either side of the main pattern. These repetitions are called
                  "higher order spectra". There are often many of them, each one fainter than the previous one. If
                  the distance between slits is d, and the angle to a bright fringe of a particular color is θ, the
                  wavelength of the light can be calculated.
                  </Paragraph>
                  <Paragraph style={{fontWeight: "bold", marginTop:40, marginLeft:20}}>
                  Sample Problem:
                  </Paragraph>
                  <Paragraph>
                  A diffraction grating has 420 lines per mm. The grating is used to observe normally incident light with a
                  wavelength of 440 nm. The grating is placed 1.3 m from a screen. Where on the screen will the first
                  order bright line appear?
                  </Paragraph>
                  <Paragraph style={{marginTop:10, marginLeft:20}}>
                  • Solution:
                  </Paragraph>
                  <Paragraph style={{marginLeft:40}}>
                  d sinθ = λ{"\n"}
                  d = (1/420) mm = 2.38*10-3 mm = 2.38*10-6 m{"\n"}
                  λ = 440 nm = 4.40*10-7 m{"\n"}
                  L = 1.3 m = distance to the screen.{"\n"}
                  sinθ = λ/d = 10.65o.{"\n"}
                  z = L tanq = 24.5 cm = distance from the central maximum.
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
    fontSize: 20
  },
});


