import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import { RootTabScreenProps } from '../../types';

// const {width, height} = Dimensions.get("window");

const vw = Dimensions.get('window').width - 10;
const vh = Dimensions.get('window').height;

export default function LessonOneScreen({ navigation }: RootTabScreenProps<'ModuleOne'>){
  return (
        <WebView
          startInLoadingState={true} 
          style={{flex: 1}}
          containerStyle = {{width: Dimensions.get('window').width, height: Dimensions.get('window').height}} 
          source={{ uri: 'https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_en.html'}}
          originWhitelist={['*']}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowFileAccess={true}
        />
  );
}

const styles = StyleSheet.create({
  container: {
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

