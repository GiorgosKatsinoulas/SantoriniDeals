import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AuthScreenComponent: FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Hi Login page</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AuthScreenComponent;
