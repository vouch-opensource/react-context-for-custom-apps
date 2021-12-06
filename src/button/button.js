import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import ThemeContext from '../../theme/themeContext.js';

export default ({
    title,
    onPress,
}) => {
    const { styleGuide } = useContext(ThemeContext);
    return (
        <Pressable
            onPress={() => onPress && onPress()}
            style={[{      
                height: 54,
                paddingHorizontal: 20,
                margin: 10,
                borderWidth: 3,
                justifyContent: 'center',
            }, styleGuide.type.button]}>
            <View style={{ 
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}>
                <Text style={[styleGuide.type.buttonLabel, {textAlign: 'center'}]}>{title}</Text>
            </View>
        </Pressable>
    );
};