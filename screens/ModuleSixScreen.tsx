import React, { useState } from 'react';
import { Pressable, StatusBar, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import questions from '../assets/questions/module1_quiz1.json'

export default function ModuleSixScreen({ navigation }: RootTabScreenProps<'ModuleOne'>) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

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
    }
  }

  return (
    <>
      <View style={styles.container}>
      <Text style={styles.header}>Quiz</Text>
        {showScore ? (
          <Text style={styles.score_section}>
            You scored {score} out of {questions.length}
          </Text>
        )
          :
          (
            <>
              <View style={styles.question_section}>
                <View style={styles.question_count}>
                  <Text>Question {currentQuestion + 1} / {questions.length}</Text>
                </View>
                <Text style={styles.question_text}>
                  {questions[currentQuestion].questionText}
                </Text>
              </View>

              <View style={styles.answer_section}>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <Pressable 
                      onPress={() => HandleAnswerButtonClick(answerOptions.isCorrect)} 
                      style={styles.button}
                      key={answerOptions.answerText}
                      >
                      <Text>{answerOptions.answerText}</Text>
                    </Pressable>
                  ))
                }
              </View>
            </>
          )}
      </View>
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
    borderColor: 'red',
    backgroundColor: 'green',
    borderWidth: 1,
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    position: 'relative',
  },
  question_count: {
    marginBottom: 20,
  },
  question_text: {
    marginBottom: 12,
  },
  answer_section: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

