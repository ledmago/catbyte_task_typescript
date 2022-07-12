/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { persistor, store } from "./src/store";
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootPage from "./src/screens/Root"
import UserDetail from "./src/screens/UserDetail"
import AddUser from "./src/screens/AddUser"




const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Root'>
            <Stack.Screen name="Root" component={RootPage} options={{ title: "Main Screen" }} />
            <Stack.Screen name="UserDetail" component={UserDetail} options={{ title: "User" }} />
            <Stack.Screen name='AddUser' component={AddUser} options={{ title: "Add User" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
