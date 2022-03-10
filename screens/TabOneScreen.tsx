import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Text, Modal, Alert, Pressable, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import {Avatar, Card, List, Paragraph} from 'react-native-paper';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const clearAsyncStorage = async() => {
  AsyncStorage.clear();
}

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <ScrollView>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>INTRODUCTION:</Text>
            <Text style={{fontWeight:"bold"}}>WAVES AND OPTICS</Text>
            <Text style={{marginBottom:20}}>It is a branch of Physics that deals with the study of optical phenomena, 
            having its subject that revolves on the interaction of waves and light rays. The knowledge on Waves and optics 
            is very useful for us to understand the surrounding phenomena regarding the origins and propagation of light, \
            as well as the changes it undergoes and produces and other phenomena that are closely related to it.  
            </Text>
            <Text style={{fontWeight:"bold"}}>About Us</Text>
            <Text style={{marginBottom:20}}>Physics Center is a specialized application that is designed and developed to be 
            an aid to the knowledge, acquisition and organization of the learners in Waves and Optics. It is named as this due 
            to its aim to be the central area or middle point of student’s knowledge and their go-to-application whenever they 
            are learning Waves and Optics, a branch of Physics. Its features include learning materials and video lessons on Waves 
            and Optics, activities, quizzes, a simulation about the Image formation on Mirrors and Lenses, and a help corner. 
            </Text>
            <List.Item 
            title={<Text numberOfLines={4}>Jean Nicole A. Rivera, a 3rd year BSE- Science student at the University of Rizal System Morong who graduated at Carlos Botong V Francisco Memorial National High School in Angono Rizal. She received recognition for being a dean's lister, a recipient of the Junior Level Science Scholarship from the Department of Science and Technology (DOST) and the Deputy secretary of the Science Enthusiasts and Environmentalists Society (SEES) for S.Y. 2021-2022. </Text>}
            style={{flex:1, width:'100%'}}
            description={<Text numberOfLines={4}>Jean Nicole A. Rivera, a 3rd year BSE- Science student at the University of Rizal System Morong who graduated at Carlos Botong V Francisco Memorial National High School in Angono Rizal. She received recognition for being a dean's lister, a recipient of the Junior Level Science Scholarship from the Department of Science and Technology (DOST) and the Deputy secretary of the Science Enthusiasts and Environmentalists Society (SEES) for S.Y. 2021-2022. </Text>}
            left={props => <Avatar.Image {...props} source={require('../assets/images/creator_images/Rivera.jpg')} />}
          />
          <List.Item 
            title=""
            style={{flex:1, width:'100%'}}
            description="Leanna Mae G. Añis, a 3rd year BSE- Science student at the University of Rizal System Morong who is a graduate senior high student at the Catalino D. Salazar National High School, Cardona Rizal. She is a dean's lister in her 1st year and 2nd year, a recipient of the Junior Level Science Scholarship from the Department of Science and Technology (DOST), and a member of the Science Enthusiasts and Environmentalists Society (SEES).  "
            left={props => <Avatar.Image {...props} source={require('../assets/images/creator_images/Anis.png')} />}
          />
          <List.Item 
            title=""
            style={{flex:1, width:'100%'}}
            description="Ernila F. Custan, finished her senior high at Tomas Claudio Colleges, Morong Rizal, a 3rd year BSE- Science student at the University of Rizal System Morong. She received scholarship from the Barangay scholar (2020) and Manila Teacher's scholarship (2021). She is a member of the Science Enthusiasts and Environmentalists Society (SEES). "
            left={props => <Avatar.Image {...props} source={require('../assets/images/creator_images/Custan.jpg')} />}
          />
          <List.Item 
            title=""
            style={{flex:1, width:'100%'}}
            description="Jobren P. Passion, graduated senior high at Tomas Claudio Colleges, Morong Rizal, a 3rd year BSE- Science student at the University of Rizal System. A member of the Science Enthusiasts and Environmentalists Society (SEES). "
            left={props => <Avatar.Image {...props} source={require('../assets/images/creator_images/Pasion.jpg')} />}
          />
          <List.Item 
            title=""
            style={{flex:1, width:'100%'}}
            description="Richard A. Etil Jr., took his senior high at the Binangonan Catholic College, Binangonan Rizal, STEM strand. A 3rd year BSE- Science student, a former head of the Tarcisian Turno 275, Catholic church organization, former organist of Himig Tarcisian Chorale. A member of Science Enthusiasts and Environmentalists Society (SEES). "
            left={props => <Avatar.Image {...props} source={require('../assets/images/creator_images/etil.gif')} />}
          />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
          </ScrollView>
        </View>
      </Modal>

        <ScrollView contentContainerStyle={styles.scrollview}>
          <TouchableOpacity
          onPress={() => navigation.navigate('ModuleOne')}
          style={styles.card}>
                <Card>
                  <Card.Cover source={{uri:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg'}}/>
                  <Card.Title title="Module One" />
                  <Card.Content>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Paragraph>
                  </Card.Content>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('ModuleTwo')}
            style={styles.card}>
            <Card>
                  <Card.Cover source={{uri:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg'}}/>
                  <Card.Title title="Module Two" />
                  <Card.Content>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Paragraph>
                  </Card.Content>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('ModuleThree')}
            style={styles.card}>
            <Card>
                  <Card.Cover source={{uri:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg'}}/>
                  <Card.Title title="Module Three" />
                  <Card.Content>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Paragraph>
                  </Card.Content>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('ModuleFour')}
            style={styles.card}>
            <Card>
                  <Card.Cover source={{uri:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg'}}/>
                  <Card.Title title="Module Four" />
                  <Card.Content>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Paragraph>
                  </Card.Content>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('ModuleFive')}
            style={styles.card}>
            <Card>
                  <Card.Cover source={{uri:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg'}}/>
                  <Card.Title title="Module Five" />
                  <Card.Content>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Paragraph>
                  </Card.Content>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('ModuleSix')}
            style={styles.card}>
            <Card>
                  <Card.Cover source={{uri:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg'}}/>
                  <Card.Title title="Module Six" />
                  <Card.Content>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Paragraph>
                  </Card.Content>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('ModuleOneSimulation')}
            style={styles.card}>
            <Card>
                  <Card.Cover source={{uri:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg'}}/>
                  <Card.Title title="VIEW SIMULATION" />
                  <Card.Content>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Paragraph>
                  </Card.Content>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.card}>
            <Card>
                  <Card.Title title="Clear AsyncStorage" />
                  <Card.Content>
                    <Paragraph>
                      EYYY LESGOOOOOOO
                    </Paragraph>
                  </Card.Content>
                </Card>
            </TouchableOpacity>
        </ScrollView>
    </View>
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
  scrollview: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  card: {
    margin: 10,
    flexGrow: 1,
    width: '100%', 
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  modalView: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
