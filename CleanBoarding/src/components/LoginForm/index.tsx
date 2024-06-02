import React from 'react';
import {Input} from './style';
import {LoginButton} from '../LoginButton';

type LoginFormProps = {
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  onLoginPress: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onLoginPress,
}) => {
  return (
    <>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <LoginButton onPress={onLoginPress} text="Login" />
    </>
  );
};

export default LoginForm;
