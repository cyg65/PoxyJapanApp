/* @flow */
import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import { authorize } from './app/components/Login/Auth';
import { createRootNavigator, SignedIn } from './app/components/Contents';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import NavigationService from './app/components/NavigationService';

type Props = {};
type State = {
  signedIn: boolean,
  checkedSignedIn: boolean,
};
export default class Router extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignedIn: false,
    };
  }
  componentDidMount() {
    authorize().then(res => this.setState({ signedIn: res, checkedSignedIn: true }));
  }

  render() {
    const { checkedSignedIn, signedIn } = this.state;
    if (!checkedSignedIn) {
      return null;
    }

    if (signedIn) {
      return (
        <StyleProvider style={getTheme(platform)}>
          <SignedIn />
        </StyleProvider>
      );
    }
    const Layout = createRootNavigator(signedIn);
    return (
      <StyleProvider style={getTheme(platform)}>
        <Layout
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </StyleProvider>
    );
  }
}
