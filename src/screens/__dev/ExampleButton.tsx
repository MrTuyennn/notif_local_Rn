import React from 'react';
import {ScrollView} from 'react-native';
import Block from '../../components/base/Block';
import Button from '../../components/base/Button';
import Text from '../../components/base/Text';

const ExampleButton = () => {
  const _renderChild = (title: string, Component: any) => {
    return (
      <Block margin={{bottom: 12}} row align="center" justify="space-between">
        <Text size={16} margin={{bottom: 12}}>
          {title}
        </Text>
        {Component}
      </Block>
    );
  };

  return (
    <Block flex backgroundColor="white">
      <ScrollView>
        <Block padding={{horizontal: 16, vertical: 24}}>
          <Text size={16} fontType="bold" margin={{bottom: 12}}>
            Text
          </Text>
          {_renderChild(
            'Default',
            <Button title="Button" onPress={() => console.log('Button')} />,
          )}
          {_renderChild(
            'Outline',
            <Button
              title="Button"
              type="outline"
              onPress={() => console.log('Outline')}
            />,
          )}
          {_renderChild(
            'Text',
            <Button
              title="Button"
              type="text"
              onPress={() => console.log('Text')}
            />,
          )}
          {_renderChild('Disabled', <Button title="Button" disabled />)}
          <Text size={16} fontType="bold" margin={{vertical: 12}}>
            Icon
          </Text>
          {_renderChild(
            'Left Icon',
            <Button
              leftIcon={{type: 'materialCommunityIcons', name: 'home'}}
              title="Button"
              onPress={() => console.log('Button')}
            />,
          )}
          {_renderChild(
            'Right Icon',
            <Button
              rightIcon={{type: 'materialCommunityIcons', name: 'home'}}
              title="Button"
              onPress={() => console.log('Button')}
            />,
          )}
          {_renderChild('Loading', <Button loading title="Button" />)}
        </Block>
      </ScrollView>
    </Block>
  );
};

export default ExampleButton;
