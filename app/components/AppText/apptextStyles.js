import styled from 'styled-components/native';
import {colors} from '../../config/colors';

export const Container = styled.View`
  background: white;
  border: 1px solid ${colors.gray};
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
  margin-right: ${(props) => (props.countryCode ? '0px' : '5px')};
`;
export const TextBox = styled.TextInput`
  color: ${colors.black};
  font-size: 18px;
`;
