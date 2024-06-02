import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';

interface Order {
  number: string;
  value: number;
  quantity: number;
  vendor: string;
  date: string;
}

interface HistoryCardProps {
  order: Order;
}

const HistoryCard: React.FC<HistoryCardProps> = ({order}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Pedido Nº: {order.number}</Text>
      <Text style={styles.text}>Valor: R$ {order.value.toFixed(2)}</Text>
      <Text style={styles.text}>Quantidade: {order.quantity}</Text>
      <Text style={styles.text}>Fornecedor: {order.vendor}</Text>
      <Text style={styles.text}>Data: {order.date}</Text>
    </View>
  );
};

export default HistoryCard;
