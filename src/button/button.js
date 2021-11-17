import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import ThemeContext from '../../theme/themeContext.js';

export default ({
    title,
    onPress,
}) => {
    const { buttonComponent: styles, styleGuide, themeId } = useContext(ThemeContext);
    return (
        <Pressable
            onPress={() => onPress && onPress()}
            style={[styles.container, styleGuide.type.button]}>
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