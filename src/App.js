import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionId: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      let storedSessionId = await AsyncStorage.getItem('sessionId');
      if (!storedSessionId) {
        const response = await fetch('https://example.com/api/session'); // sostituisci con l'endpoint corretto
        const data = await response.json();
        storedSessionId = data.sessionId;
        await AsyncStorage.setItem('sessionId', storedSessionId);
      }
      this.setState({ sessionId: storedSessionId, loading: false });
    } catch (error) {
      console.error('Errore nella gestione della sessione:', error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { sessionId, loading } = this.state;

    if (loading) {
      return <ActivityIndicator/>;
    }

    return (
      <View>
        <Text>Numero di Sessione: {sessionId}</Text>
        {/* Qui puoi aggiungere altre schermate o componenti */}
      </View>
    );
  }
}

export default App;
