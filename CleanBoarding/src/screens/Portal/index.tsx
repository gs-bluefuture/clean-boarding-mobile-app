import React, { useState } from 'react';
import {
  Container,
  SearchContainer,
  IconContainer,
  SearchIcon,
  styles,
  WelcomeText,
  Categories,
} from './style';
import { KeyboardAvoidingView, Platform, ScrollView, View, FlatList, Image, Text, TextInput, Linking, TouchableOpacity } from 'react-native';
import { MonitorButton } from '../../components/MonitorButton';
import Toast from 'react-native-toast-message';
import { carouselData } from '../../components/PortalCarolseu';
import { styless } from '../../components/PortalCarolseu/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/rock-stack-param-list';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Portal'
>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const Portal: React.FC<Props> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNavigateToDocSection = (sectionKey: any) => {
    navigation.navigate('Documents', { section: sectionKey });
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Digite algo para buscar.',
      });
      return;
    }
  
    setLoading(true);
    try {
      // Tentativa de busca aqui
    } catch (error: any) {
      console.error('Erro ao buscar documentação:', error);
      Toast.show({
        type: 'error',
        text1: 'Erro ao buscar',
        text2: `Não foi possível realizar a busca: ${error.message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleMonitorPress = () => {
    Linking.openURL('https://grafana.com/');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Container>
          <SearchContainer>
            <IconContainer>
              <SearchIcon source={require('../../assets/icons/search-icon.png')} />
            </IconContainer>
            <TextInput
              value={searchQuery}
              onChangeText={handleSearchChange}
              placeholder="Buscar na documentação"
              clearButtonMode="while-editing"
              onSubmitEditing={handleSearch} // Adicionado para lidar com o "enter" no teclado
              returnKeyType="search" // Muda o botão "enter" para "search"
              style={{
                flex: 1,
                paddingHorizontal: 40,
                paddingVertical: 8,
                borderRadius: 22,
                fontSize: 16,
                backgroundColor: '#ffffff',
                marginLeft: 1,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
              }}
            />
          </SearchContainer>
          <WelcomeText>
            Bem vindo!
          </WelcomeText>
          <View style={styles.container}>
            <Image
              source={require('../../assets/images/utils/banner-cleanboarding.png')}
              style={styles.titleImage}
            />
          </View>
          <Categories> Documentação </Categories>
          <FlatList
            data={carouselData}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleNavigateToDocSection(item.key)}>
                <View style={styless.carouselItem}>
                  <Image source={item.image} style={styless.carouselImage} />
                  <Text style={styless.carouselTitle}>{item.title}</Text>
                  <Text style={styless.carouselDescription}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            pagingEnabled
          />
          <MonitorButton text="Monitoramento" onPress={handleMonitorPress}></MonitorButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Portal;
