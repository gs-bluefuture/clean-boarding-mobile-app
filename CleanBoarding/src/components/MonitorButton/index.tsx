/* eslint-disable react/react-in-jsx-scope */
import {Button, ButtonText} from './styles';

type SearchButtonProps = {
  text: string;
  onPress: () => void;
};

export const MonitorButton: React.FC<SearchButtonProps> = ({text, onPress}) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};
