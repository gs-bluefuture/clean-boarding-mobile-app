import React from 'react';
import {RootStackParamList} from '../../types/rock-stack-param-list';
import {
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  BackgroundImage,
  Logo,
  WelcomeText,
} from './style';
import {StackNavigationProp} from '@react-navigation/stack';

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <Container>
      <BackgroundImage
        source={require('../../assets/images/utils/home-background.png')}>
      {/* <Logo source={require('../../assets/images/utils/cleanboarding-logo.png')} />
      <WelcomeText>Seja bem-vindo!</WelcomeText> */}
      <ButtonContainer>
        <Button
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <ButtonText>Login</ButtonText>
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Cadastro');
          }}>
          <ButtonText>Cadastro</ButtonText>
        </Button>
      </ButtonContainer>
      </BackgroundImage>
    </Container>
  );
};

export default Home;
