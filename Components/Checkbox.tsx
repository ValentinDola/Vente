import {Pressable, useColorScheme} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../Constants';

interface CheckboxProps {
  isChecked: boolean;
  isPress?: () => void;
}

const Checkbox = (props: CheckboxProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {isChecked, isPress} = props;

  const name = isChecked ? 'checkbox-marked-outline' : 'checkbox-blank-outline';

  return (
    <Pressable onPress={isPress}>
      <Icon
        name={name}
        size={20}
        color={isDarkMode ? theme.colors.antiFlashWhite : 'black'}
      />
    </Pressable>
  );
};

export default Checkbox;
