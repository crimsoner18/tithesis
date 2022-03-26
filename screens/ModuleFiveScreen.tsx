import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Card } from "react-native-paper";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-root-toast";

const { width, height } = Dimensions.get("window");
const vw = width - 10;
const vh = height;

const lessonIsClosed = () => {
  Toast.show('This lesson is closed until you finish the previous ones.', { duration: Toast.durations.LONG, });
}

export default function ModuleFourScreen({navigation}: RootTabScreenProps<"ModuleFive">) {
  const [isLesson1Read, setLesson1Read] = useState(false);
  const [isLesson1Passed, setLesson1Passed] = useState(false);
  const [isLesson2Read, setLesson2Read] = useState(false);
  const [isLesson2Passed, setLesson2Passed] = useState(false);

  const getData = async () => {
    try {
      const l1 = await AsyncStorage.getItem('@M5L1isRead')
      const l1Passed = await AsyncStorage.getItem('@M5L1Passed')
      const l2 = await AsyncStorage.getItem('@M5L2isRead')
      const l2Passed = await AsyncStorage.getItem('@M5L2Passed')

      if(l1 == 'true') {
        setLesson1Read(true);
      }
      if(l1Passed == 'true') {
        setLesson1Passed(true);
      }
      if(l2 == 'true') {
        setLesson2Read(true);
      }
      if(l2Passed == 'true') {
        try {
          await AsyncStorage.setItem('@M5isCompleted', 'true');
        } catch (e) {
          console.log(e)
        }
      }
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA']}
        style={styles.background}
      />
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleFiveIntroduction')}>
            <Card style={styles.card}>
              <Card.Title title="Introduction" subtitle="Introduction"/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ModuleFiveLessonOne")}
        >
          <Card style={styles.card}>
            <Card.Title title="Diffraction" subtitle="Lesson 1" style={{ backgroundColor: isLesson1Read ? '#90EE90' : 'none' }}/>
          </Card>
        </TouchableOpacity>
        
        {
          isLesson1Passed ? (
            <TouchableOpacity
              onPress={() => navigation.navigate("ModuleFiveLessonTwo")}
            >
              <Card style={styles.card}>
                <Card.Title title="Interference" subtitle="Lesson 2" style={{ backgroundColor: isLesson2Read ? '#90EE90' : 'white' }}/>
              </Card>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => lessonIsClosed()}>
              <Card style={styles.card}>
                <Card.Title title="Interference" subtitle="Lesson 2" style={{ backgroundColor: 'grey' }}/>
              </Card>
            </TouchableOpacity>
          )
        }

        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleFiveConclusion')}>
            <Card style={styles.card}>
              <Card.Title title="Conclusion" subtitle="Conclusion"/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleFiveReference')}>
            <Card style={styles.card}>
              <Card.Title title="Reference" subtitle="Reference"/>
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
    alignItems: "center",
  },
  scrollview: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    flexGrow: 1,
    marginTop: -80,
  },
  card: {
    marginLeft: 5,
    marginRight: 5,
    width: vw,
    marginBottom: 5,
  },
  text: {
    alignItems: "center",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});
