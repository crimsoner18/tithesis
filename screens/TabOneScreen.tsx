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


const windowHeight = Dimensions.get("window").height;
export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [modalText, setModalText] = useState("");
  const [modalVisible, setModalVisible] = useState(true);

  const setUser = (user: string) => {
    AsyncStorage.setItem("user", user);
  };
  return (
    <View style={styles.container}>
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
                  <Card.Cover source={require('../assets/images/moduleIcons/module1.png')}/>
                  <Card.Title title="Vibration and Waves" />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('ModuleTwo')}
            style={styles.card}>
            <Card>
                  <Card.Cover source={require('../assets/images/moduleIcons/module2.png')}/>
                  <Card.Title title="Light and Color" />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('ModuleThree')}
            style={styles.card}>
            <Card>
              <Card.Cover source={require('../assets/images/moduleIcons/module3.png')}/>
                  <Card.Title title="Reflection and Mirror" />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('ModuleFour')}
            style={styles.card}>
            <Card>
            <Card.Cover source={require('../assets/images/moduleIcons/module4.png')}/>
                  <Card.Title title="Refraction and Lenses" />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('ModuleFive')}
            style={styles.card}>
            <Card>
            <Card.Cover source={require('../assets/images/moduleIcons/module5.jpg')}/>
                  <Card.Title title="Diffraction and interference" />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('ModuleSix')}
            style={styles.card}>
            <Card>
            <Card.Cover source={require('../assets/images/moduleIcons/module6.png')}/>
                  <Card.Title title="Optical Instruments" />
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
  }
});
