import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const clearAsyncStorage = async() => {
  AsyncStorage.clear();
}

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
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
            onPress={() => clearAsyncStorage()}
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
    marginBottom: 10, 
  }
});
