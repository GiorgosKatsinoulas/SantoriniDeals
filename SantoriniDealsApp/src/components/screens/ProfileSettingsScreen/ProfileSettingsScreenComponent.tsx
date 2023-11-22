import React, {FC} from 'react';
import {Text, View} from 'react-native-ui-lib';
import useStore from '../../../store/store';

const ProfileSettingsScreenComponent: FC = () => {
  const colors = useStore(state => state.colors);

  return (
    <>
      <View flex center backgroundColor={colors.backgroundColor}>
        <Text textColor>Hi Profile Screen</Text>
      </View>
    </>
  );
};

export default ProfileSettingsScreenComponent;
