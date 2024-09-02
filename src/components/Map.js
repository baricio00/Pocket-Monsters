import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class GameMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPosition: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      objects: [
        { id: 1, name: 'Mostro', latitude: 37.78925, longitude: -122.4324 },
        { id: 2, name: 'Caramella', latitude: 37.78845, longitude: -122.4334 },
      ],
    };
  }

  render() {
    const { userPosition, objects } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={userPosition}
          showsUserLocation={true}
        >
          {objects.map((object) => (
            <Marker
              key={object.id}
              coordinate={{ latitude: object.latitude, longitude: object.longitude }}
              title={object.name}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

export default GameMap;
