import styled from 'styled-components/native';

import {colors} from '../../config/colors';

export const Container = styled.TouchableOpacity`
  align-items: center;
  align-self: center;
  border-radius: 10px;
  background: ${colors.black};
  height: 50px;
  justify-content: center;
  margin-top: 20px;
  width: 300px;
`;
export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  text-transform: capitalize;
`;
