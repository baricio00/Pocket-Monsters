import React, { Component } from 'react';
import { View, Text, Image, Button, Alert } from 'react-native';

class ObjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      object: this.props.route.params.object, // Dato passato dalla navigazione
    };
  }

  handleAction = () => {
    const { object } = this.state;

    if (object.type === 'monster') {
      // Logica per combattere un mostro
      Alert.alert('Combattimento', `Hai deciso di combattere contro ${object.name}.`);
    } else if (object.type === 'candy') {
      // Logica per mangiare una caramella
      Alert.alert('Ricarica', `Hai mangiato ${object.name} e guadagnato punti vita.`);
    } else if (object.type === 'artifact') {
      // Logica per equipaggiare un artefatto
      Alert.alert('Equipaggiamento', `Hai equipaggiato ${object.name}.`);
    }
  };

  render() {
    const { object } = this.state;

    return (
      <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{object.name}</Text>
        <Image source={{ uri: object.image }} style={{ width: 200, height: 200, marginVertical: 20 }} />
        <Text>Tipo: {object.type}</Text>
        <Text>Livello: {object.level}</Text>
        <Text>{object.inRange ? 'Questo oggetto è a portata di mano.' : 'Questo oggetto è fuori portata.'}</Text>

        {object.inRange && (
          <Button
            title={`Interagisci con ${object.name}`}
            onPress={this.handleAction}
          />
        )}
      </View>
    );
  }
}

export default ObjectDetail;
