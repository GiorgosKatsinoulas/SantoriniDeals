import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Text, View} from 'react-native-ui-lib';
import useStore from '../../store/store';
import {lang} from '../../utils/langString';

const AuthScreenComponent: FC = () => {
  const toggleTheme = useStore(state => state.toggleTheme);
  const colors = useStore(state => state.colors);

  const changeLang = useStore(state => state.changeLang);
  function changeLangGlobally(lng: string) {
    changeLang(lng);
    i18n.changeLanguage(lng);
  }

  const {t, i18n} = useTranslation();
  return (
    <>
      <View flex center backgroundColor={colors.backgroundColor}>
        <Text textColor>Hi Login page</Text>
        <Button
          borderRadius={15}
          label="Toggle"
          size={Button.sizes.medium}
          backgroundColor={colors.buttonColor}
          color={colors.textColor}
          onPress={() => toggleTheme()}
        />
        <Text>{t('greeting')}</Text>
        <Button
          label="Switch to Greek"
          onPress={() => {
            changeLangGlobally(lang.gr);
          }}
        />
        <Button
          label="Switch to en"
          onPress={() => {
            changeLangGlobally(lang.en);
          }}
        />
      </View>
    </>
  );
};

export default AuthScreenComponent;
