import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

class ObjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: [
        {
          id: 1,
          name: 'Mostro',
          type: 'monster',
          image: 'https://example.com/monster.png', // Sostituisci con un URL valido o un asset locale
          inRange: true,
          level: 5,
        },
        {
          id: 2,
          name: 'Caramella',
          type: 'candy',
          image: 'https://example.com/candy.png',
          inRange: false,
          level: 3,
        },
        {
          id: 3,
          name: 'Artefatto',
          type: 'artifact',
          image: 'https://example.com/artifact.png',
          inRange: true,
          level: 10,
        },
      ],
    };
  }

  renderObject = ({ item }) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('ObjectDetail', { object: item })}>
      <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Image source={{ uri: item.image }} style={{ width: 50, height: 50, marginRight: 10 }} />
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text>Tipo: {item.type}</Text>
          <Text>Livello: {item.level}</Text>
          <Text>{item.inRange ? 'A portata di mano' : 'Fuori portata'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { objects } = this.state;

    return (
      <View style={{ flex: 1, padding: 10 }}>
        <FlatList
          data={objects}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderObject}
        />
      </View>
    );
  }
}

export default ObjectList;
