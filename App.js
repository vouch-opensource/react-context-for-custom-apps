import React from 'react';


import {
  Image,
  Text,
  View,
} from 'react-native';
import Button from '../reactThemeTechnicalBlog/button/button.js';

const App = () => {

  const Logo = require('../reactThemeTechnicalBlog/assets/vouch_logo.png');

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 20}}>Welcome to Digital Key</Text>
      <Image 
      style={{margin: 50}}
        source={Logo}/>
        <Button title="View Vehicle"/>
        <Button title="Start Vehicle"/>
    </View>
  )
};

export default App;
