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
        A: <Image style={{margin: 20}} source={require('../assets/companyA_logo.png')}/>,
        B: <Image style={{margin: 20}} source={require('../assets/companyB_logo.png')}/>
    }

    const backgroundColor = {
      A: styleGuide.palette.brand1,
      B: styleGuide.palette.brand2,
    }
  
  return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: backgroundColor[themeId]}}>
            <Text style={styleGuide.type.heading1}>Welcome to Digital Key</Text>
                {logoImage[themeId] || <Image style={{margin: 50}} source={require('../assets/vouch_logo.png')}/>}
                <Button title="View Vehicle"/>
                {features.showStartVehicle && <Button title="Start Vehicle"/>}
        </View>
  )
};

export default LandingPage;
