import React, {useState} from 'react';
import {Input} from './style';
import {RegisterButton} from '../RegisterButton';

type RegisterFormProps = {
  companyName: string;
  setCompanyName: (text: string) => void;
  phone: string;
  setPhone: (text: string) => void;
  email: string;
  setEmail: (text: string) => void;
  cnpj: string;
  setCnpj: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  confirmPassword: string;
  setConfirmPassword: (text: string) => void;
  onRegisterPress: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  companyName,
  setCompanyName,
  email,
  setEmail,
  phone,
  setPhone,
  cnpj,
  setCnpj,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onRegisterPress,
}) => {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleRegisterPress = () => {
    onRegisterPress();
  };

  return (
    <>
      <Input
        placeholder="Nome da empresa"
        value={companyName}
        onChangeText={setCompanyName}
        autoCapitalize="none"
        keyboardType="name-phone-pad"
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        autoCapitalize="none"
        keyboardType="phone-pad"
      />
      <Input
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
        keyboardType="numeric"
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Input
        placeholder="Confirme sua senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <RegisterButton onPress={handleRegisterPress} text="Cadastre-se" />
    </>
  );
};

export default RegisterForm;
