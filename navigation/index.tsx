/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import ModuleOne from "../screens/ModuleOneScreen";
import ModuleTwo from "../screens/ModuleTwoScreen";
import ModuleThree from "../screens/ModuleThreeScreen";
import ModuleFour from "../screens/ModuleFourScreen";
import ModuleFive from "../screens/ModuleFiveScreen";
import ModuleSix from "../screens/ModuleSixScreen";

// Module 1 imports
import M1IntroductionScreen from "../screens/ModuleOne/Introduction";
import M1LessonOneScreen from "../screens/ModuleOne/Lesson1";
import M1LessonTwoScreen from "../screens/ModuleOne/Lesson2";
import M1LessonThreeScreen from "../screens/ModuleOne/Lesson3";
import M1LessonFourScreen from "../screens/ModuleOne/Lesson4";
import M1ConclusionScreen from "../screens/ModuleOne/Conclusion";
import M1ReferenceScreen from "../screens/ModuleOne/Reference";
import M1SimulationScreen from "../screens/ModuleOne/Simulation";
import M1QuizOneScreen from "../screens/ModuleOne/Quizzes/Lesson1";
import M1QuizTwoScreen from "../screens/ModuleOne/Quizzes/Lesson2";
import M1QuizThreeScreen from "../screens/ModuleOne/Quizzes/Lesson3";
import M1QuizFourScreen from "../screens/ModuleOne/Quizzes/Lesson4";

// Module 2 imports
import M2IntroductionScreen from "../screens/ModuleTwo/Introduction";
import M2LessonOneScreen from "../screens/ModuleTwo/Lesson1";
import M2LessonTwoScreen from "../screens/ModuleTwo/Lesson2";
import M2LessonThreeScreen from "../screens/ModuleTwo/Lesson3";
import M2LessonFourScreen from "../screens/ModuleTwo/Lesson4";
import M2ConclusionScreen from "../screens/ModuleTwo/Conclusion";
import M2ReferenceScreen from "../screens/ModuleTwo/Reference";
import M2QuizOneScreen from "../screens/ModuleTwo/Quizzes/Lesson1";
import M2QuizTwoScreen from "../screens/ModuleTwo/Quizzes/Lesson2";
import M2QuizThreeScreen from "../screens/ModuleTwo/Quizzes/Lesson3";
import M2QuizFourScreen from "../screens/ModuleTwo/Quizzes/Lesson4";

// Module 3 imports
import M3IntroductionScreen from "../screens/ModuleThree/Introduction";
import M3LessonOneScreen from '../screens/ModuleThree/Lesson1';
import M3LessonTwoScreen from '../screens/ModuleThree/Lesson2';
import M3LessonThreeScreen from '../screens/ModuleThree/Lesson3';
import M3ConclusionScreen from "../screens/ModuleThree/Conclusion";
import M3ReferenceScreen from "../screens/ModuleThree/Reference";

// Module 4 imports
import M4IntroductionScreen from "../screens/ModuleFour/Introduction";
import M4LessonOneScreen from "../screens/ModuleFour/Lesson1";
import M4LessonTwoScreen from "../screens/ModuleFour/Lesson2";
import M4LessonThreeScreen from "../screens/ModuleFour/Lesson3";
import M4ReferenceScreen from "../screens/ModuleFour/Reference";
import M4QuizOneScreen from "../screens/ModuleFour/Quizzes/Lesson1";
import M4QuizTwoScreen from "../screens/ModuleFour/Quizzes/Lesson2";
import M4QuizThreeScreen from "../screens/ModuleFour/Quizzes/Lesson3";

// Module 5 imports
import M5IntroductionScreen from "../screens/ModuleFive/Introduction";
import M5LessonOneScreen from "../screens/ModuleFive/Lesson1";
import M5LessonTwoScreen from "../screens/ModuleFive/Lesson2";
import M5ConclusionScreen from "../screens/ModuleFive/Conclusion";
import M5ReferenceScreen from "../screens/ModuleFive/Reference";
import M5QuizOneScreen from "../screens/ModuleFive/Quizzes/Lesson1";
import M5QuizTwoScreen from "../screens/ModuleFive/Quizzes/Lesson2";

// Module 6 imports
import M6IntroductionScreen from "../screens/ModuleSix/Introduction";
import M6LessonOneScreen from "../screens/ModuleSix/Lesson1";
import M6LessonTwoScreen from "../screens/ModuleSix/Lesson2";
import M6ConclusionScreen from "../screens/ModuleSix/Conclusion";
import M6ReferenceScreen from "../screens/ModuleSix/Reference";
import M6QuizOneScreen from "../screens/ModuleSix/Quizzes/Lesson1";
import M6QuizTwoScreen from "../screens/ModuleSix/Quizzes/Lesson2";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="ModuleOne"
        component={ModuleOne}
        options={{
          headerShown: true,
          title: "Module One: Vibrations and Waves",
        }}
      />
      <Stack.Screen
        name="ModuleTwo"
        component={ModuleTwo}
        options={{ headerShown: true, title: "Module Two: Light and Colors" }}
      />
      <Stack.Screen
        name="ModuleThree"
        component={ModuleThree}
        options={{
          headerShown: true,
          title: "Module Three: Reflections and Mirrors",
        }}
      />
      <Stack.Screen
        name="ModuleFour"
        component={ModuleFour}
        options={{
          headerShown: true,
          title: "Module Four: Refraction of Light",
        }}
      />
      <Stack.Screen
        name="ModuleFive"
        component={ModuleFive}
        options={{
          headerShown: true,
          title: "Module Five: Interference and Diffraction",
        }}
      />
      <Stack.Screen
        name="ModuleSix"
        component={ModuleSix}
        options={{
          headerShown: true,
          title: "Module Six: Optical Instruments 1",
        }}
      />

      {/* MODULE ONE LESSONS AND QUIZZES */}
      <Stack.Screen
        name="ModuleOneIntroduction"
        component={M1IntroductionScreen}
        options={{ headerShown: true, title: "Introduction" }}
      />
      <Stack.Screen
        name="ModuleOneLessonOne"
        component={M1LessonOneScreen}
        options={{ headerShown: true, title: "Vibrations" }}
      />
      <Stack.Screen
        name="ModuleOneLessonTwo"
        component={M1LessonTwoScreen}
        options={{ headerShown: true, title: "The Nature of a Wave" }}
      />
      <Stack.Screen
        name="ModuleOneLessonThree"
        component={M1LessonThreeScreen}
        options={{ headerShown: true, title: "Properties of a Wave" }}
      />
      <Stack.Screen
        name="ModuleOneLessonFour"
        component={M1LessonFourScreen}
        options={{ headerShown: true, title: "Vibrations" }}
      />
      <Stack.Screen
        name="ModuleOneConclusion"
        component={M1ConclusionScreen}
        options={{ headerShown: true, title: "Conclusion" }}
      />
      <Stack.Screen
        name="ModuleOneReference"
        component={M1ReferenceScreen}
        options={{ headerShown: true, title: "Reference" }}
      />
      <Stack.Screen
        name="ModuleOneSimulation"
        component={M1SimulationScreen}
        options={{ headerShown: true, title: "Simulation" }}
      />

      <Stack.Screen
        name="ModuleOneQuizOne"
        component={M1QuizOneScreen}
        options={{ headerShown: true, title: "Lesson 1 Quiz" }}
      />
      <Stack.Screen
        name="ModuleOneQuizTwo"
        component={M1QuizTwoScreen}
        options={{ headerShown: true, title: "Lesson 2 Quiz" }}
      />
      <Stack.Screen
        name="ModuleOneQuizThree"
        component={M1QuizThreeScreen}
        options={{ headerShown: true, title: "Lesson 3 Quiz" }}
      />
      <Stack.Screen
        name="ModuleOneQuizFour"
        component={M1QuizFourScreen}
        options={{ headerShown: true, title: "Lesson 4 Quiz" }}
      />
      
      {/* MODULE TWO LESSONS AND QUIZZES */}
      <Stack.Screen
        name="ModuleTwoIntroduction"
        component={M2IntroductionScreen}
        options={{ headerShown: true, title: "Introduction" }}
      />
      <Stack.Screen
        name="ModuleTwoLessonOne"
        component={M2LessonOneScreen}
        options={{ headerShown: true, title: "Theories of Light" }}
      />
      <Stack.Screen
        name="ModuleTwoLessonTwo"
        component={M2LessonTwoScreen}
        options={{ headerShown: true, title: "Visible Light and Color" }}
      />
      <Stack.Screen
        name="ModuleTwoLessonThree"
        component={M2LessonThreeScreen}
        options={{ headerShown: true, title: "Basic Properties of Light" }}
      />
      <Stack.Screen
        name="ModuleTwoLessonFour"
        component={M2LessonFourScreen}
        options={{
          headerShown: true,
          title: "Understanding Polarization and Malus law",
        }}
      />
      <Stack.Screen
        name="ModuleTwoConclusion"
        component={M2ConclusionScreen}
        options={{ headerShown: true, title: "Conclusion" }}
      />
      <Stack.Screen
        name="ModuleTwoReference"
        component={M2ReferenceScreen}
        options={{ headerShown: true, title: "Reference" }}
      />

      <Stack.Screen
        name="ModuleTwoQuizOne"
        component={M2QuizOneScreen}
        options={{ headerShown: true, title: "Lesson 1 Quiz" }}
      />
      <Stack.Screen
        name="ModuleTwoQuizTwo"
        component={M2QuizTwoScreen}
        options={{ headerShown: true, title: "Lesson 2 Quiz" }}
      />
      <Stack.Screen
        name="ModuleTwoQuizThree"
        component={M2QuizThreeScreen}
        options={{ headerShown: true, title: "Lesson 3 Quiz" }}
      />
      <Stack.Screen
        name="ModuleTwoQuizFour"
        component={M2QuizFourScreen}
        options={{ headerShown: true, title: "Lesson 4 Quiz" }}
      />

      {/* MODULE THREE LESSONS AND QUIZZES */}
      <Stack.Screen
        name="ModuleThreeIntroduction"
        component={M3IntroductionScreen}
        options={{ headerShown: true, title: "Introduction" }}
      />
      <Stack.Screen 
        name="ModuleThreeLessonOne" 
        component={M3LessonOneScreen} 
        options={{ 
          headerShown: true, 
          title: 'Reflection and its Importance' 
        }} 
      />
      <Stack.Screen 
        name="ModuleThreeLessonTwo" 
        component={M3LessonTwoScreen} 
        options={{ 
          headerShown: true, 
          title: 'Image Formation in Plane Mirrors' 
        }} 
      />
      <Stack.Screen 
        name="ModuleThreeLessonThree" 
        component={M3LessonThreeScreen} 
        options={{ 
          headerShown: true, 
          title: 'Concave and Convex Mirrors' 
        }} 
      />
      <Stack.Screen
        name="ModuleThreeConclusion"
        component={M3ConclusionScreen}
        options={{ headerShown: true, title: "Conclusion" }}
      />
      <Stack.Screen
        name="ModuleThreeReference"
        component={M3ReferenceScreen}
        options={{ headerShown: true, title: "Reference" }}
      />
      <Stack.Screen
        name="ModuleThreeQuizOne"
        component={M4QuizOneScreen}
        options={{ headerShown: true, title: "Lesson 1 Quiz" }}
      />
      <Stack.Screen
        name="ModuleThreeQuizTwo"
        component={M4QuizTwoScreen}
        options={{ headerShown: true, title: "Lesson 2 Quiz" }}
      />
      <Stack.Screen
        name="ModuleThreeQuizThree"
        component={M4QuizThreeScreen}
        options={{ headerShown: true, title: "Lesson 3 Quiz" }}
      />

      {/* MODULE 4 LESSONS AND QUIZZES */}
      <Stack.Screen
        name="ModuleFourIntroduction"
        component={M4IntroductionScreen}
        options={{ headerShown: true, title: "Introduction" }}
      />
      <Stack.Screen
        name="ModuleFourLessonOne"
        component={M4LessonOneScreen}
        options={{
          headerShown: true,
          title: "The Refraction And Lenses",
        }}
      />
       <Stack.Screen
        name="ModuleFourLessonTwo"
        component={M4LessonTwoScreen}
        options={{
          headerShown: true,
          title: "Lenses and Refraction of Light",
        }}
      />
       <Stack.Screen
        name="ModuleFourLessonThree"
        component={M4LessonThreeScreen}
        options={{
          headerShown: true,
          title: "Drawing Ray Diagrams for Convex Lenses",
        }}
      />
      <Stack.Screen
        name="ModuleFourReference"
        component={M4ReferenceScreen}
        options={{ headerShown: true, title: "Reference" }}
      />

      <Stack.Screen
        name="ModuleFourQuizOne"
        component={M4QuizOneScreen}
        options={{ headerShown: true, title: "Lesson 1 Quiz" }}
      />
      <Stack.Screen
        name="ModuleFourQuizTwo"
        component={M4QuizTwoScreen}
        options={{ headerShown: true, title: "Lesson 2 Quiz" }}
      />
      <Stack.Screen
        name="ModuleFourQuizThree"
        component={M4QuizThreeScreen}
        options={{ headerShown: true, title: "Lesson 3 Quiz" }}
      />


      {/* MODULE 5 LESSONS AND QUIZZES */}
      <Stack.Screen
        name="ModuleFiveIntroduction"
        component={M5IntroductionScreen}
        options={{ headerShown: true, title: "Introduction" }}
      />
      <Stack.Screen
        name="ModuleFiveLessonOne"
        component={M5LessonOneScreen}
        options={{
          headerShown: true,
          title: "Diffraction and Interference",
        }}
      />
       <Stack.Screen
        name="ModuleFiveLessonTwo"
        component={M5LessonTwoScreen}
        options={{
          headerShown: true,
          title: "Wave Interference at the Particle Level",
        }}
      />
      <Stack.Screen
        name="ModuleFiveConclusion"
        component={M5ConclusionScreen}
        options={{ headerShown: true, title: "Conclusion" }}
      />
      <Stack.Screen
        name="ModuleFiveReference"
        component={M5ReferenceScreen}
        options={{ headerShown: true, title: "Reference" }}
      />

      <Stack.Screen
        name="ModuleFiveQuizOne"
        component={M5QuizOneScreen}
        options={{ headerShown: true, title: "Lesson 1 Quiz" }}
      />
      <Stack.Screen
        name="ModuleFiveQuizTwo"
        component={M5QuizTwoScreen}
        options={{ headerShown: true, title: "Lesson 2 Quiz" }}
      />

      {/* MODULE 6 LESSONS AND QUIZZES */}
      <Stack.Screen
        name="ModuleSixIntroduction"
        component={M6IntroductionScreen}
        options={{ headerShown: true, title: "Introduction" }}
      />
      <Stack.Screen
        name="ModuleSixLessonOne"
        component={M6LessonOneScreen}
        options={{
          headerShown: true,
          title: "Optics of the Human Eye and the Image Formation",
        }}
      />
       <Stack.Screen
        name="ModuleSixLessonTwo"
        component={M6LessonTwoScreen}
        options={{
          headerShown: true,
          title: "Principles of Optical Instruments",
        }}
      />
      <Stack.Screen
        name="ModuleSixConclusion"
        component={M6ConclusionScreen}
        options={{ headerShown: true, title: "Conclusion" }}
      />
      <Stack.Screen
        name="ModuleSixReference"
        component={M6ReferenceScreen}
        options={{ headerShown: true, title: "Reference" }}
      />
      <Stack.Screen
        name="ModuleSixQuizOne"
        component={M6QuizOneScreen}
        options={{ headerShown: true, title: "Lesson 1 Quiz" }}
      />
      <Stack.Screen
        name="ModuleSixQuizTwo"
        component={M6QuizTwoScreen}
        options={{ headerShown: true, title: "Lesson 2 Quiz" }}
      />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Learning Materials",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Help Corner",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
