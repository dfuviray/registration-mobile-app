import React from 'react';

import {Message} from './ErrorMessageStyles';

export default function ErrorMessage({visible, message}) {
  if (!visible) return null;
  return <Message>{message}</Message>;
}
