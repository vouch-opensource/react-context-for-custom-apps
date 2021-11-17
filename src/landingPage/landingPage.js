import React, {useContext} from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import Button from '../button/button.js';
import ThemeContext from '../../theme/themeContext.js';

const LandingPage = () => {
    const { landingPageComponent: styles, styleGuide, features, themeId } = useContext(ThemeContext);

    const logoImage = {
        sunray: <Image style={{margin: 20}} source={require('../assets/sunray_logo.png')}/>,
        moonlight: <Image style={{margin: 20}} source={require('../assets/moonlight_logo.png')}/>
    }
  
  return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: styleGuide.palette.brand3}}>
            <Text style={styleGuide.type.heading1}>Welcome to Digital Key</Text>
                {logoImage[themeId] || <Image style={{margin: 50}} source={require('../assets/vouch_logo.png')}/>}
                <Button title="View Vehicle"/>
                {features.showStartVehicle && <Button title="Start Vehicle"/>}
        </View>
  )
};

export default LandingPage;
