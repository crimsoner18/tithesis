import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { RootTabScreenProps } from '../types';

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

export default function ModuleOneScreen({ navigation }: RootTabScreenProps<'ModuleOne'>) {
  const [isLesson1Read, setLesson1Read] = useState(false);
  const [isLesson2Read, setLesson2Read] = useState(false);
  const [isLesson3Read, setLesson3Read] = useState(false);

  const getData = async () => {
    try {
      const l1 = await AsyncStorage.getItem('@M3L1isRead')
      const l2 = await AsyncStorage.getItem('@M3L2isRead')
      const l3 = await AsyncStorage.getItem('@M3L3isRead')

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
      <ScrollView contentContainerStyle={styles.scrollview} scrollEnabled={true}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleThreeLessonOne')}>
            <Card style={styles.card}>
              <Card.Title title="Reflection and its Importance" subtitle="Lesson 1" style={{ backgroundColor: isLesson1Read ? '#90EE90' : 'none' }}/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleThreeLessonTwo')}>
            <Card style={styles.card}>
              <Card.Title title="Image Formation in Plane Mirrors" subtitle="Lesson 2" style={{ backgroundColor: isLesson2Read ? '#90EE90' : 'none' }}/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleThreeLessonThree')}>
            <Card style={styles.card}>
<<<<<<< HEAD
              <Card.Title title="Concave and Convex Mirrors" subtitle="Lesson 3" style={{ backgroundColor: isLesson2Read ? '#90EE90' : 'none' }}/>
=======
              <Card.Title title="Concave and Convex Mirrors" subtitle="Lesson 3" style={{ backgroundColor: isLesson3Read ? '#90EE90' : 'none' }}/>
>>>>>>> 3ce47137ca864ffd3f13ea24b2e6f43c479f3b74
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
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
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
    alignItems: 'center',
  }
});

