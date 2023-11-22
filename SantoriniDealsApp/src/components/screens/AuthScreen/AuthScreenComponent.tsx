import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Button, Text, View} from 'react-native-ui-lib';
import {StackNavigationConstants} from '../../../navigation/navigationConstants';
import useStore from '../../../store/store';

const AuthScreenComponent: FC = () => {
  const colors = useStore(state => state.colors);
  const navigation = useNavigation();

  return (
    <>
      <View flex center backgroundColor={colors.backgroundColor}>
        <Text textColor>Hi Auth page</Text>
        <Button
          label="Login"
          onPress={() => {
            navigation.navigate(StackNavigationConstants.LOGIN_SCREEN as never);
          }}
        />
        <Button
          label="create account"
          onPress={() => {
            navigation.navigate(
              StackNavigationConstants.SIGNUP_SCREEN as never,
            );
          }}
        />
      </View>
    </>
  );
};

export default AuthScreenComponent;
