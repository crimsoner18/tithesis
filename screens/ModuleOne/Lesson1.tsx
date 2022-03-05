import React from 'react';
import { Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

export default function LessonOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollview}>
              <Card style={styles.card}>
                <Card.Title title="What Causes Objects to Vibrate?" />
                <Card.Content>
                  <Paragraph style={styles.paragraph}> 
                    We can sense vibrations and know that others may be affected. However, we
                    have no way of knowing whether what we feel will be detrimental. The
                    mechanical oscillations of an object around an equilibrium point are known as
                    vibration. The oscillations can be regular, like a pendulum's motion, or random,
                    like the movement of a tire on a gravel road. The measurement of the overall
                    "pressure waves" (vibration energy) created by the vibrating equipment or
                    building is required for the investigation of the health impacts of vibration.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="What Causes Objects to Vibrate?" />
              </Card>
              <Card style={styles.card}>
                <Card.Title title="Other Vibrating Systems"/>
                <Card.Content>
                  <Card style={styles.imageHolder}>
                    <Card.Cover 
                    source={require('../../assets/images/module1/lesson1/image1.jpg')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    <Text style={styles.sourceText}
                    onPress={() => Linking.openURL('https://www.google.com/search?q=pendulum&sxsrf=AOaemvIFCfSv9C8c9J9OwVhWrPUt6wGjhg:1639192121746&source=lnms&tbm=isch')}>
                      https://www.google.com/search?q=pendulum&sxsrf=AOaemvIFCfSv9C8c9J9OwVhWrPUt6wGjhg:1639192121746&source=lnms&tbm=isch
                    </Text>
                  </Card>
                  <Paragraph style={styles.paragraph}> 
                    From its normal stationary posture, a vibrating object
                    moves back and forth. When an object goes from one
                    extreme position to the other and back again, it completes
                    a vibration cycle. The frequency of a vibrating object is the
                    number of cycles it completes in one second. A pendulum,
                    for example, is a body that is suspended from a fixed point
                    and swings back and forth under the action of gravity.
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                    High frequency objects, such as the piano string, have a
                    comparatively short period (i.e., a low value for period).
                    Periodic motion is a different quantity that can be used to
                    quantitatively define an object's motion. The frequency is the
                    number of complete cycles that occur in a given time period. Because the second
                    is the usual metric unit of time, frequency is measured in cycles per second. The
                    unit Hertz is similar to the unit cycles per second (abbreviated Hz). Heinrich
                    Rudolf Hertz, a 19th-century physicist who advanced our understanding of the
                    electromagnetic theory of light waves, is commemorated with the unit Hertz.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Other Vibrating Systems"/>
              </Card>
              <Card style={styles.card}>
                <Card.Title title="Hooke's Law"/>
                <Card.Content>
                  <Card style={styles.imageHolder}>
                    <Card.Cover source={require('../../assets/images/module1/lesson1/image2.jpg')}
                    resizeMode={`contain`}
                    style={{'backgroundColor': '#FFFFFF'}}/>
                    <Text style={styles.sourceText}
                    onPress={() => Linking.openURL('https://www.google.com/search?q=pendulum&sxsrf=AOaemvIFCfSv9C8c9J9OwVhWrPUt6wGjhg:1639192121746&source=lnms&tbm=isch')}>
                      https://www.google.com/search?q=pendulum&sxsrf=AOaemvIFCfSv9C8c9J9OwVhWrPUt6wGjhg:1639192121746&source=lnms&tbm=isch
                    </Text>
                  </Card>
                  <Paragraph> 
                    From its normal stationary posture, a vibrating object
                    moves back and forth. When an object goes from one
                    extreme position to the other and back again, it completes
                    a vibration cycle. The frequency of a vibrating object is the
                    number of cycles it completes in one second. A pendulum,
                    for example, is a body that is suspended from a fixed point
                    and swings back and forth under the action of gravity.
                    High frequency objects, such as the piano string, have a
                    comparatively short period (i.e., a low value for period).
                    Periodic motion is a different quantity that can be used to
                    quantitatively define an object's motion. The frequency is the
                    number of complete cycles that occur in a given time period. Because the second
                    is the usual metric unit of time, frequency is measured in cycles per second. The
                    unit Hertz is similar to the unit cycles per second (abbreviated Hz). Heinrich
                    Rudolf Hertz, a 19th-century physicist who advanced our understanding of the
                    electromagnetic theory of light waves, is commemorated with the unit Hertz.
                  </Paragraph>
                </Card.Content>
                <Card.Title title="" subtitle="Hooke's Law" />
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

