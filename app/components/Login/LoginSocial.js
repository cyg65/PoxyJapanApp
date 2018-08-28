/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

type State = {};
type Props = {};
export default class LoginSocial extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>


        <View style={styles.iconContainer}>
          <Icon name="social-facebook" size={30} color="#6c5ce7" />
          <Icon name="social-twitter" size={30} color="#ab4fbc" />
          <Icon name="social-instagram" size={30} color="#e84393" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
