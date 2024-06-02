// History.js
import React, { useState } from 'react';
import {ScrollView, View } from 'react-native';
import {styles, historyData} from './style';
import HistoryCard from '../../components/HistoryCard';
import { IconContainer, SearchContainer, SearchIcon, SearchInput } from '../Portal/style';

const HistoryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (query: string) => {
      setSearchQuery(query);
      // Logic to handle search
  };

  return (
    <View style={styles.container}>
      <SearchContainer>
        <IconContainer>
          <SearchIcon source={require('../../assets/icons/search-icon.png')} />
        </IconContainer>
        <SearchInput
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholder="Buscar um pedido no cleanboarding"
          clearButtonMode="while-editing"
        />
      </SearchContainer>
      <ScrollView style={styles.container}>
        {historyData.map((order, index) => (
          <HistoryCard key={index.toString()} order={order} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HistoryPage;
