/* eslint-disable react/react-in-jsx-scope */
import {Button, ButtonText} from './style';

type RegisterButtonProps = {
  onPress: () => void;
  text: string;
};

export const RegisterButton: React.FC<RegisterButtonProps> = ({onPress, text}) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};
