import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const SearchContainer = styled.View`
  padding: 10px;
  background-color: #6CBFBA;
  border-bottom-width: 1px;
  border-color: #e4e4e4;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: 'gray',
}))`
  background-color: #ffffff;
  padding-horizontal: 40px;
  padding-vertical: 8px;
  border-radius: 22px;
  font-size: 16px;
  flex: 1;
  margin-right: 1px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  elevation: 2;
`;

export const IconContainer = styled.View`
  position: absolute;
  left: 22px;
  z-index: 1;
`;

export const SearchIcon = styled.Image`
  width: 18px;
  height: 18px;
`;

export const WelcomeText = styled.Text`
  color: #6CBFBA;
  margin-top: 22px;
  margin-left: 18px;
  font-size: 25px;
  font-weight: bold;
`;

export const WelcomeName = styled.Text`
  color: #000000;
  font-size: 25px;
  font-weight: bold;
`;

export const Categories = styled.Text`
  color: #000000;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 12px;
  font-size: 25px;
  font-weight: bold;
`;

export const styles = StyleSheet.create({
  
loadingText: {
  marginTop: 20,
  color: 'white',
  fontSize: 18
},
  loadingOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'  // Semi-transparent overlay
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  titleImage: {
    width: '100%',
    height: 175,
    resizeMode: 'cover',
    borderRadius: 8,
    shadowColor: 'black',
  },
  middleText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    marginTop: 20,
    paddingHorizontal: 20,
  }
});
