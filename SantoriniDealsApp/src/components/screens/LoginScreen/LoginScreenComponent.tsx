import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Button, Text, View} from 'react-native-ui-lib';
import {StackNavigationConstants} from '../../../navigation/navigationConstants';
import useStore from '../../../store/store';

const LoginScreenComponent: FC = () => {
  const navigation = useNavigation();
  const colors = useStore(state => state.colors);

  return (
    <>
      <View flex center backgroundColor={colors.backgroundColor}>
        <Text textColor>Hi Login page</Text>

        <Button
          label="Successful login "
          onPress={() => {
            navigation.navigate(
              StackNavigationConstants.DASHBOARD_SCREEN as never,
            );
          }}
        />
      </View>
    </>
  );
};

export default LoginScreenComponent;
