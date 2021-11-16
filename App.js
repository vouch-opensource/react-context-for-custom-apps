import React, { useState } from 'react';

import {
  Image,
  Text,
  View,
} from 'react-native';
import Button from '../reactThemeTechnicalBlog/button/button.js';

const App = () => {

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 20}}>Welcome to Digital Key</Text>
      <Image 
      style={{margin: 50}}
        source={require('../reactThemeTechnicalBlog/assets/vouch_logo.png')}/>
        <Button title="View Vehicle"/>
        <Button title="Start Vehicle"/>
    </View>
  )
};

export default App;
