import React, { useState } from 'react';
import RegisterForm from '../../components/RegisterForm';
import { Container, ContentContainer, BackgroundImage, Logo } from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/rock-stack-param-list';
import Toast from 'react-native-toast-message';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Cadastro'
>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const Register: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const auth = getAuth();

  const isPasswordValid = (password: string) => {
    return password.length >= 6 && /[A-Z]/.test(password);
  };

  const handleRegister = () => {
    if (!email || !password || !confirmPassword || !cnpj) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Todos os campos são obrigatórios.',
      });
      return;
    }

    if (!email.includes('@')) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'O email deve conter @.',
      });
      return;
    }

    if (cnpj.length !== 14) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'O CNPJ deve ter 14 dígitos.',
      });
      return;
    }

    if (
      password !== confirmPassword &&
      (!isPasswordValid(password) || !isPasswordValid(confirmPassword))
    ) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2:
          'A senha e a confirmação de senha devem ser iguais e atender aos critérios de senha.',
      });
      return;
    }

    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Usuário cadastrado com sucesso
        console.log('Usuário cadastrado:', userCredential.user);
        Toast.show({
          type: 'success',
          text1: 'Sucesso',
          text2: 'Usuário cadastrado com sucesso.',
        });
        setLoading(false);
        navigation.navigate('Login');

      })
      .catch((error) => {
        console.error('Erro ao cadastrar usuário:', error);
        Toast.show({
          type: 'error',
          text1: 'Erro ao cadastrar',
          text2: error.message,
        });
        setLoading(false);
      });
  };

  return (
    <Container>
      <BackgroundImage
        source={require('../../assets/images/utils/home.png')}>
        <ContentContainer>
          <Logo source={require('../../assets/images/utils/cleanboarding-logo.png')} />
          <RegisterForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            cnpj={cnpj}
            setCnpj={setCnpj}
            onRegisterPress={handleRegister}
            loading={loading}
          />
        </ContentContainer>
      </BackgroundImage>
    </Container>
  );
};

export default Register;
