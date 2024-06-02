import {StyleSheet} from 'react-native';

export const styless = StyleSheet.create({
  carouselItem: {
    marginTop: 10,
    width: 270,
    marginHorizontal: 6,
    overflow: 'visible', // Garante que as sombras não sejam cortadas no Android
  },
  carouselImage: {
    width: '95%',
    height: 180,
    borderRadius: 8,
    marginLeft: 7,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  carouselTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 7,
  },
  carouselDescription: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 7,
  },
});
