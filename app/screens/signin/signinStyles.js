import styled from 'styled-components/native';

import {colors} from '../../config/colors';

export const Container = styled.KeyboardAvoidingView`
  background: ${colors['light-gray']};
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 40px;
  text-align: center;
`;
