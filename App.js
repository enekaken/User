import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'proxima-nova': require('./assets/fonts/Proxima-Nova.ttf'),
    'proxima-nova-bold': require('./assets/fonts/Proxima-Nova-Bold.ttf'),
    'proxima-nova-xbold': require('./assets/fonts/Proxima-Nova-Xbold.ttf'),
  });
};

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="root" component={BottomTabNavigator}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
