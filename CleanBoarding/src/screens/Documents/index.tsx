import React, { useState } from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import styles from './style';
import { SearchContainer, IconContainer, SearchIcon } from '../Portal/style';
import Toast from 'react-native-toast-message';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/rock-stack-param-list';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Documents'
>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const DocumentationPage: React.FC<Props> = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

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
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
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
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>1. Solução</Text>
      <Text style={styles.text}>
        O projeto "Clean Boarding" é uma proposta inovadora voltada para o tratamento e monitoramento da água de lastro dos navios, com o objetivo de prevenir problemas ambientais causados por bioinvasões. Esta solução abrange três principais componentes:
      </Text>
      <Text style={styles.listItem}>- Monitoramento em Tempo Real: Implantação de sensores baseados em Internet das Coisas (IoT) e tecnologias de inteligência artificial para rastrear continuamente a qualidade da água de lastro.</Text>
      <Text style={styles.listItem}>- Tratamento Eficiente: Utilização de métodos avançados para tratar a água de lastro dentro dos navios.</Text>
      <Text style={styles.listItem}>- Deslastro Seguro: A água tratada é liberada fora do território marítimo do país de forma legal e segura.</Text>
      
      <Text style={styles.heading}>2. Bioinvasão</Text>
      <Text style={styles.text}>
        Bioinvasão refere-se à introdução de espécies não nativas em novos ambientes, geralmente através de atividades humanas, como o transporte marítimo.
      </Text>
      
      <Text style={styles.heading}>3. Monitoramento</Text>
      <Text style={styles.text}>
        O monitoramento é um componente crucial do projeto "Clean Boarding". Utilizando sensores IoT e inteligência artificial, o sistema fornece uma vigilância constante sobre a composição e qualidade da água de lastro.
      </Text>
      <Text style={styles.text}>
      </Text>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DocumentationPage;
