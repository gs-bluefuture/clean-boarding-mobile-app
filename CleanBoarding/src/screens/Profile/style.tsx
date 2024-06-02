import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #fff;
`;

export const UserProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const InputField = styled.TextInput`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: #6CBFBA;
  padding: 10px;
  border-radius: 5px;
  margin-top: 2px;
`;

export const LogoutButtonText = styled.Text`
  color: #fff;
  text-align: center;
`;

export const InputRow = styled.View`
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin-bottom: 10px;
`;

export const EditIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-bottom: 5px;
`;
