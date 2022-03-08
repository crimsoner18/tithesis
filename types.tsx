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
  ModuleOneLessonOne: undefined;
  ModuleOneLessonTwo: undefined;
  ModuleOneLessonThree: undefined;
  ModuleOneLessonFour: undefined;
  
  // Module 1 QUIZZES
  ModuleOneQuizOne: undefined;
  ModuleOneQuizTwo: undefined;
  ModuleOneQuizThree: undefined;  
  ModuleOneQuizFour: undefined;


  ModuleTwoLessonOne: undefined;
  ModuleTwoLessonTwo: undefined;
  ModuleTwoLessonThree: undefined;
  ModuleTwoLessonFour: undefined;
  ModuleThreeLessonOne: undefined;
  ModuleThreeLessonTwo: undefined;
  ModuleFourLessonOne: undefined;
  ModuleFourLessonTwo: undefined;
  ModuleFourLessonThree: undefined;
  ModuleFiveLessonOne: undefined;
  ModuleFiveLessonTwo: undefined;


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
