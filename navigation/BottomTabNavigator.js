import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import UserAnalytics from '../screens/UserAnalytics';
import FriendsScreen from '../screens/FriendsScreen.js';
import UserOverview from '../screens/UserOverview.js';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} >
      <BottomTab.Screen
        name="User"
        component={UserOverview}
        options={{
          title: 'User',
          margin: 5,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-person" />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          margin: 5,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          title: 'Friends',
          margin: 5,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-person" />,
        }}
      />

    </BottomTab.Navigator>
  );
}

