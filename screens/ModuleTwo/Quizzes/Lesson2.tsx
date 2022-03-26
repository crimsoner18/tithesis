import React, { useState } from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';

import { RootTabScreenProps } from '../../../types';
import { Card, Paragraph } from 'react-native-paper';
import questions from '../../../assets/questions/module2/quiz2.json'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

export default function QuizScreen({ navigation }: RootTabScreenProps<'Quiz'>) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const setLessonAsRead = async (value: string) => {
    try {
      await AsyncStorage.setItem('@M2L2isRead', value);
      await AsyncStorage.setItem('@M2L2Passed', value);
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
      
      if (score >= 7) {
        setLessonAsRead('true');

      }
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
                  
                  {
                    score <= 6 ? (
                    <>
                      <Paragraph style={{ color: 'red' }}>
                        Oops! Looks like you had a bit of a confusion with the lesson, please try again.
                      </Paragraph>
                      <Pressable
                      onPress={() => navigation.navigate('ModuleTwoLessonTwo')}
                      style={styles.button}>
                        <Text>Return to Lesson 1</Text>
                      </Pressable>
                    </>
                    ) : (
                      <>
                      <Paragraph style={{ color: 'green' }}>
                        Marvelous! You have passed the lesson!
                      </Paragraph>
                      <Pressable
                      onPress={() => navigation.navigate('ModuleTwo')}
                      style={styles.button}>
                        <Text>Return To Lessons</Text>
                      </Pressable>
                    </>
                    )
                  }

                  
              </>
                )
                :
                (
                    <>
                    <LinearGradient
                      // Background Linear Gradient
                      colors={['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA']}
                      style={styles.background}
                    />
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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});

