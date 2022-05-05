import { APP_COLORS } from '@src/theme/colors';
import React from 'react';
import {View} from 'react-native';

import {StyledTextInput} from './styled';

export const TextInput = ({LeftIcon, ...props}) => {
  return (
      <View>
        {LeftIcon}
        <StyledTextInput placeholderTextColor={APP_COLORS.white} {...props} />
      </View>
  );
};
