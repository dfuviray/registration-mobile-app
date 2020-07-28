import React from 'react';

import {Container, ButtonText} from './appButtonStyles';

export default function AppButton({name, onPress, ...resProps}) {
  return (
    <Container>
      <ButtonText onPress={onPress} {...resProps}>
        {name}
      </ButtonText>
    </Container>
  );
}
