import {View, Text} from 'react-native';
import styles from '../../styles/MyDocument';
import Card from '../Cards';
import React from 'react';

const Docement = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.MyText}>My Documents</Text>
      <Card />
    </View>
  );
};

export default Docement;
