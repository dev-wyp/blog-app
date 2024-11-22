import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';

export default () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          headerTitle: ({}) => (
            <Searchbar
              style={{ width: '100%' }}
              placeholder="Search Restaurants"
              onChangeText={setSearchQuery}
              value={searchQuery}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarLabel: 'Discover',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="compass" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarLabel: 'Wishlist',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          tabBarLabel: 'News',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="newspaper" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Account',
          headerTitle: 'My Account',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
