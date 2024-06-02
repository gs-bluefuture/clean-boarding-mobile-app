import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color:#6CBFBA;
`;

export const Logo = styled.Image`
  width: 400px;
  height: 400px;
  margin-top: 80px;
  margin-left: 6px;
  align-items: center;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  resizemode: cover;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 180px;
`;

export const WelcomeText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
  color: #000000;
`;

export const Button = styled.TouchableOpacity`
  width: 48%;
  height: 60px;
  background-color: #ffffff;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 580px;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;
