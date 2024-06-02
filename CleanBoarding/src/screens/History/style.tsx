import {StyleSheet} from 'react-native';

export const historyData = [
  {
    number: '3125354',
    value: 1532.59,
    quantity: 48,
    vendor: 'Mercado Livre',
    date: '01/11/2023',
  },
  {
    number: '35846121',
    value: 2515.84,
    quantity: 15,
    vendor: 'Kabuum',
    date: '09/10/2023',
  },
  {
    number: '685146351',
    value: 3215.45,
    quantity: 4,
    vendor: 'Amazon',
    date: '8/10/2023',
  },
  {
    number: '8798456321',
    value: 55454.24,
    quantity: 65,
    vendor: 'Kalunga',
    date: '15/08/2023',
  },
  {
    number: '8798456321',
    value: 6451.89,
    quantity: 15,
    vendor: 'Amazon',
    date: '15/02/2023',
  },
];

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
});
