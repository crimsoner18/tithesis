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
  ModuleOneSimulation: undefined;
  
  // Module 1 QUIZZES
  ModuleOneQuizOne: undefined;
  ModuleOneQuizTwo: undefined;
  ModuleOneQuizThree: undefined;  
  ModuleOneQuizFour: undefined;

  // Module 2 LESSONS
  ModuleTwoLessonOne: undefined;
  ModuleTwoLessonTwo: undefined;
  ModuleTwoLessonThree: undefined;
  ModuleTwoLessonFour: undefined;

   // Module 2 QUIZZES
  ModuleTwoQuizOne: undefined;
  ModuleTwoQuizTwo: undefined;
  ModuleTwoQuizThree: undefined;  
  ModuleTwoQuizFour: undefined;

  // Module 3 LESSONS
  ModuleThreeLessonOne: undefined;
  ModuleThreeLessonTwo: undefined;
  ModuleThreeLessonThree: undefined;

  // Module 3 QUIZZES
  ModuleThreeQuizOne: undefined;
  ModuleThreeQuizTwo: undefined;
  ModuleThreeQuizThree: undefined;

  // Module 4 LESSONS
  ModuleFourLessonOne: undefined;
  ModuleFourLessonTwo: undefined;
  ModuleFourLessonThree: undefined;

  // Module 4 QUIZZES
  ModuleFourQuizOne: undefined;
  ModuleFourQuizTwo: undefined;
  ModuleFourQuizThree: undefined;  

  // Module 5 LESSONS
  ModuleFiveLessonOne: undefined;
  ModuleFiveLessonTwo: undefined;
  
  // Module 5 QUIZZES
  ModuleFiveQuizOne: undefined;
  ModuleFiveQuizTwo: undefined;

  // Module 6 LESSONS
  ModuleSixLessonOne: undefined;
  ModuleSixLessonTwo: undefined;

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
