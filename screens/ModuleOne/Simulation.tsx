import React, { useRef, useState } from 'react';
import { Dimensions, StatusBar, StyleSheet, Image } from 'react-native';
import { Card, List, Paragraph } from 'react-native-paper';
import { RootTabScreenProps } from '../../types';
import {WebView} from 'react-native-webview';
import RenderHTML from 'react-native-render-html';
const PolicyHTML = require('../../assets/simulations/sim1.html');

const {width, height} = Dimensions.get("window");
const vw = width-10;
const vh = height;

export default function LessonOneScreen({ navigation }: RootTabScreenProps<'ModuleOne'>){
  return (
        <WebView
          startInLoadingState={true} 
          style={{flex: 1, marginTop : 44}}
          containerStyle = {{marginTop: 20, width: Dimensions.get('window').width, height: Dimensions.get('window').height}} 
          // source={{ uri: 'https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_en.html'}}
          originWhitelist={['*']}
          source={PolicyHTML}
        //   style={{ marginTop: 20, flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowFileAccess={true}
        />

        // <RenderHTML
        //     source={{html: html}}
        // />

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
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

