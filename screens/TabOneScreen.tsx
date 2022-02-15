import React from 'react';
import { Button, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollview} scrollEnabled={true}>
            <Pressable
                onPress={() => navigation.navigate('ModuleOne')}
                style={styles.button}
            >
                <Text style={styles.title}> Module 1: Vibrations</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('ModuleTwo')}
                style={styles.button}
            >
                <Text style={styles.title}> Module 2: Vibrations</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('ModuleThree')}
                style={styles.button}
            >
                <Text style={styles.title}> Module 3: Vibrations</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('ModuleFour')}
                style={styles.button}
            >
                <Text style={styles.title}> Module 4: Vibrations</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('ModuleFive')}
                style={styles.button}
            >
                <Text style={styles.title}> Module 5: Vibrations</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('ModuleSix')}
                style={styles.button}
            >
                <Text style={styles.title}> Module 6: Vibrations</Text>
            </Pressable>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  scrollview: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
