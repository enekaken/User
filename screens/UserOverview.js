import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import ViewPager from '@react-native-community/viewpager';

import UserScreen from '../screens/UserScreen';
import UserAnalytics from '../screens/UserAnalytics';
import FriendsScreen from '../screens/FriendsScreen.js';


export default function WorkoutOverview() {
  return (
  <View style={{ flex: 1 }}>
    <ViewPager style={styles.viewPager} initialPage={1}>
      <View style={styles.page} key="1">
        <FriendsScreen />
      </View>
      <View style={styles.page} key="2">
        <UserScreen />
      </View>
      <View style={styles.page} key="3">
        <UserAnalytics />
      </View>
    </ViewPager>
  </View>
);
}
const styles = StyleSheet.create({
viewPager: {
flex: 1,
}
});