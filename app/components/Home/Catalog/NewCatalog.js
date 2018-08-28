import React, { Component } from 'react';
// import CatalogTab from '../../Contents';
import { View, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

type State = { activeContent: string };
type Props = {};
class NewCatalog extends Component<Props, State> {
  // constructor(props: Props) {
  //   super(props);
  //   this.state = {
  //     activeContent: 'catalog',
  //   };
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.activeContent !== 'catalog') {
  //     this.setState({ activeContent: nextProps.activeContent });
  //   } else {
  //     this.setState({ activeContent: 'catalog' });
  //   }
  // }

  render() {
    return (
      <View>
        <Text>NewCatalog</Text>
      </View>
    );
  }
}

export default withNavigationFocus(NewCatalog);
