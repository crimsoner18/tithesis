import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Text,
  Modal,
  Alert,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { LinearGradient } from "expo-linear-gradient";

const windowHeight = Dimensions.get("window").height;
export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [modalText, setModalText] = useState("");
  const [modalVisible, setModalVisible] = useState(true);
  const [isM1Completed, setM1Status] = useState(false);
  const [isM2Completed, setM2Status] = useState(false);
  const [isM3Completed, setM3Status] = useState(false);
  const [isM4Completed, setM4Status] = useState(false);
  const [isM5Completed, setM5Status] = useState(false);

  const setUser = (user: string) => {
    AsyncStorage.setItem("user", user);
  };

  const getData = async () => {
    try {
      const m1 = await AsyncStorage.getItem('@M1isCompleted');
      const m2 = await AsyncStorage.getItem('@M2isCompleted');
      const m3 = await AsyncStorage.getItem('@M3isCompleted');
      const m4 = await AsyncStorage.getItem('@M4isCompleted');
      const m5 = await AsyncStorage.getItem('@M5isCompleted');
      

      if(m1 == 'true') {
        setM1Status(true);
      }
      if(m2 == 'true') {
        setM2Status(true);
      }
      if(m3 == 'true') {
        setM3Status(true);
      }
      if(m4 == 'true') {
        setM4Status(true);
      }
      if(m5 == 'true') {
        setM5Status(true);
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
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA']}
        style={styles.background}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
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
            is very useful for us to understand the surrounding phenomena regarding the origins and propagation of light,
            as well as the changes it undergoes and produces and other phenomena that are closely related to it.  
            </Text>

            <Card style={{width:'100%', marginBottom: 20}}>
              <Card.Title title="To continue, tell me your name!" />
              <Card.Content>
                <TextInput
                  placeholder="Your Name"
                  value={modalText}
                  onChangeText={(e) => {
                    setModalText(e);
                  }}
                />
              </Card.Content>
            </Card>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setUser(modalText);
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Continue</Text>
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
                  <Card.Cover 
                    source={require('../assets/images/moduleIcons/module1.png')}
                    resizeMode={`contain`}
                    style={{backgroundColor:'white'}}/>
                  <Card.Title title="Vibration and Waves" subtitle="Module 1"/>
                </Card>
            </TouchableOpacity>
            {
              isM1Completed ? (
                <TouchableOpacity
                onPress={() => navigation.navigate('ModuleTwo')}
                style={styles.card}>
                <Card>
                    <Card.Cover 
                      source={require('../assets/images/moduleIcons/module2.png')}
                      resizeMode={`contain`}
                      style={{backgroundColor:'white'}}/>
                    <Card.Title title="Light and Color" subtitle="Module 2"/>
                  </Card>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                style={styles.card}>
                <Card style={{backgroundColor:'grey'}}>
                    <Card.Cover 
                      source={require('../assets/images/moduleIcons/module2.png')}
                      resizeMode={`contain`}
                      style={{backgroundColor:'grey'}}/>
                    <Card.Title title="Light and Color" subtitle="Module 2"/>
                  </Card>
                </TouchableOpacity>
              )
            }
            {
              isM2Completed ? (
                <TouchableOpacity
                onPress={() => navigation.navigate('ModuleThree')}
                style={styles.card}>
                  <Card>
                    <Card.Cover 
                      source={require('../assets/images/moduleIcons/module3.png')}
                      resizeMode={`contain`}
                      style={{backgroundColor:'white'}}/>
                    <Card.Title title="Reflection and Mirror" subtitle="Module 3"/>
                  </Card>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                style={styles.card}>
                  <Card style={{backgroundColor:'grey'}}>
                    <Card.Cover 
                      source={require('../assets/images/moduleIcons/module3.png')}
                      resizeMode={`contain`}
                      style={{backgroundColor:'grey'}}/>
                    <Card.Title title="Reflection and Mirror" subtitle="Module 3"/>
                  </Card>
                </TouchableOpacity>
              )
            }
            
            {
              isM3Completed ? (
                <TouchableOpacity
                onPress={() => navigation.navigate('ModuleFour')}
                style={styles.card}>
                  <Card>
                    <Card.Cover 
                    source={require('../assets/images/moduleIcons/module4.png')}
                    resizeMode={`contain`}
                    style={{backgroundColor:'white'}}/>
                    <Card.Title title="Refraction and Lenses" subtitle="Module 4"/>
                  </Card>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                style={styles.card}>
                  <Card style={{backgroundColor:'grey'}}>
                    <Card.Cover 
                    source={require('../assets/images/moduleIcons/module4.png')}
                    resizeMode={`contain`}
                    style={{backgroundColor:'grey'}}/>
                    <Card.Title title="Refraction and Lenses" subtitle="Module 4"/>
                  </Card>
                </TouchableOpacity>
              )
            }
            {
              isM4Completed ? (
                <TouchableOpacity
                onPress={() => navigation.navigate('ModuleFive')}
                style={styles.card}>
                  <Card>
                    <Card.Cover 
                    source={require('../assets/images/moduleIcons/module5.jpg')}
                    resizeMode={`contain`}
                    style={{backgroundColor:'white'}}/>
                    <Card.Title title="Diffraction and interference" subtitle="Module 5"/>
                  </Card>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                style={styles.card}>
                  <Card style={{backgroundColor:'grey'}}>
                    <Card.Cover 
                    source={require('../assets/images/moduleIcons/module5.jpg')}
                    resizeMode={`contain`}
                    style={{backgroundColor:'grey'}}/>
                    <Card.Title title="Diffraction and interference" subtitle="Module 5"/>
                  </Card>
                </TouchableOpacity>
              )
            }
            {
              isM5Completed ? (
                <TouchableOpacity
                onPress={() => navigation.navigate('ModuleSix')}
                style={styles.card}>
                  <Card>
                    <Card.Cover 
                      source={require('../assets/images/moduleIcons/module6.png')}
                      resizeMode={`contain`}
                      style={{backgroundColor:'white'}}/>
                    <Card.Title title="Optical Instruments" subtitle="Module 6"/>
                  </Card>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                style={styles.card}>
                  <Card style={{backgroundColor:'grey'}}>
                    <Card.Cover 
                      source={require('../assets/images/moduleIcons/module6.png')}
                      resizeMode={`contain`}
                      style={{backgroundColor:'grey'}}/>
                    <Card.Title title="Optical Instruments" subtitle="Module 6"/>
                  </Card>
                </TouchableOpacity>
              )
            }
           
            
            
            
            <TouchableOpacity
            onPress={() => navigation.navigate('ModuleOneSimulation')}
            style={styles.card}>
                <Card>
                <Card.Cover 
                source={require('../assets/images/moduleIcons/simulation.gif')}
                resizeMode={`contain`}
                style={{backgroundColor:'white'}}/>
                  <Card.Title title="Ray Diagraming Simulation" />
                  <Card.Content>
                    <Paragraph>
                    Ray Diagramming is a method of tracing the path that light takes relative to the person's viewpoint 
                    on the image of an object. It helps us to see the location, size, orientation, and type of image formed. 
                    Ray diagrams have three (3) rays drawn for the incident and reflected rays. In this simulation, you will be 
                    able to trace and see the how the image is formed from the object in both converging and diverging mirrors 
                    and lenses. This simulation is embedded from the PhET Simulation with small modifications to achieve the 
                    goals of this application.
                    </Paragraph>
                    <Paragraph>
                    PhET Simulation possesses the MIT License, allowing the users the right to use, copy, obtain, modify, 
                    distribute, and publish copies of the software.
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
    fontWeight: "bold",
  },
  scrollview: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: 1,
  },
  card: {
    margin: 10,
    flexGrow: 1,
    width: '90%',
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});
