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
  Quiz: undefined;
  ModuleOneLessonOne: undefined;
  ModuleOneLessonTwo: undefined;
  ModuleOneLessonThree: undefined;
  ModuleOneLessonFour: undefined;
  ModuleOneLessonFive: undefined;
  ModuleOneLessonSix: undefined;
  ModuleTwoLessonOne: undefined;
  ModuleTwoLessonTwo: undefined;
  ModuleTwoLessonThree: undefined;
  ModuleTwoLessonFour: undefined;
  ModuleFourLessonOne: undefined;
  ModuleFourLessonTwo: undefined;
  ModuleFourLessonThree: undefined;
  ModuleFourLessonFour: undefined;
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
  Quiz: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
