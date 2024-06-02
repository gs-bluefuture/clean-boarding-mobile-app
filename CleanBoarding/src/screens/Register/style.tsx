import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  resizeMode: cover;
`;

export const Logo = styled.Image`
  width: 180px;
  height: 180px;
  margin-top: 50px;
  margin-bottom: 45px;
`;

export const ForgotPasswordText = styled.Text`
  color: #6CBFBA;
  margin-top: 20px;
  text-decoration: underline;
`;
