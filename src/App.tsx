import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Block from './components/base/Block';
import Text from './components/base/Text';
import {useTheme} from './themes';
import TextInput from './components/base/TextInput';

type Props = {};

const App = (props: Props) => {
  const {Colors} = useTheme();
  return (
    <SafeAreaProvider>
      <Block flex row>
        <Block justify="center" flex backgroundColor={Colors.lightBlue}>
          <Text fontType="bold" center size={20}>
            Tuyen
          </Text>
        </Block>
        <Block flex backgroundColor={Colors.veryLightPink} />
      </Block>
      {/* <Block
        flex
        align="center"
        justify="center"
        backgroundColor={Colors.error}> */}
      <Block margin={{bottom: 16}}>
        <TextInput
          onChangeText={e => console.log(e)}
          showError
          error="lỗi"
          label="Input with left icon"
          placeholder="Place your Text"
          leftIcon={{type: 'octicons', name: 'home'}}
        />
      </Block>
      {/* </Block> */}
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
