import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { RootTabScreenProps } from '../types';

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

export default function ModuleOneScreen({ navigation }: RootTabScreenProps<'ModuleOne'>) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview} scrollEnabled={true}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleTwoLessonOne')}>
            <Card style={styles.card}>
              <Card.Title title="Theories of Light" subtitle="Lesson 1"/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleTwoLessonTwo')}>
            <Card style={styles.card}>
              <Card.Title title="Visible Light and Color" subtitle="Lesson 2"/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleTwoLessonThree')}>
            <Card style={styles.card}>
              <Card.Title title="Basic Properties of Light" subtitle="Lesson 3"/>
            </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModuleTwoLessonFour')}>
            <Card style={styles.card}>
              <Card.Title title="Understanding Polarization and Malus law" subtitle="Lesson 4"/>
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

