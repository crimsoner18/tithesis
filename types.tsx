/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  ModuleOne: undefined;
  ModuleTwo: undefined;
  ModuleThree: undefined;
  ModuleFour: undefined;
  ModuleFive: undefined;
  ModuleSix: undefined;
  
  // Module 1 LESSONS
  ModuleOneIntroduction: undefined;
  ModuleOneLessonOne: undefined;
  ModuleOneLessonTwo: undefined;
  ModuleOneLessonThree: undefined;
  ModuleOneLessonFour: undefined;
  ModuleOneConclusion: undefined;
  ModuleOneReference: undefined;
  ModuleOneSimulation: undefined;
  
  // Module 1 QUIZZES
  ModuleOneQuizOne: undefined;
  ModuleOneQuizTwo: undefined;
  ModuleOneQuizThree: undefined;  
  ModuleOneQuizFour: undefined;

  // Module 2 LESSONS
  ModuleTwoIntroduction: undefined;
  ModuleTwoLessonOne: undefined;
  ModuleTwoLessonTwo: undefined;
  ModuleTwoLessonThree: undefined;
  ModuleTwoLessonFour: undefined;
  ModuleTwoConclusion: undefined;
  ModuleTwoReference: undefined;

   // Module 2 QUIZZES
  ModuleTwoQuizOne: undefined;
  ModuleTwoQuizTwo: undefined;
  ModuleTwoQuizThree: undefined;  
  ModuleTwoQuizFour: undefined;

  // Module 3 LESSONS
  ModuleThreeIntroduction: undefined;
  ModuleThreeLessonOne: undefined;
  ModuleThreeLessonTwo: undefined;
  ModuleThreeLessonThree: undefined;
  ModuleThreeConclusion: undefined;
  ModuleThreeReference: undefined;

  // Module 3 QUIZZES
  ModuleThreeQuizOne: undefined;
  ModuleThreeQuizTwo: undefined;
  ModuleThreeQuizThree: undefined;

  // Module 4 LESSONS
  ModuleFourIntroduction: undefined;
  ModuleFourLessonOne: undefined;
  ModuleFourLessonTwo: undefined;
  ModuleFourLessonThree: undefined;
  ModuleFourReference: undefined;

  // Module 4 QUIZZES
  ModuleFourQuizOne: undefined;
  ModuleFourQuizTwo: undefined;
  ModuleFourQuizThree: undefined;  

  // Module 5 LESSONS
  ModuleFiveIntroduction: undefined;
  ModuleFiveLessonOne: undefined;
  ModuleFiveLessonTwo: undefined;
  ModuleFiveConclusion: undefined;
  ModuleFiveReference: undefined;
  
  // Module 5 QUIZZES
  ModuleFiveQuizOne: undefined;
  ModuleFiveQuizTwo: undefined;

  // Module 6 LESSONS
  ModuleSixIntroduction: undefined;
  ModuleSixLessonOne: undefined;
  ModuleSixLessonTwo: undefined;
  ModuleSixConclusion: undefined;
  ModuleSixReference: undefined;

  // Module 6 QUIZZES
  ModuleSixQuizOne: undefined;
  ModuleSixQuizTwo: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  ModuleOne: undefined;
  ModuleTwo: undefined;
  ModuleThree: undefined;
  ModuleFour: undefined;
  ModuleFive: undefined;
  ModuleSix: undefined;
  Quiz: { quizName: string };
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
