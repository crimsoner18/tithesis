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
  const [isLesson4Read, setLesson4Read] = useState(false);

  const getData = async () => {
    try {
      const m1l1 = await AsyncStorage.getItem('@M1L1isRead')
      const m1l2 = await AsyncStorage.getItem('@M1L2isRead')
      const m1l3 = await AsyncStorage.getItem('@M1L3isRead')
      const m1l4 = await AsyncStorage.getItem('@M1L4isRead')

      if(m1l1 == 'true') {
        setLesson1Read(true);
      }
      if(m1l2 == 'true') {
        setLesson2Read(true);
      }
      if(m1l3 == 'true') {
        setLesson3Read(true);
      }
      if(m1l4 == 'true') {
        setLesson4Read(true);
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
          onPress={() => navigation.navigate('ModuleOneIntroduction')}>
            <Card style={styles.card}>
              <Card.Title title="Introduction" subtitle="Introduction"/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleOneLessonOne')}>
            <Card style={styles.card}>
              <Card.Title title="Vibrations" subtitle="Lesson 1" style={{ backgroundColor: isLesson1Read ? '#90EE90' : 'none' }}/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleOneLessonTwo')}>
            <Card style={styles.card}>
              <Card.Title title="The Nature of a Wave" subtitle="Lesson 2" style={{ backgroundColor: isLesson2Read ? '#90EE90' : 'none' }}/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleOneLessonThree')}>
            <Card style={styles.card}>
              <Card.Title title="Properties of a Wave" subtitle="Lesson 3" style={{ backgroundColor: isLesson3Read ? '#90EE90' : 'none' }}/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleOneLessonFour')}>
            <Card style={styles.card}>
              <Card.Title title="Behavior of Waves" subtitle="Lesson 4" style={{ backgroundColor: isLesson4Read ? '#90EE90' : 'none' }}/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleOneConclusion')}>
            <Card style={styles.card}>
              <Card.Title title="Conclusion" subtitle="Conclusion"/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleOneReference')}>
            <Card style={styles.card}>
              <Card.Title title="Reference" subtitle="Reference"/>
            </Card>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('ModuleOneLessonFour')}>
            <Card style={styles.card}>
              <Card.Title title="The Nature of a Wave" subtitle="Lesson 4"/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleOneLessonFive')}>
            <Card style={styles.card}>
              <Card.Title title="Vibrations" subtitle="Lesson 5"/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleOneLessonSix')}>
            <Card style={styles.card}>
              <Card.Title title="The Nature of a Wave" subtitle="Lesson 6"/>
            </Card>
        </TouchableOpacity> */}
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

