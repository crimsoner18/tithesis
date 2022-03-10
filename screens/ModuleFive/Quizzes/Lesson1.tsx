import React, { useState } from 'react';
import { Pressable, StatusBar, StyleSheet } from 'react-native';

import { Text, View } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';
import { Card } from 'react-native-paper';
import questions from '../../../assets/questions/module5/quiz1.json'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function QuizScreen({ navigation }: RootTabScreenProps<'Quiz'>) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const setLessonAsRead = async (value: string) => {
    try {
      await AsyncStorage.setItem('@M5L1isRead', value)
    } catch (e) {
      console.log(e)
    }
  }

  const HandleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
      setLessonAsRead('true')
    }
  }

  return (
    <>
      <Card style={styles.container}>
            <Card.Content style={{flex: 1}}>
              {showScore ? (
                <>
                  <Text style={styles.score_section}>
                    You scored {score} out of {questions.length}
                  </Text>
                  <Pressable
                  onPress={() => navigation.navigate('ModuleFive')}
                    style={styles.button}>
                    <Text>Return To Lessons</Text>
                  </Pressable></>
                )
                :
                (
                    <>
                        <Card style={styles.question_section}>
                            <Card.Title title={'Question ' + (currentQuestion + 1) + '/' + questions.length} />
                            <Card.Content style={styles.question_text}>
                                <Text>
                                    {questions[currentQuestion].questionText}
                                </Text>
                            </Card.Content>
                        </Card>

                        <View style={styles.answer_section}>
                            {
                            questions[currentQuestion].answerOptions.map((answerOptions) => (
                                <Pressable 
                                onPress={() => HandleAnswerButtonClick(answerOptions.isCorrect)} 
                                style={styles.button}
                                key={answerOptions.answerText}>
                                <Text>{answerOptions.answerText}</Text>
                                </Pressable>
                            ))
                            }
                        </View>
                    </>
                )}
          </Card.Content>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  button: {
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  header: {
    textAlign: 'center',
    color: '#f71aa2',
  },
  score_section: {
    flex: 1,
    alignItems: 'center',
    fontSize: 24,
  },
  question_section: {
    width: '100%',
    height: '40%',
    flex: 1,
    justifyContent: 'center',
  },
  question_text: {
    justifyContent: 'center',
  },
  question_count: {
    marginBottom: 20,
  },
  answer_section: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

