import React, {FC} from 'react';
import {Text, View} from 'react-native-ui-lib';
import useStore from '../../../store/store';

const ChatScreenComponent: FC = () => {
  const colors = useStore(state => state.colors);

  return (
    <>
      <View flex center backgroundColor={colors.backgroundColor}>
        <Text textColor>Hi Chat Screen</Text>
      </View>
    </>
  );
};

export default ChatScreenComponent;
