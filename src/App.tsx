import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet,LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationRef} from './navigation/NavigationServices';
import ExampleScreen from './screens/__dev/ExampleScreen';
import ExampleSwitch from './screens/__dev/ExampleSwitch';
import {useTheme} from './themes';

type Props = {};
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = (props: Props) => {
  const {NavigationTheme} = useTheme();
  return (
    <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
      <SafeAreaProvider>
        <ExampleSwitch />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
