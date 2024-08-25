import React from 'react';

import Screen from '../components/Screen';
import { FlatList } from 'react-native';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/images/jacket.jpg')
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/images/jacket.jpg')
  },
  {}
];

function ListingsScreen(props) {
  return (
    <Screen>
      <FlatList data={listings} />
    </Screen>
  );
}

export default ListingsScreen;
