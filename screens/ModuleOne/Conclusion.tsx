import React, { useRef, useState } from "react";
import {
  Dimensions,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { Card, List, Paragraph, Title } from "react-native-paper";
import { RootTabScreenProps } from "../../types";
import { Video } from "expo-av";
const { width, height } = Dimensions.get("window");
const vw = width - 10;
const vh = height;

export default function LessonOneScreen({
  navigation,
}: RootTabScreenProps<"ModuleOne">) {
  const video = React.useRef(null);

  const [status, setStatus] = React.useState({});
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Card style={styles.card}>
          <Card.Title title="Activity: “SURFING WAVES”" />
          <Card.Content>
            <Paragraph style={{fontWeight:"bold",marginBottom:20,marginLeft:20}}>
            Adapted from (SEA) Sea Earth Atmosphere
            </Paragraph>
            <Paragraph style={{marginLeft:10, textDecorationLine: 'underline'}}>
            Part A. Make Rope Waves
            </Paragraph>
            <Paragraph style={{marginBottom:20, marginLeft:20}}>
            • Tape (about 12 feet){"\n"}
            • Long rope or extension cord (about 12 feet)
            </Paragraph>
            <Paragraph style={{marginLeft:10, textDecorationLine: 'underline'}}>
            Part B. Make Water Waves
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            • A small, floating object
            </Paragraph>
            <Paragraph style={{marginLeft:30}}>
            (Tin foil or a bottle cap works well; you can also make your own floating object out
            shape it to resemble a surfboard or boat)
            </Paragraph>
            <Paragraph style={{marginBottom:30, marginLeft:20}}>
            • Large clear tray to hold water{"\n"}
            • Straw (preferably metal, glass or silicone to avoid single use plastics)
            </Paragraph>
            <Paragraph style={{marginLeft:30}}>
            Procedure:
            </Paragraph>
            <Paragraph style={{fontWeight:"bold",marginBottom:20,marginLeft:20}}>
            Part A. Make rope waves!
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            1. Practice making a wave that shows the basic features of crest, trough, amplitude, and
            wavelength. Follow along on your worksheet to answer questions, build, and test your
            model.{"\n"}
            2. Tape a long straight line on the floor to represent the rope at rest. This tape line should
            be about the same length as your wave model rope (about 12 feet).
            </Paragraph>
            <Paragraph style={{marginLeft:30}}>
            (Note: You can tape it as a dotted line to conserve tape.)
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            3. Line up your rope or extension cord on the taped line and have one person sit at each end.
            </Paragraph>
            <Paragraph style={{marginLeft:30}}>
            (Note: you can also attach one end of the rope to something stable, like a desk, to keep it steady.)
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            4. Place a piece of tape around the rope (at about the half-way mark). The tape represents
            an object (Fig. 3).
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module1/conclusion/image1.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
            <Paragraph style={{marginBottom:20}}>
            Fig. 3. An example set-up to make waves with an extension cord.
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            5. Have one person hold their end still, while the other person moves their hand side to
            side, against the ground, to make waves (Fig. 4).{"\n"}
            6. Practice making waves
            </Paragraph>
            <Paragraph style={{marginLeft:30}}>
            a. Take turns making waves from either side!{"\n"}
            b. Try moving the rope faster. Then, try moving the rope slower.{"\n"}
            c. Try moving your arm in wider strokes on the ground. Then, try moving the rope in
            narrower strokes on the ground.
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            7. Use your best practice technique to make a wave with your rope. Stop the motion so
            that the rope stays in its wave shape (Fig. 4).
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module1/conclusion/image2.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
            <Paragraph style={{marginBottom:20}}>
            Fig. 4. If you make waves and then stop your movement, you can see the shape of the wave.
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            8. Describe the shape of the wave. Write or draw your observations on your worksheet.{"\n"}
            9. Label your wave diagram with the vocabulary below (Fig. 5):
            </Paragraph>
            <Card style={styles.imageHolder}>
              <Card.Cover
                source={require("../../assets/images/module1/conclusion/image3.png")}
                resizeMode={`contain`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Card>
            <Paragraph style={{marginBottom:20}}>
            Fig. 5. Use this template to label amplitude, wavelength, crest, trough, disturbance, direction of energy flow, and motion of an object.
            </Paragraph>
            <View style={styles.row}>
              <Text style={{width:'30%'}}>Crest</Text>
              <Text style={{width:'70%'}}>the top of the wave</Text>
            </View>
            <View style={styles.row}>
              <Text style={{width:'30%'}}>Trough</Text>
              <Text style={{width:'70%'}}>the bottom of the wave</Text>
            </View>
            <View style={styles.row}>
              <Text style={{width:'30%'}}>Amplitude</Text>
              <Text style={{width:'70%'}}>The distance from crest of the wave to the still-water level. Some people refer to amplitude as "from crest to rest."</Text>
            </View>
            <View style={styles.row}>
              <Text style={{width:'30%'}}>Wavelength</Text>
              <Text style={{width:'70%'}}>the distance from one wave crest to the next.</Text>
            </View>
            <Paragraph>
            Where the disturbance occured to make waves (i.e. which side of your rope did you move).
            </Paragraph>
            <Paragraph>
            The energy flow from that disturbance.
            </Paragraph>
            <Paragraph>
            The motion of an object.
            </Paragraph>
            

            
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Paragraph style={{fontWeight:"bold",marginBottom:20,marginLeft:10}}>
            Part B. Make water waves!
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            1. Before building your wave tank model to explore ocean waves, think about the last time
            you were at the beach (or watch waves from an internet beach camera) and answer
            these questions:
            </Paragraph>
            <Paragraph style={{marginLeft:30}}>
            a. What did the waves look like? Describe.{"\n"}
            b. How big were the waves?
            </Paragraph>
            <Paragraph style={{marginLeft:40}}>
            i. What is the term that scientists use to describe wave height?
            </Paragraph>
            <Paragraph style={{marginLeft:30}}>
            c. Were the waves close together or were they far apart?
            </Paragraph>
            <Paragraph style={{marginLeft:40}}>
            i. What is the term that scientists use to describe the distance between waves?
            </Paragraph>
            <Paragraph style={{marginLeft:20,marginBottom:20}}>
            2. Now practice making waves in your wave tank!{"\n"}
            3. Fill your wave tank about halfway with water. Make sure there isn't too much water that
            will spill over the sides!{"\n"}
            4. Conduct your trials.
            </Paragraph>
            <Paragraph style={{marginLeft:40, textDecorationLine: 'underline',fontWeight:'bold'}}>
            Trial #1: Blowing
            </Paragraph>
            <Paragraph style={{marginLeft:50,marginBottom:20}}>
            a. Using a straw, blow across the water. If you donʻt have a straw, you can use your breath.{"\n"}
            b. Describe what you see.{"\n"}
            c. Play with making different waves by blowing in different directions or with varying strength.
            </Paragraph>
            <Paragraph style={{marginLeft:40, textDecorationLine: 'underline',fontWeight:'bold'}}>
            Trial #2: Tilting
            </Paragraph>
            <Paragraph style={{marginLeft:50,marginBottom:20}}>
            a. Gently lift one side of the bucket up a few inches and lower it back down to the table.{"\n"}
            b. Describe what you see.{"\n"}
            c. Did your wave have a large or small amplitude compared to trial #1?{"\n"}
            d. Did your wave have a long or short wavelength compared to trial #1?{"\n"}
            e. Play around with making different waves and see if you can create repeating
            patterns in the wave energy.{"\n"}
            (Hint: lift the bucket a little higher, or lift it twice in a row. Be careful not to
            spill water out of the bucket!)
            </Paragraph>
            <Paragraph style={{marginLeft:40, textDecorationLine: 'underline',fontWeight:'bold'}}>
            Trial #3: Add an object
            </Paragraph>
            <Paragraph style={{marginLeft:50,marginBottom:20}}>
            a. Add your floating object on one side of the bucket.{"\n"}
            b. Make waves by blowing as you did in trial #1. Be sure not to blow directly on
            the object, but instead keep it directed at the water!{"\n"}
            c. What happened to your object? How did it move?{"\n"}
            d. Make waves by tilting, as you did in trial #2.{"\n"}
            e. What happened to your object? How did it move?{"\n"}
            f. See if you can get your object to move to the other side of the container.
            </Paragraph>
            <Paragraph style={{marginLeft:40}}>
            5. Can you see the similarities in the waves you made with the rope with the waves in your wave tank?
            </Paragraph>
            <Paragraph style={{borderBottomColor: 'black', borderBottomWidth: 1,}}>
            </Paragraph>
            <Paragraph style={{marginLeft:30, marginTop:20}}>
            Activity Questions:
            </Paragraph>
            <Paragraph style={{marginLeft:20}}>
            1. Describe the general motion of the waves you created.{"\n"}
            2. How did the waves change in amplitude and wavelength when you:
            </Paragraph>
            <Paragraph style={{marginLeft:20,}}>
            a. Blew harder?{"\n"}
            b. Tilted the bucket higher?
            </Paragraph>
            <Paragraph style={{marginLeft:20,marginBottom:20}}>
            3. What would be different if you had a longer tank?{"\n"}
            4. How were your waves similar to ocean waves breaking on the shore? How were they
            different?{"\n"}
            5. What happened to the floating object when you made waves?{"\n"}
            6. Did your object catch and move forward on every wave you made? If not, in what
            directions did the object move on the waves it did not ride?{"\n"}
            7. How is the motion of your floating object similar and different from a surfer waiting to
            catch a wave in real life?
            </Paragraph>          
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Paragraph style={{marginLeft:30, fontWeight:'bold'}}>
            What to remember?
            </Paragraph>
            <Paragraph style={{marginBottom:20}}>
            Vibrating items, as we've seen in this lesson, wiggle in place. They move back
            and forth around a fixed point. Classic examples of vibrating motion are a simple
            pendulum and a mass on a spring. The use of motion detectors demonstrates that
            the vibrations of these objects are sinusoidal, despite the fact that this is not obvious
            from plain viewing. The way in which the position and velocity vary with respect to
            time has a modest wave-like pattern.
            </Paragraph>
            <Paragraph>
            A wave is a disturbance that moves through a medium, delivering energy from one point
            (its source) to another point (its destination) without transporting substance. Each
            medium particle is moved for a short time before returning to its original equilibrium
            position. We have looked at transverse and longitudinal waves in water and the air and
            some of their properties. All waves are linked to a behavior that is both oscillatory and
            periodic because they repeat after some amount of time. But it’s not only waves that
            display this type of behavior. The key concepts and principles you have studied in this
            part are: types of wave Waves can be seen as oscillations along fluid boundaries where
            restoring forces return the boundary to rest. In transverse waves the particles move at
            right angles to the direction of wave propagation. In longitudinal waves the direction of
            motion of the particles is in the same direction as the wave propagation. Waves can be
            described in terms of their amplitude, wavelength, and/or period properties of waves
            Animals can use waves for communication navigation and finding prey. Humans can
            use ultrasound waves for medical imaging. The wave equation is used to address
            mathematical difficulties in the example above. It also demonstrates the principle that
            wave speed is determined by medium factors rather than wave. Wave speed is
            computed by multiplying wavelength by frequency, although wavelength changes have
            no effect on wave speed. Rather, a change in wavelength has the opposite effect on
            frequency. The frequency is halved when the wavelength is doubled, but the wave
            speed remains unchanged.
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
    fontWeight: "bold",
  },
  parent: {
    height: vh,
    marginBottom: -50,
  },
  scrollview: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    flexGrow: 1,
  },
  card: {
    margin: 5,
    width: vw,
  },
  sourceText: {
    fontSize: 10,
    color: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  imageHolder: {
    margin: 5,
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15

  },
});
