/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import LoginForm from './LoginForm';
import LoginSocial from './LoginSocial';

const platform = Platform.OS;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const isIphoneX = platform === 'ios' && deviceHeight === 812 && deviceWidth === 375;

type Props = { navigation: { navigate: Function } };
type State = {};
export default class Login extends Component<Props, State> {
  skip = () => {
    this.props.navigation.navigate('SignedIn');
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" translucent={false} backgroundColor="white" />

        <View style={styles.textContainer}>
          <Text style={styles.loginWith}>or login with</Text>
        </View>
        <View
          style={[
            styles.logoContainer,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          ]}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
            }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
              <Text>Register</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              style={styles.logo}
              source={
                /* eslint-disable global-require */
                require('../../images/proxyjapan_logo_tp.png')
                /* eslint-enable global-require */
              }
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
            }}
          >
            <TouchableOpacity onPress={this.skip}>
              <Text>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>

        <KeyboardAvoidingView
          style={styles.kavContainer}
          keyboardVerticalOffset={64}
          behavior="padding"
        >
          <View style={styles.formContainer}>
            <LoginForm navigation={this.props.navigation} />
          </View>
        </KeyboardAvoidingView>

        <View style={[styles.socialContainer, { alignItems: 'center' }]}>
          <View
            style={[
              styles.socialContainer,
              {
                borderTopColor: platform === 'ios' ? '#dfe6e9' : 'transparent',
                borderTopWidth: 0.3,
                width: 330,
              },
            ]}
          >
            <LoginSocial />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    /* eslint-disable no-nested-ternary */
    paddingTop: platform === 'ios' ? (isIphoneX ? 30 : 20) : null,
    /* eslint-enable no-nested-ternary */
  },
  kavContainer: {
    flex: 3,
  },
  logoContainer: {
    flex: 2,
    padding: 20,
  },
  formContainer: {
    flex: 1,
  },
  socialContainer: {
    flex: 1,
  },
  logo: {
    width: 170,
    height: 170,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 4,
    backgroundColor: 'white',
    position: 'absolute',
    /* eslint-disable no-nested-ternary */
    bottom: platform === 'ios' ? (isIphoneX ? '14.3%' : '13.7%') : '13.8%',
    /* eslint-enable no-nested-ternary */
    right: '50%',
    zIndex: 15,
    width: 100,
    transform: [{ translateX: 50 }],
  },
  loginWith: {
    fontSize: 15,
    color: '#b2bec3',
  },
});
