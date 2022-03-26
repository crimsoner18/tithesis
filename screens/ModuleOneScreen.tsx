import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-root-toast';

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

const lessonIsClosed = () => {
  Toast.show('This lesson is closed until you finish the previous ones.', { duration: Toast.durations.LONG, });
}

export default function ModuleOneScreen({ navigation }: RootTabScreenProps<'ModuleOne'>) {
  const [isLesson1Read, setLesson1Read] = useState(false);
  const [isLesson1Passed, setLesson1Passed] = useState(false);
  const [isLesson2Read, setLesson2Read] = useState(false);
  const [isLesson2Passed, setLesson2Passed] = useState(false);
  const [isLesson3Read, setLesson3Read] = useState(false);
  const [isLesson3Passed, setLesson3Passed] = useState(false);
  const [isLesson4Read, setLesson4Read] = useState(false);

  const getData = async () => {
    try {
      const m1l1 = await AsyncStorage.getItem('@M1L1isRead');
      const m1l1Passed = await AsyncStorage.getItem('@M1L1Passed');
      const m1l2 = await AsyncStorage.getItem('@M1L2isRead');
      const m1l2Passed = await AsyncStorage.getItem('@M1L2Passed');
      const m1l3 = await AsyncStorage.getItem('@M1L3isRead');
      const m1l3Passed = await AsyncStorage.getItem('@M1L3Passed');
      const m1l4 = await AsyncStorage.getItem('@M1L4isRead');
      const m1l4Passed = await AsyncStorage.getItem('@M1L4Passed');

      if(m1l1 == 'true') {
        setLesson1Read(true);
      }
      if(m1l1Passed == 'true') {
        setLesson1Passed(true);
      }
      if(m1l2 == 'true') {
        setLesson2Read(true);
      }
      if(m1l2Passed == 'true') {
        setLesson2Passed(true);
      }
      if(m1l3 == 'true') {
        setLesson3Read(true);
      }
      if(m1l3Passed == 'true') {
        setLesson3Passed(true);
      }
      if(m1l4 == 'true') {
        setLesson4Read(true);
      }
      if(m1l4Passed == 'true') {
        try {
          await AsyncStorage.setItem('@M1isCompleted', 'true');
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
        {
          isLesson1Passed ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('ModuleOneLessonTwo')}>
                <Card style={styles.card}>
                  <Card.Title title="The Nature of a Wave" subtitle="Lesson 2" style={{ backgroundColor: isLesson2Read ? '#90EE90' : 'white' }}/>
                </Card>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => lessonIsClosed()}>
                <Card style={styles.card}>
                  <Card.Title title="The Nature of a Wave" subtitle="Lesson 2" style={{ backgroundColor: 'grey' }}/>
                </Card>
            </TouchableOpacity>
          )
        }
        {
          isLesson2Passed ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('ModuleOneLessonThree')}>
                <Card style={styles.card}>
                  <Card.Title title="Properties of a Wave" subtitle="Lesson 3" style={{ backgroundColor: isLesson3Read ? '#90EE90' : 'white' }}/>
                </Card>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => lessonIsClosed()}>
                <Card style={styles.card}>
                  <Card.Title title="Properties of a Wave" subtitle="Lesson 3" style={{ backgroundColor: 'grey' }}/>
                </Card>
            </TouchableOpacity>
          )
        }
        {
          isLesson3Passed ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('ModuleOneLessonFour')}>
                <Card style={styles.card}>
                  <Card.Title title="Behavior of Waves" subtitle="Lesson 4" style={{ backgroundColor: isLesson4Read ? '#90EE90' : 'white' }}/>
                </Card>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => lessonIsClosed()}>
                <Card style={styles.card}>
                  <Card.Title title="Behavior of Waves" subtitle="Lesson 4" style={{ backgroundColor: 'grey' }}/>
                </Card>
            </TouchableOpacity>
          )
        }
        
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
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});

