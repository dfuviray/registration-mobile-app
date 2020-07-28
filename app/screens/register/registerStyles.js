import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import {colors} from '../../config/colors';

export const Container = styled.ScrollView`
  background: ${colors['light-gray']};
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  width: 100%;
`;

export const Message = styled.Text`
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const Label = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  margin-right: 10px;
`;

export const MemberNavigationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

export const PhoneContainer = styled.View`
  flex-direction: row;
  width: ${Dimensions.get('window').width}px;
`;
export const SignInNav = styled.Text`
  color: ${colors.blue};
  font-size: 18px;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 40px;
  text-align: center;
`;
