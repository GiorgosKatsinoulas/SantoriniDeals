import React, {FC} from 'react';
import {Text, View} from 'react-native-ui-lib';
import useStore from '../../../store/store';

const DashboardScreenComponent: FC = () => {
  const colors = useStore(state => state.colors);

  return (
    <>
      <View flex center backgroundColor={colors.backgroundColor}>
        <Text textColor>Hi Dashboard page</Text>
      </View>
    </>
  );
};

export default DashboardScreenComponent;
