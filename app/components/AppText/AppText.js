import React from 'react';

import {Container, TextBox} from './apptextStyles';

export default function AppText(resProps) {
  return (
    <Container>
      <TextBox {...resProps} />
    </Container>
  );
}
