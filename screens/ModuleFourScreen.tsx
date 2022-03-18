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
const { width, height } = Dimensions.get("window");
const vw = width - 10;
const vh = height;
export default function ModuleFourScreen({ navigation,}: RootTabScreenProps<"ModuleFour">) {
  const [isLesson1Read, setLesson1Read] = useState(false);
  const [isLesson2Read, setLesson2Read] = useState(false);
  const [isLesson3Read, setLesson3Read] = useState(false);

  const getData = async () => {
    try {
      const l1 = await AsyncStorage.getItem('@M4L1isRead')
      const l2 = await AsyncStorage.getItem('@M4L2isRead')
      const l3 = await AsyncStorage.getItem('@M4L3isRead')

      if(l1 == 'true') {
        setLesson1Read(true);
      }
      if(l2 == 'true') {
        setLesson2Read(true);
      }
      if(l3 == 'true') {
        setLesson3Read(true);
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
      <ScrollView
        contentContainerStyle={styles.scrollview}
        scrollEnabled={true}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleFourIntroduction')}>
            <Card style={styles.card}>
              <Card.Title title="Introduction" subtitle="Introduction"/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ModuleFourLessonOne")}
        >
          <Card style={styles.card}>
            <Card.Title title="The Refraction And Lenses" subtitle="Lesson 1" style={{ backgroundColor: isLesson1Read ? '#90EE90' : 'none' }}/>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ModuleFourLessonTwo")}
        >
          <Card style={styles.card}>
            <Card.Title title="Lenses and Refraction of Light" subtitle="Lesson 2" style={{ backgroundColor: isLesson2Read ? '#90EE90' : 'none' }}/>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ModuleFourLessonThree")}
        >
          <Card style={styles.card}>
            <Card.Title title="Drawing Ray Diagrams for Convex Lenses" subtitle="Lesson 3" style={{ backgroundColor: isLesson3Read ? '#90EE90' : 'none' }}/>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleFourReference')}>
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
});
