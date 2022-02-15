import React from 'react';
import { Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ModuleOneScreen({ navigation }: RootTabScreenProps<'ModuleOne'>) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview} scrollEnabled={true}>
        <Text> Module 1: Vibrations</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    borderRadius: 8,
    padding: 6,
    borderColor: 'red',
    backgroundColor: 'green',
    borderWidth: 1,
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
