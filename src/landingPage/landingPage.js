import React, {useContext} from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import Button from '../button/button.js';
import ThemeContext from '../../theme/themeContext.js';

const LandingPage = () => {
  const { landingPageComponent: styles, styleGuide } = useContext(ThemeContext);
  const Logo = require('../assets/vouch_logo.png');

  return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: styleGuide.palette.brand3}}>
            <Text style={{fontSize: 20}}>Welcome to Digital Key</Text>
            <Image style={{margin: 50}} source={Logo}/>
                <Button title="View Vehicle"/>
                <Button title="Start Vehicle"/>
        </View>
  )
};

export default LandingPage;
