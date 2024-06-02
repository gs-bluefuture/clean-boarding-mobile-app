/* eslint-disable react/react-in-jsx-scope */
import {Button, ButtonText} from './style';

type LoginButtonProps = {
  onPress: () => void;
  text: string;
};

export const LogoutButton: React.FC<LoginButtonProps> = ({onPress, text}) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};
