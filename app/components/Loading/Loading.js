import React from 'react';
import {ActivityIndicator} from 'react-native';

import {colors} from '../../config/colors';

export default function Loading() {
  return (
    <ActivityIndicator
      style={{alignSelf: 'center', top: '50%'}}
      size="small"
      color={colors.black}
    />
  );
}
