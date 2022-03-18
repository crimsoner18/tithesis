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
      const l1 = await AsyncStorage.getItem('@M2L1isRead')
      const l2 = await AsyncStorage.getItem('@M2L2isRead')
      const l3 = await AsyncStorage.getItem('@M2L3isRead')
      const l4 = await AsyncStorage.getItem('@M2L4isRead')

      if(l1 == 'true') {
        setLesson1Read(true);
      }
      if(l2 == 'true') {
        setLesson2Read(true);
      }
      if(l3 == 'true') {
        setLesson3Read(true);
      }
      if(l4 == 'true') {
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
          onPress={() => navigation.navigate('ModuleTwoIntroduction')}>
            <Card style={styles.card}>
              <Card.Title title="Introduction" subtitle="Introduction"/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleTwoLessonOne')}>
            <Card style={styles.card}>
              <Card.Title title="Theories of Light" subtitle="Lesson 1" style={{ backgroundColor: isLesson1Read ? '#90EE90' : 'none' }}/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleTwoLessonTwo')}>
            <Card style={styles.card}>
              <Card.Title title="Visible Light and Color" subtitle="Lesson 2" style={{ backgroundColor: isLesson2Read ? '#90EE90' : 'none' }}/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleTwoLessonThree')}>
            <Card style={styles.card}>
              <Card.Title title="Basic Properties of Light" subtitle="Lesson 3" style={{ backgroundColor: isLesson3Read ? '#90EE90' : 'none' }}/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleTwoLessonFour')}>
            <Card style={styles.card}>
              <Card.Title title="Understanding Polarization and Malus law" subtitle="Lesson 4" style={{ backgroundColor: isLesson4Read ? '#90EE90' : 'none' }}/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleTwoConclusion')}>
            <Card style={styles.card}>
              <Card.Title title="Conclusion" subtitle="Conclusion"/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleTwoReference')}>
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

