import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, Switch } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Giocatore',
      profileImage: null,
      lifePoints: 100,
      experiencePoints: 0,
      shareLocation: false,
    };
  }

  chooseImage = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.uri) {
        this.setState({ profileImage: response.uri });
      }
    });
  };

  toggleShareLocation = () => {
    this.setState(prevState => ({ shareLocation: !prevState.shareLocation }));
  };

  render() {
    const { username, profileImage, lifePoints, experiencePoints, shareLocation } = this.state;

    return (
      <View>
        <Text>Profilo Utente</Text>
        <Text>Nome:</Text>
        <TextInput
          value={username}
          onChangeText={(text) => this.setState({ username: text })}
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <Text>Immagine di Profilo:</Text>
        <Button title="Seleziona Immagine" onPress={this.chooseImage} />
        {profileImage && <Image source={{ uri: profileImage }} style={{ width: 100, height: 100 }} />}
        <Text>Punti Vita: {lifePoints}</Text>
        <Text>Punti Esperienza: {experiencePoints}</Text>
        <Text>Condividi la mia posizione con altri giocatori:</Text>
        <Switch
          value={shareLocation}
          onValueChange={this.toggleShareLocation}
        />
      </View>
    );
  }
}

export default ProfileScreen;
