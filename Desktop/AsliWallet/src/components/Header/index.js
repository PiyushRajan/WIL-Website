import {View, Text} from 'react-native';
import styles from '../../styles/Header';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Pcontainer}>
        <Text style={styles.P}>P</Text>
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.WelcomeText}>Welcome</Text>
        <Text style={styles.NameText}>Piyush Rajan</Text>
      </View>
    </View>
  );
};

export default Header;
