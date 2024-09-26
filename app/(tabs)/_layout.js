import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerTitle: 'Feed', title: 'Feed' }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{ headerTitle: 'Account', title: 'Account' }}
      />
    </Tabs>
  );
};

export default TabsLayout;
