import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import ThemeContext from '../../theme/themeContext.js';

export default ({
    title,
    onPress,
}) => {
    const { buttonComponent: styles, styleGuide } = useContext(ThemeContext);
    return (
        <Pressable
            onPress={() => onPress && onPress()}
            style={{      
        height: 54,
        paddingHorizontal: 20,
        margin: 10,
        borderColor: styleGuide.palette.brand1,
        borderWidth: 3,
        backgroundColor: styleGuide.palette.brand2,
        justifyContent: 'center',
    }}
        >
            <View style={{ 
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',}}>
                <Text style={{textAlign: 'center'}}>{title}</Text>
            </View>
        </Pressable>
    );
};