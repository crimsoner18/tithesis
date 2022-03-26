import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card, List, Paragraph, Title } from 'react-native-paper';

import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={{flexGrow:1, width:'100%'}}>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Title style={{fontWeight:"bold", alignSelf:'center'}}>About Us</Title>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <View style={{flexDirection:'row', alignItems:'center', margin: 10}}>
        <Avatar.Image source={require('../assets/images/creator_images/Rivera.jpg')} style={{marginBottom:120}}/>
          <View style={{marginLeft:10, flexShrink:1}}>
            <Text style={{fontWeight:'bold'}}>Jean Nicole A. Rivera</Text>
            <Paragraph>
              a 3rd year BSE- Science student at the University of Rizal System Morong who graduated 
              at Carlos Botong V Francisco Memorial National High School in Angono Rizal. She received 
              recognition for being a dean's lister, a recipient of the Junior Level Science Scholarship 
              from the Department of Science and Technology (DOST) and the Deputy secretary of the Science 
              Enthusiasts and Environmentalists Society (SEES) for S.Y. 2021-2022. 
            </Paragraph>
          </View>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', margin: 10}}>
        <Avatar.Image source={require('../assets/images/creator_images/Anis.png')} style={{marginBottom:120}}/>
          <View style={{marginLeft:10, flexShrink:1}}>
            <Text style={{fontWeight:'bold'}}>Leanna Mae G. Añis</Text>
            <Paragraph>
              a 3rd year BSE- Science student at the University of Rizal System Morong who is a graduate 
              senior high student at the Catalino D. Salazar National High School, Cardona Rizal. 
              She is a dean's lister in her 1st year and 2nd year, a recipient of the Junior Level Science 
              Scholarship from the Department of Science and Technology (DOST), and a member of the Science 
              Enthusiasts and Environmentalists Society (SEES).
            </Paragraph>
          </View>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', margin: 10}}>
        <Avatar.Image source={require('../assets/images/creator_images/Custan.png')} style={{marginBottom:90}}/>
          <View style={{marginLeft:10, flexShrink:1}}>
            <Text style={{fontWeight:'bold'}}>Ernila F. Custan</Text>
            <Paragraph>
              finished her senior high at Tomas Claudio Colleges, Morong Rizal, a 3rd year BSE- Science student 
              at the University of Rizal System Morong. She received scholarship from the Barangay scholar 
              (2020) and Manila Teacher's scholarship (2021). She is a member of the Science Enthusiasts and 
              Environmentalists Society (SEES). 
            </Paragraph>
          </View>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', margin: 10}}>
        <Avatar.Image source={require('../assets/images/creator_images/Pasion.png')} style={{marginBottom:40}}/>
          <View style={{marginLeft:10, flexShrink:1}}>
            <Text style={{fontWeight:'bold'}}>Jobren P. Passion</Text>
            <Paragraph>
            graduated senior high at Tomas Claudio Colleges, Morong Rizal, a 3rd year BSE- Science student at 
            the University of Rizal System. A member of the Science Enthusiasts and Environmentalists Society 
            (SEES).
            </Paragraph>
          </View>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', margin: 10}}>
        <Avatar.Image source={require('../assets/images/creator_images/etil.jpg')} style={{marginBottom:100}}/>
          <View style={{marginLeft:10, flexShrink:1}}>
            <Text style={{fontWeight:'bold'}}>Richard A. Etil Jr.</Text>
            <Paragraph>
            took his senior high at the Binangonan Catholic College, Binangonan Rizal, STEM strand. 
            A 3rd year BSE- Science student, a former head of the Tarcisian Turno 275, Catholic church 
            organization, former organist of Himig Tarcisian Chorale. A member of Science Enthusiasts 
            and Environmentalists Society (SEES). 
            </Paragraph>
          </View>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', margin: 10}}>
        <Avatar.Image source={require('../assets/images/creator_images/Joji_Truly.png')} style={{marginBottom:100}}/>
          <View style={{marginLeft:10, flexShrink:1}}>
            <Text style={{fontWeight:'bold'}}> Prof. Jojimar SJ Julian</Text>
            <Paragraph>
              Professor Jojimar SJ Julian, the adviser of this study, got his Bachelor`s degree in Secondary 
              Education Major in Physics and Master of Arts in Teaching Science at the University of Rizal System. 
              He is currently pursuing his Doctor of Philosophy in Science Education at Southern Luzon State 
              University in Lucban, Quezon. He is a former senior high school teacher at Cardona senior high 
              school, and  currently teaching at the University of Rizal System Morong.
            </Paragraph>
          </View>
        </View>
      </ScrollView>
      

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    alignSelf: 'center',
  },
  card: {
    width: '100%',
    margin: 10,
    marginLeft: 10,
    flexGrow: 1
  }
});
