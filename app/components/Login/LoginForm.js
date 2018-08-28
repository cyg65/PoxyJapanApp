/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { onSignIn } from './Auth';

type Props = { navigation: { navigate: Function } };
type State = {
  passOpacity: number,
  usrOpacity: number,
  psudoUser: string,
  psudoPass: string,
  loadingBtn: boolean,
};
export default class LoginForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      passOpacity: 0.4,
      usrOpacity: 0.4,
      psudoUser: '',
      psudoPass: '',
      loadingBtn: false,
    };
  }
  defaultBtn = () => (
    <View style={[styles.loadingContainer, styles.horizontal]}>
      <View style={styles.loadContainer}>
        <Text style={styles.btnText}>L O G I N</Text>
      </View>
    </View>
  );
  loadingBtn = () => (
    <View style={[styles.loadingContainer, styles.horizontal]}>
      <View style={styles.loadContainer}>
        <ActivityIndicator color="#ffffff" />
      </View>
      <View style={styles.loadContainer}>
        <Text style={styles.btnText}>LOGGING IN</Text>
      </View>
    </View>
  );
  authorize = () => {
    this.setState({ loadingBtn: true });
    setTimeout(() => {
      if (this.state.psudoUser === 'username' && this.state.psudoPass === 'password') {
        onSignIn().then(() => this.props.navigation.navigate('SignedIn'));
        this.setState({ loadingBtn: false });
      } else {
        this.setState({ loadingBtn: false });
        Alert.alert(
          'Invalid username or password',
          '',
          [{ text: 'Forgot your password?' }, { text: 'Cancel' }],
          {
            cancelable: false,
          },
        );
      }
    }, 2000);
  };

  passInput: TextInput;
  loginBtn: TouchableOpacity;

  render() {
    // if(psudoUser !=== null){this.setState({ usrOpacity:1 })}
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={psudoUser => this.setState({ psudoUser })}
          onBlur={() => this.setState({ usrOpacity: this.state.psudoUser === '' ? 0.4 : 1 })}
          onFocus={() => this.setState({ usrOpacity: 1 })}
          style={[styles.usrInput, { opacity: this.state.usrOpacity }]}
          underlineColorAndroid="transparent"
          placeholder="username (email)"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => {
            this.passInput.focus();
          }}
        />
        <TextInput
          onChangeText={psudoPass => this.setState({ psudoPass })}
          onBlur={() => this.setState({ passOpacity: this.state.psudoPass === '' ? 0.4 : 1 })}
          onFocus={() => this.setState({ passOpacity: 1 })}
          style={[styles.passInput, { opacity: this.state.passOpacity }]}
          underlineColorAndroid="transparent"
          placeholder="password"
          returnKeyType="done"
          ref={(input) => {
            this.passInput = input;
          }}
          onSubmitEditing={() => {
            this.authorize();
          }}
          secureTextEntry
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={this.authorize} style={styles.touchableOpacity}>
            <LinearGradient
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 1.0 }}
              colors={['#6c5ce7', '#e84393']}
              style={styles.linearGradient}
            >
              {this.state.loadingBtn ? this.loadingBtn() : this.defaultBtn()}
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  usrInput: {
    height: 40,
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderColor: '#6c5ce7',
    paddingHorizontal: 10,
    color: '#000000',
  },

  horizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },

  passInput: {
    height: 40,
    marginBottom: 40,
    borderBottomWidth: 0.5,
    borderColor: '#ab4fbd',
    paddingHorizontal: 10,
    color: '#000000',
  },

  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    backgroundColor: '#e84393',
    borderRadius: 5,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 5,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  touchableOpacity: {
    width: '100%',
    height: '100%',
  },
  btnText: {
    color: '#eeeeee',
    fontWeight: '300',
    fontSize: 18,
  },
});
