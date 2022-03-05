/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import ModuleOne from '../screens/ModuleOneScreen';
import ModuleTwo from '../screens/ModuleTwoScreen';
import ModuleThree from '../screens/ModuleThreeScreen';
import ModuleFour from '../screens/ModuleFourScreen';
import ModuleFive from '../screens/ModuleFiveScreen';
import ModuleSix from '../screens/ModuleSixScreen';
import QuizScreen from '../screens/QuizScreen';
import M1LessonOneScreen from '../screens/ModuleOne/Lesson1';
import M1LessonTwoScreen from '../screens/ModuleOne/Lesson2';
import M1LessonThreeScreen from '../screens/ModuleOne/Lesson3';
import M1LessonFourScreen from '../screens/ModuleOne/Lesson4';
import M2LessonOneScreen from '../screens/ModuleTwo/Lesson1';
import M2LessonTwoScreen from '../screens/ModuleTwo/Lesson2';
import M2LessonThreeScreen from '../screens/ModuleTwo/Lesson3';
import M2LessonFourScreen from '../screens/ModuleTwo/Lesson4';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="ModuleOne" component={ModuleOne} options={{ headerShown: true, title: 'Module One: Vibrations and Waves' }} />
      <Stack.Screen name="ModuleTwo" component={ModuleTwo} options={{ headerShown: true, title: 'Module Two: Light and Colors' }} />
      <Stack.Screen name="ModuleThree" component={ModuleThree} options={{ headerShown: true, title: 'Module Three: Reflections and Mirrors' }} />
      <Stack.Screen name="ModuleFour" component={ModuleFour} options={{ headerShown: true, title: 'Module Four: Refraction of Light' }} />
      <Stack.Screen name="ModuleFive" component={ModuleFive} options={{ headerShown: true, title: 'Module Five: Interference and Diffraction' }} />
      <Stack.Screen name="ModuleSix" component={ModuleSix} options={{ headerShown: true, title: 'Module Six: Optical Instruments 1' }} />
      <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ModuleOneLessonOne" component={M1LessonOneScreen} options={{ headerShown: true, title: 'Vibrations' }} />
      <Stack.Screen name="ModuleOneLessonTwo" component={M1LessonTwoScreen} options={{ headerShown: true, title: 'The Nature of a Wave' }} />
      <Stack.Screen name="ModuleOneLessonThree" component={M1LessonThreeScreen} options={{ headerShown: true, title: 'Properties of a Wave' }} />
      <Stack.Screen name="ModuleOneLessonFour" component={M1LessonFourScreen} options={{ headerShown: true, title: 'Vibrations' }} />
      <Stack.Screen name="ModuleTwoLessonOne" component={M2LessonOneScreen} options={{ headerShown: true, title: 'Theories of Light' }} />
      <Stack.Screen name="ModuleTwoLessonTwo" component={M2LessonTwoScreen} options={{ headerShown: true, title: 'Visible Light and Color' }} />
      <Stack.Screen name="ModuleTwoLessonThree" component={M2LessonThreeScreen} options={{ headerShown: true, title: 'Basic Properties of Light' }} />
      <Stack.Screen name="ModuleTwoLessonFour" component={M2LessonFourScreen} options={{ headerShown: true, title: 'Understanding Polarization and Malus law' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
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
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Learning Materials',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
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
          title: 'Help Corner',
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
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
